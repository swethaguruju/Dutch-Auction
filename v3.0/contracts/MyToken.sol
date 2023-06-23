
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    uint256 public maxSupply;

    constructor(uint256 max) ERC20("My Token", "MYT") {
        maxSupply = max;
    }

    function currentPrice() public pure returns (uint256) {
        return 100;
    }

    function invoice(uint256 totalItems) internal pure returns (uint256) {
        return currentPrice() * totalItems;
    }

    function refund(uint256 excess) internal {
        payable(msg.sender).transfer(excess);
    }

   function mint(uint256 amount) internal {
        require(amount < maxSupply - totalSupply(), "Limit exceeded");
        _mint(msg.sender, amount);
    }

    function buy(uint256 amountOfTokens) payable public {
  //  require(amountOfTokens > 0, "Invalid token amount");
    uint256 totalPrice = invoice(amountOfTokens);
  //  require(msg.value >= totalPrice, "Insufficient amount");

    if (msg.value > totalPrice) {
     uint256 excessAmount = msg.value - totalPrice;
       refund(excessAmount);
    }

    mint(amountOfTokens);
}

   
  }


