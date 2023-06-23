
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;


interface IMyNFT{
    function transferFrom(address _from, address _to, uint _nftId) external;
    function ownerOf(uint id) external view returns (address owner);
}

interface IMyToken{
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract NFTDutchAuction_ERC20Bids {
    uint256 public nft_Id;
    IMyNFT public nft_Address;
    IMyToken public addressOfToken;
    uint256 public reservePrice;
    uint256 public numBlocksAuctionOpen;
    address public sellerAccountAddress;
    uint256 public offerPriceDecrement;
    uint256 public initialPrice;
    uint256 public startingBlock;
    address public buyer;
    bool public auctionStatusOpen;

constructor(address erc20TokenAddress,address erc721TokenAddress,uint256 _nftTokenId,uint256 _reservePrice,uint256 _numBlocksAuctionOpen,uint256 _offerPriceDecrement ) 
{
        nft_Id = _nftTokenId;
        nft_Address = IMyNFT(erc721TokenAddress);
        addressOfToken = IMyToken(erc20TokenAddress);
        
       sellerAccountAddress  = msg.sender;
        startingBlock = block.number;
        auctionStatusOpen = true;
        reservePrice = _reservePrice;
        numBlocksAuctionOpen = _numBlocksAuctionOpen;
        offerPriceDecrement = _offerPriceDecrement;


        initialPrice = reservePrice + (numBlocksAuctionOpen * offerPriceDecrement);
    }

    function currentBlock() public view returns (uint256) {
        return block.number;
    }

    function blockDifference() public view returns (uint256) {
        return currentBlock() - startingBlock;
    }

 

   function isAuctionOpen() public view returns (bool) {
    uint256 blockDiff = blockDifference();
    return blockDiff <= numBlocksAuctionOpen && block.number >= startingBlock;
    }

    function finalize(address addy) private {
        nft_Address.transferFrom(sellerAccountAddress, addy, nft_Id);
        buyer = nft_Address.ownerOf(nft_Id);
        auctionStatusOpen = false;
    }
      function currentPrice() public view returns (uint256) {
    uint256 blockDiff = blockDifference();
    return blockDiff >= numBlocksAuctionOpen ? reservePrice : initialPrice - (blockDiff * offerPriceDecrement);
}

    function bid(uint256 amount) public {
        require(isAuctionOpen(), "Auction is closed");
      require(msg.sender != buyer, "You already bought this product");
      require(buyer == address(0), "Product already sold");
       require(msg.sender != sellerAccountAddress, "Owner can't Bid");
      require(amount >= currentPrice(), "ETH is insufficient");

        bool tryToSend = addressOfToken.transferFrom(msg.sender, sellerAccountAddress, currentPrice());
        require(tryToSend, "Failed to send ERC20 tokens");

        finalize(msg.sender);
    }
}