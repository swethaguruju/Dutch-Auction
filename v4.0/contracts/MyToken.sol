//SPDX-License-Identifier:MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20("My Coin","UNC"){

    // state variables maintaining the total Supply of NFT's
    uint256 public maxSupply;

    // @param max: initializing with a limited total supply of Tokens
    constructor(uint max) {
        maxSupply = max;
    }

    // @return current price of a coin or token
    function currentPrice() public pure returns(uint256){
        return 100;
    }

    
    function invoice(uint256 totalItems) internal pure returns(uint256){
        return currentPrice() * totalItems;
    }

    function refund(uint256 excess) internal {
        payable(msg.sender).transfer(excess);
    }


    function mint(uint256 amount) internal {

        // checking if maximum num. of Token's are Minted
        require(amount < maxSupply - totalSupply(), "Limit exceeded");

        // Utilizing _mint from ERC20 standard to handle mint
        _mint(msg.sender, amount );
    }


    
    function buy(uint amountOfTokens) payable public {

        //check if suffiecient amount is sent
        uint256 totalPrice = invoice(amountOfTokens);
        require(msg.value >= totalPrice, "Insufficient amount");

        //refund if excess amoun is sent
        if(msg.value > totalPrice){
            refund(msg.value - totalPrice);
        }

        // mint Tokens to msg.sender
        mint(amountOfTokens);
    }

}