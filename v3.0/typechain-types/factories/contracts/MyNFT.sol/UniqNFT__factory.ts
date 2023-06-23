/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  UniqNFT,
  UniqNFTInterface,
} from "../../../contracts/MyNFT.sol/UniqNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "max",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200306b3803806200306b833981810160405281019062000037919062000240565b6040518060400160405280600881526020017f554e4951204e46540000000000000000000000000000000000000000000000008152506040518060400160405280600281526020017f554e0000000000000000000000000000000000000000000000000000000000008152508160009081620000b49190620004e2565b508060019081620000c69190620004e2565b505050620000e9620000dd6200012f60201b60201c565b6200013760201b60201c565b62000105670b1d9a8175e4306f60c01b620001fd60201b60201c565b62000121676cb857e3c262f27560c01b620001fd60201b60201c565b8060098190555050620005c9565b600033905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b50565b600080fd5b6000819050919050565b6200021a8162000205565b81146200022657600080fd5b50565b6000815190506200023a816200020f565b92915050565b60006020828403121562000259576200025862000200565b5b6000620002698482850162000229565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002f457607f821691505b6020821081036200030a5762000309620002ac565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003747fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000335565b62000380868362000335565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620003c3620003bd620003b78462000205565b62000398565b62000205565b9050919050565b6000819050919050565b620003df83620003a2565b620003f7620003ee82620003ca565b84845462000342565b825550505050565b600090565b6200040e620003ff565b6200041b818484620003d4565b505050565b5b8181101562000443576200043760008262000404565b60018101905062000421565b5050565b601f82111562000492576200045c8162000310565b620004678462000325565b8101602085101562000477578190505b6200048f620004868562000325565b83018262000420565b50505b505050565b600082821c905092915050565b6000620004b76000198460080262000497565b1980831691505092915050565b6000620004d28383620004a4565b9150826002028217905092915050565b620004ed8262000272565b67ffffffffffffffff8111156200050957620005086200027d565b5b620005158254620002db565b6200052282828562000447565b600060209050601f8311600181146200055a576000841562000545578287015190505b620005518582620004c4565b865550620005c1565b601f1984166200056a8662000310565b60005b8281101562000594578489015182556001820191506020850194506020810190506200056d565b86831015620005b45784890151620005b0601f891682620004a4565b8355505b6001600288020188555050505b505050505050565b612a9280620005d96000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c8063715018a6116100ad578063b88d4fde11610071578063b88d4fde146102f4578063c87b56dd14610310578063d5abeb0114610340578063e985e9c51461035e578063f2fde38b1461038e57610121565b8063715018a614610274578063771282f61461027e5780638da5cb5b1461029c57806395d89b41146102ba578063a22cb465146102d857610121565b806323b872dd116100f457806323b872dd146101c057806340d097c3146101dc57806342842e0e146101f85780636352211e1461021457806370a082311461024457610121565b806301ffc9a71461012657806306fdde0314610156578063081812fc14610174578063095ea7b3146101a4575b600080fd5b610140600480360381019061013b9190611bad565b6103aa565b60405161014d9190611bf5565b60405180910390f35b61015e61048c565b60405161016b9190611ca0565b60405180910390f35b61018e60048036038101906101899190611cf8565b61051e565b60405161019b9190611d66565b60405180910390f35b6101be60048036038101906101b99190611dad565b610564565b005b6101da60048036038101906101d59190611ded565b61067b565b005b6101f660048036038101906101f19190611e40565b6106db565b005b610212600480360381019061020d9190611ded565b610851565b005b61022e60048036038101906102299190611cf8565b610871565b60405161023b9190611d66565b60405180910390f35b61025e60048036038101906102599190611e40565b6108f7565b60405161026b9190611e7c565b60405180910390f35b61027c6109ae565b005b6102866109c2565b6040516102939190611e7c565b60405180910390f35b6102a46109c8565b6040516102b19190611d66565b60405180910390f35b6102c26109f2565b6040516102cf9190611ca0565b60405180910390f35b6102f260048036038101906102ed9190611ec3565b610a84565b005b61030e60048036038101906103099190612038565b610a9a565b005b61032a60048036038101906103259190611cf8565b610afc565b6040516103379190611ca0565b60405180910390f35b610348610b64565b6040516103559190611e7c565b60405180910390f35b610378600480360381019061037391906120bb565b610b6a565b6040516103859190611bf5565b60405180910390f35b6103a860048036038101906103a39190611e40565b610bfe565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061047557507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610485575061048482610c81565b5b9050919050565b60606000805461049b9061212a565b80601f01602080910402602001604051908101604052809291908181526020018280546104c79061212a565b80156105145780601f106104e957610100808354040283529160200191610514565b820191906000526020600020905b8154815290600101906020018083116104f757829003601f168201915b5050505050905090565b600061052982610ceb565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061056f82610871565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d6906121cd565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105fe610d36565b73ffffffffffffffffffffffffffffffffffffffff16148061062d575061062c81610627610d36565b610b6a565b5b61066c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106639061225f565b60405180910390fd5b6106768383610d3e565b505050565b61068c610686610d36565b82610df7565b6106cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c2906122f1565b60405180910390fd5b6106d6838383610e8c565b505050565b6106ef67ea263d44a9d6f7e960c01b611185565b6106f7611188565b61070b67b6b99fae0d4df02860c01b611185565b61071f674cb9ab2991318fee60c01b611185565b61073367b5d02245a2067e9360c01b611185565b61074767cf079e3efcf3b36860c01b611185565b61075b67325535b9989f929060c01b611185565b600854600954116107a1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107989061235d565b60405180910390fd5b6107b56701e4a03b7a9e016e60c01b611185565b6107c967fd12e220c1b8ce3e60c01b611185565b6107dd676276f6e9c02a70ce60c01b611185565b6107e76007611206565b6107fb676f579b81f17b21c860c01b611185565b61080f6794d608f60e231bca60c01b611185565b6108228161081d600761121c565b61122a565b610836671a5a50a84955bf3c60c01b611185565b60086000815480929190610849906123ac565b919050555050565b61086c83838360405180602001604052806000815250610a9a565b505050565b60008061087d83611447565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036108ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e590612440565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610967576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095e906124d2565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6109b6611188565b6109c06000611484565b565b60085481565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610a019061212a565b80601f0160208091040260200160405190810160405280929190818152602001828054610a2d9061212a565b8015610a7a5780601f10610a4f57610100808354040283529160200191610a7a565b820191906000526020600020905b815481529060010190602001808311610a5d57829003601f168201915b5050505050905090565b610a96610a8f610d36565b838361154a565b5050565b610aab610aa5610d36565b83610df7565b610aea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae1906122f1565b60405180910390fd5b610af6848484846116b6565b50505050565b6060610b0782610ceb565b6000610b11611712565b90506000815111610b315760405180602001604052806000815250610b5c565b80610b3b84611729565b604051602001610b4c92919061252e565b6040516020818303038152906040525b915050919050565b60095481565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610c06611188565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610c75576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6c906125c4565b60405180910390fd5b610c7e81611484565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610cf4816117f7565b610d33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2a90612440565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610db183610871565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610e0383610871565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610e455750610e448185610b6a565b5b80610e8357508373ffffffffffffffffffffffffffffffffffffffff16610e6b8461051e565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610eac82610871565b73ffffffffffffffffffffffffffffffffffffffff1614610f02576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef990612656565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f71576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f68906126e8565b60405180910390fd5b610f7e8383836001611838565b8273ffffffffffffffffffffffffffffffffffffffff16610f9e82610871565b73ffffffffffffffffffffffffffffffffffffffff1614610ff4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610feb90612656565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611180838383600161183e565b505050565b50565b611190610d36565b73ffffffffffffffffffffffffffffffffffffffff166111ae6109c8565b73ffffffffffffffffffffffffffffffffffffffff1614611204576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111fb90612754565b60405180910390fd5b565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611299576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611290906127c0565b60405180910390fd5b6112a2816117f7565b156112e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112d99061282c565b60405180910390fd5b6112f0600083836001611838565b6112f9816117f7565b15611339576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113309061282c565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461144360008383600161183e565b5050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036115b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115af90612898565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516116a99190611bf5565b60405180910390a3505050565b6116c1848484610e8c565b6116cd84848484611844565b61170c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117039061292a565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060006001611738846119cb565b01905060008167ffffffffffffffff81111561175757611756611f0d565b5b6040519080825280601f01601f1916602001820160405280156117895781602001600182028036833780820191505090505b509050600082602001820190505b6001156117ec578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816117e0576117df61294a565b5b04945060008503611797575b819350505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff1661181983611447565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b50505050565b50505050565b60006118658473ffffffffffffffffffffffffffffffffffffffff16611b1e565b156119be578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261188e610d36565b8786866040518563ffffffff1660e01b81526004016118b094939291906129ce565b6020604051808303816000875af19250505080156118ec57506040513d601f19601f820116820180604052508101906118e99190612a2f565b60015b61196e573d806000811461191c576040519150601f19603f3d011682016040523d82523d6000602084013e611921565b606091505b506000815103611966576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161195d9061292a565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506119c3565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611a29577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611a1f57611a1e61294a565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611a66576d04ee2d6d415b85acef81000000008381611a5c57611a5b61294a565b5b0492506020810190505b662386f26fc100008310611a9557662386f26fc100008381611a8b57611a8a61294a565b5b0492506010810190505b6305f5e1008310611abe576305f5e1008381611ab457611ab361294a565b5b0492506008810190505b6127108310611ae3576127108381611ad957611ad861294a565b5b0492506004810190505b60648310611b065760648381611afc57611afb61294a565b5b0492506002810190505b600a8310611b15576001810190505b80915050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611b8a81611b55565b8114611b9557600080fd5b50565b600081359050611ba781611b81565b92915050565b600060208284031215611bc357611bc2611b4b565b5b6000611bd184828501611b98565b91505092915050565b60008115159050919050565b611bef81611bda565b82525050565b6000602082019050611c0a6000830184611be6565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611c4a578082015181840152602081019050611c2f565b60008484015250505050565b6000601f19601f8301169050919050565b6000611c7282611c10565b611c7c8185611c1b565b9350611c8c818560208601611c2c565b611c9581611c56565b840191505092915050565b60006020820190508181036000830152611cba8184611c67565b905092915050565b6000819050919050565b611cd581611cc2565b8114611ce057600080fd5b50565b600081359050611cf281611ccc565b92915050565b600060208284031215611d0e57611d0d611b4b565b5b6000611d1c84828501611ce3565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611d5082611d25565b9050919050565b611d6081611d45565b82525050565b6000602082019050611d7b6000830184611d57565b92915050565b611d8a81611d45565b8114611d9557600080fd5b50565b600081359050611da781611d81565b92915050565b60008060408385031215611dc457611dc3611b4b565b5b6000611dd285828601611d98565b9250506020611de385828601611ce3565b9150509250929050565b600080600060608486031215611e0657611e05611b4b565b5b6000611e1486828701611d98565b9350506020611e2586828701611d98565b9250506040611e3686828701611ce3565b9150509250925092565b600060208284031215611e5657611e55611b4b565b5b6000611e6484828501611d98565b91505092915050565b611e7681611cc2565b82525050565b6000602082019050611e916000830184611e6d565b92915050565b611ea081611bda565b8114611eab57600080fd5b50565b600081359050611ebd81611e97565b92915050565b60008060408385031215611eda57611ed9611b4b565b5b6000611ee885828601611d98565b9250506020611ef985828601611eae565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611f4582611c56565b810181811067ffffffffffffffff82111715611f6457611f63611f0d565b5b80604052505050565b6000611f77611b41565b9050611f838282611f3c565b919050565b600067ffffffffffffffff821115611fa357611fa2611f0d565b5b611fac82611c56565b9050602081019050919050565b82818337600083830152505050565b6000611fdb611fd684611f88565b611f6d565b905082815260208101848484011115611ff757611ff6611f08565b5b612002848285611fb9565b509392505050565b600082601f83011261201f5761201e611f03565b5b813561202f848260208601611fc8565b91505092915050565b6000806000806080858703121561205257612051611b4b565b5b600061206087828801611d98565b945050602061207187828801611d98565b935050604061208287828801611ce3565b925050606085013567ffffffffffffffff8111156120a3576120a2611b50565b5b6120af8782880161200a565b91505092959194509250565b600080604083850312156120d2576120d1611b4b565b5b60006120e085828601611d98565b92505060206120f185828601611d98565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061214257607f821691505b602082108103612155576121546120fb565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006121b7602183611c1b565b91506121c28261215b565b604082019050919050565b600060208201905081810360008301526121e6816121aa565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000612249603d83611c1b565b9150612254826121ed565b604082019050919050565b600060208201905081810360008301526122788161223c565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b60006122db602d83611c1b565b91506122e68261227f565b604082019050919050565b6000602082019050818103600083015261230a816122ce565b9050919050565b7f616c7265616479206d696e746564206d61780000000000000000000000000000600082015250565b6000612347601283611c1b565b915061235282612311565b602082019050919050565b600060208201905081810360008301526123768161233a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006123b782611cc2565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036123e9576123e861237d565b5b600182019050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b600061242a601883611c1b565b9150612435826123f4565b602082019050919050565b600060208201905081810360008301526124598161241d565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b60006124bc602983611c1b565b91506124c782612460565b604082019050919050565b600060208201905081810360008301526124eb816124af565b9050919050565b600081905092915050565b600061250882611c10565b61251281856124f2565b9350612522818560208601611c2c565b80840191505092915050565b600061253a82856124fd565b915061254682846124fd565b91508190509392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006125ae602683611c1b565b91506125b982612552565b604082019050919050565b600060208201905081810360008301526125dd816125a1565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612640602583611c1b565b915061264b826125e4565b604082019050919050565b6000602082019050818103600083015261266f81612633565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006126d2602483611c1b565b91506126dd82612676565b604082019050919050565b60006020820190508181036000830152612701816126c5565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061273e602083611c1b565b915061274982612708565b602082019050919050565b6000602082019050818103600083015261276d81612731565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006127aa602083611c1b565b91506127b582612774565b602082019050919050565b600060208201905081810360008301526127d98161279d565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612816601c83611c1b565b9150612821826127e0565b602082019050919050565b6000602082019050818103600083015261284581612809565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612882601983611c1b565b915061288d8261284c565b602082019050919050565b600060208201905081810360008301526128b181612875565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612914603283611c1b565b915061291f826128b8565b604082019050919050565b6000602082019050818103600083015261294381612907565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600081519050919050565b600082825260208201905092915050565b60006129a082612979565b6129aa8185612984565b93506129ba818560208601611c2c565b6129c381611c56565b840191505092915050565b60006080820190506129e36000830187611d57565b6129f06020830186611d57565b6129fd6040830185611e6d565b8181036060830152612a0f8184612995565b905095945050505050565b600081519050612a2981611b81565b92915050565b600060208284031215612a4557612a44611b4b565b5b6000612a5384828501612a1a565b9150509291505056fea26469706673582212208b2b311d747f6b567798b7998c9239df34fb487c5b4b089d473257040d42f70064736f6c63430008110033";

type UniqNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniqNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniqNFT__factory extends ContractFactory {
  constructor(...args: UniqNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    max: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UniqNFT> {
    return super.deploy(max, overrides || {}) as Promise<UniqNFT>;
  }
  override getDeployTransaction(
    max: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(max, overrides || {});
  }
  override attach(address: string): UniqNFT {
    return super.attach(address) as UniqNFT;
  }
  override connect(signer: Signer): UniqNFT__factory {
    return super.connect(signer) as UniqNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniqNFTInterface {
    return new utils.Interface(_abi) as UniqNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniqNFT {
    return new Contract(address, _abi, signerOrProvider) as UniqNFT;
  }
}
