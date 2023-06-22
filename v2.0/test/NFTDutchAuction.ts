import { loadFixture, mine } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Minting & Auctioning NFT", function () {
  async function deployNFTDutchAuctionFixture() {
    const [owner, otherAccount, otherAccount2] = await ethers.getSigners();

    const MyNFTFactory = await ethers.getContractFactory("MyNFT");
    const myNFTFactory = await MyNFTFactory.connect(owner).deploy(10);

    await myNFTFactory.safeMint(owner.address);

    const NFTDutchAuctionFactory = await ethers.getContractFactory("NFTDutchAuction");
    const nftDutchAuction = await NFTDutchAuctionFactory.deploy(
      myNFTFactory.address,
      1,
      100,
      10,
      10
    );

    await myNFTFactory.approve(nftDutchAuction.address, 1);

    return { myNFTFactory, nftDutchAuction, owner, otherAccount, otherAccount2 };
  }

  describe("MyNFT & Dutch Auction Deployment", function () {
    it("Safe Mint NFT", async function () {
      const { myNFTFactory, owner } = await loadFixture(deployNFTDutchAuctionFixture);
      expect(await myNFTFactory.safeMint(owner.address));
      expect(await myNFTFactory.balanceOf(owner.address)).to.equal(2);
      expect(await myNFTFactory.ownerOf(2)).to.equal(owner.address);
    });
    

   
      
    it("Place bid by the buyer", async function () {
        const { myNFTFactory, nftDutchAuction, owner, otherAccount } = await loadFixture(deployNFTDutchAuctionFixture);
      
    
        await myNFTFactory.safeMint(otherAccount.address);
      
        
        await myNFTFactory.connect(otherAccount).approve(nftDutchAuction.address, 2);
      
    
        const currentPrice = await nftDutchAuction.getCurrentPrice();
        expect(await nftDutchAuction.connect(otherAccount).placeBid({ value: currentPrice })).to.be.revertedWith("Product already purchased");
      });
      
    it("Place bid on open auction as a new bidder", async function () {
        const { nftDutchAuction, otherAccount } = await loadFixture(deployNFTDutchAuctionFixture);
        const currentPrice = await nftDutchAuction.getCurrentPrice();
        expect(await nftDutchAuction.connect(otherAccount).placeBid({ value: currentPrice })).to.not.be.reverted;
      });
      

    it("Malicious Mint failure", async function () {
      const { myNFTFactory, otherAccount } = await loadFixture(deployNFTDutchAuctionFixture);
      await expect(
        myNFTFactory.connect(otherAccount).safeMint(otherAccount.address)
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });



    it("Check seller is owner", async function () {
      const { nftDutchAuction, owner } = await loadFixture(deployNFTDutchAuctionFixture);
      expect(await nftDutchAuction.seller()).to.equal(owner.address);
    });
    it("Seller can't Bid", async function () {
      const { nftDutchAuction, owner } = await loadFixture(deployNFTDutchAuctionFixture);
      await expect(nftDutchAuction.connect(owner).placeBid({ value: 200 })).to.be.revertedWith(
        "Owner can't bid"
      );
    });
    
    it("Product is still available for bid", async function () {
      const { nftDutchAuction } = await loadFixture(deployNFTDutchAuctionFixture);
      expect(await nftDutchAuction.buyer()).to.equal(ethers.constants.AddressZero);
    });

    it("Auction Status is Open", async function () {
      const { nftDutchAuction } = await loadFixture(deployNFTDutchAuctionFixture);
      expect(await nftDutchAuction.auctionStatusOpen()).to.equal(true);
    });

    it("Number of rounds", async function () {
      const { nftDutchAuction } = await loadFixture(deployNFTDutchAuctionFixture);
      const hashOfTx = nftDutchAuction.deployTransaction.hash;
      const initBlock = (await nftDutchAuction.provider.getTransactionReceipt(hashOfTx)).blockNumber;
      const currentBlock = await ethers.provider.getBlockNumber();
      expect(10).to.greaterThanOrEqual(currentBlock - initBlock);
    });

    it("Wei is not sufficient", async function () {
      const { nftDutchAuction, otherAccount } = await loadFixture(deployNFTDutchAuctionFixture);
      expect(
        nftDutchAuction.connect(otherAccount).placeBid({ value: 10 })
      ).to.be.revertedWith("WEI is not sufficient");
    });
    

      
     it("Successful Bid and wallet balance checks", async function () {
        const { myNFTFactory, nftDutchAuction, owner, otherAccount } = await loadFixture(deployNFTDutchAuctionFixture);

        expect(await myNFTFactory.balanceOf(owner.address)).to.equal(1);
        
        expect(await nftDutchAuction.connect(otherAccount).placeBid({value: 1000}));

        expect(await myNFTFactory.balanceOf(owner.address)).to.equal(0);
        expect(await myNFTFactory.balanceOf(otherAccount.address)).to.equal(1);

        expect(await nftDutchAuction.connect(owner).buyer()).to.equal(otherAccount.address);

        expect(await nftDutchAuction.auctionStatusOpen()).to.equal(false)

    });
    


    it("Product already purchased", async function () {
      const { nftDutchAuction, otherAccount } = await loadFixture(deployNFTDutchAuctionFixture);
      expect(
        nftDutchAuction.connect(otherAccount).placeBid({ value: 1000 })
      ).to.be.revertedWith("Product already purchased");
    });

    it("failure Bid as item is already sold", async function () {
      const { nftDutchAuction, otherAccount2 } = await loadFixture(deployNFTDutchAuctionFixture);
      expect(
        nftDutchAuction.connect(otherAccount2).placeBid({ value: 100000 })
      ).to.be.revertedWith("Product already sold");
    });

    it("Place bid on closed auction", async function () {
        const { nftDutchAuction, otherAccount } = await loadFixture(deployNFTDutchAuctionFixture);
        await mine(100);
  
        await expect(
          nftDutchAuction.connect(otherAccount).placeBid({ value: 100 })
        ).to.be.revertedWith("Auction is closed");
      });
    it("Block passed - Auction closed", async function () {
      const { nftDutchAuction, otherAccount } = await loadFixture(deployNFTDutchAuctionFixture);
      await mine(100);
      expect(nftDutchAuction.connect(otherAccount).placeBid({ value: 10 })).to.be.revertedWith(
        "Auction is closed"
      );
      it("Place bid on open auction with insufficient WEI", async function () {
        const { nftDutchAuction, otherAccount } = await loadFixture(deployNFTDutchAuctionFixture);
        expect(
          nftDutchAuction.connect(otherAccount).placeBid({ value: 9 })
        ).to.be.revertedWith("WEI is not sufficient");
      });
      
      it("Place bid after buying the product", async function () {
        const { nftDutchAuction, owner, otherAccount } = await loadFixture(deployNFTDutchAuctionFixture);
        await nftDutchAuction.connect(otherAccount).placeBid({ value: 1000 });
  
        await expect(
          nftDutchAuction.connect(otherAccount).placeBid({ value: 100 })
        ).to.be.revertedWith("Product already purchased");
      });
    });
  });
});
