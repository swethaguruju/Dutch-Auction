// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

interface IMyNFT {
    function transferFrom(address _from, address _to, uint256 _nftId) external;

    function ownerOf(uint256 _id) external view returns (address _owner);
}

contract NFTDutchAuction {
    uint256 public nft_Id;
    IMyNFT public nft_Address;
    uint256 public reservePrice;
    uint256 public numBlocksAuctionOpen;
    uint256 public offerPriceDecrement;
    address public buyer;
    address public seller;
    uint256 public startingBlock;
    uint256 public initialPrice;
    bool public auctionStatusOpen;

    constructor(
        address _nftAddress,
        uint256 _nftId,
        uint256 _reservePrice,
        uint256 _numBlocksAuctionOpen,
        uint256 _offerPriceDecrement
    ) {
        seller = payable(msg.sender);
        startingBlock = block.number;
        auctionStatusOpen = true;

        nft_Id = _nftId;
        nft_Address = IMyNFT(_nftAddress);

        require(
         nft_Address.ownerOf(nft_Id) == msg.sender,
         "You don't own this NFT to sell");


        reservePrice = _reservePrice;
        numBlocksAuctionOpen = _numBlocksAuctionOpen;
        offerPriceDecrement = _offerPriceDecrement;
        uint256 initialPrice1 = numBlocksAuctionOpen * offerPriceDecrement;
        initialPrice = initialPrice1 + reservePrice;

    }
    function getCurrentPrice() public view returns (uint256) {
    uint256 blockDiff = getBlockDiff();
    uint256 currentPrice;

    if (blockDiff >= numBlocksAuctionOpen) {
        currentPrice = reservePrice;
    } else {
        currentPrice = initialPrice - (blockDiff * offerPriceDecrement);
    }

    return currentPrice;
}

    function getCurrBlock() public view returns (uint256) {
        return block.number;
    }

  function getBlockDiff() public view returns (uint256) {
    uint256 currentBlock = getCurrBlock();
    uint256 startingBlock1 = startingBlock;
    uint256 blockDiff = currentBlock > startingBlock1 ? currentBlock - startingBlock1 : 0;
    return blockDiff;
}


    function finalizeAuction() private {
        nft_Address.transferFrom(seller, msg.sender, nft_Id);
        buyer = nft_Address.ownerOf(nft_Id);
        auctionStatusOpen = false;
    }

    function placeBid() public payable {
        require(!isAuctionClosed(), "Auction is closed");

        require(msg.sender != buyer, "Product already purchased");
        require(buyer == address(0), "Product already sold");
        require(msg.sender != seller, "Owner can't bid");
        require(msg.value >= getCurrentPrice(), "WEI is not sufficient");

        (bool tryToSend, ) = seller.call{ value: getCurrentPrice() }("");
        require(tryToSend == true, "Failed to send");

        uint256 excess = msg.value - getCurrentPrice();
        if (excess > 0) {
            refundExcess(excess);
        }

        finalizeAuction();
    } 
 

       function refundExcess(uint256 excessAmount) private {
        payable(msg.sender).transfer(excessAmount);
    }
    
 function isAuctionClosed() public view returns (bool) {
    uint256 blockDiff = getBlockDiff();
    uint256 numBlocks = numBlocksAuctionOpen;
    bool auctionClosed = blockDiff > numBlocks;
    return auctionClosed;
}


}
