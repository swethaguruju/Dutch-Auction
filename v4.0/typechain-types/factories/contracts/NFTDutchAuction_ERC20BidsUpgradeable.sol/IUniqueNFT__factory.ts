/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IUniqueNFT,
  IUniqueNFTInterface,
} from "../../../contracts/NFTDutchAuction_ERC20BidsUpgradeable.sol/IUniqueNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "owner",
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
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IUniqueNFT__factory {
  static readonly abi = _abi;
  static createInterface(): IUniqueNFTInterface {
    return new Interface(_abi) as IUniqueNFTInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IUniqueNFT {
    return new Contract(address, _abi, runner) as unknown as IUniqueNFT;
  }
}
