// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFT is ERC721, Ownable {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint public maxLimit;
    uint public currentCount;

    constructor(uint limit) ERC721("My NFT", "MNFT") {
        maxLimit = limit;
    }

   function safeMint(address to) public onlyOwner {
    require(maxLimit > currentCount, "Already reached the maximum limit");

    uint256 newTokenId = _tokenIds.current();
    _tokenIds.increment();
    newTokenId = newTokenId + 1;

    _mint(to, newTokenId);
    currentCount = currentCount + 1;
}

}
