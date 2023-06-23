import { loadFixture, mine } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";



describe("Minting & Auctioning NFT with ERC20", function () {
    async function deployNFTDutchAuctionERC20Fixture() {

        const [owner, otherAccount, otherAccount2] = await ethers.getSigners();

        const NFTFactory = await ethers.getContractFactory("MyNFT");
        const MyNFTFactory = await NFTFactory.connect(owner).deploy(10);

        await MyNFTFactory.safeMint(owner.address);

        const TokenFactory = await ethers.getContractFactory("MyToken");
        const MyTokenFactory = await TokenFactory.connect(owner).deploy(10000);

        await MyTokenFactory.connect(otherAccount).buy(300,{value: 30000});

        const NFTDutchAuctionFactory = await ethers.getContractFactory("NFTDutchAuction_ERC20Bids");
        const nftDutchAuction = await NFTDutchAuctionFactory.deploy(MyTokenFactory.address, MyNFTFactory.address, 1, 100, 10, 10);

        await MyNFTFactory.approve(nftDutchAuction.address, 1);
        await MyTokenFactory.connect(otherAccount).approve(nftDutchAuction.address, 300);

        return {MyNFTFactory, MyTokenFactory, nftDutchAuction, owner, otherAccount, otherAccount2};
    }

    describe("UniqNFT & Dutch Auction Deployment", function () {
        it("Safe Mint NFT", async function () {
            const {MyNFTFactory, owner} = await loadFixture(deployNFTDutchAuctionERC20Fixture);

            expect(await MyNFTFactory.safeMint(owner.address));
            expect(await MyNFTFactory.balanceOf(owner.address)).to.equal(2);
            expect(await MyNFTFactory.ownerOf(2)).to.equal(owner.address);
        });
       
           it("Check ERC20 token allowance after unsuccessful bid", async function () {
            const { MyTokenFactory, nftDutchAuction, otherAccount } = await loadFixture(deployNFTDutchAuctionERC20Fixture);
          
            await expect(nftDutchAuction.connect(otherAccount).bid(10)).to.be.revertedWith("ETH is insufficient");
          
            expect(await MyTokenFactory.allowance(otherAccount.address, nftDutchAuction.address)).to.equal(300);
          });
          
        it("Malicious Mint failure", async function () {
            const { MyNFTFactory, otherAccount } = await loadFixture(deployNFTDutchAuctionERC20Fixture);

            await expect(MyNFTFactory.connect(otherAccount).safeMint(otherAccount.address)).to.be.revertedWith( "Ownable: caller is not the owner");
        });
        it("Check NFT balance after auction ends with a bid", async function () {
            const { MyNFTFactory, nftDutchAuction, owner, otherAccount } = await loadFixture(deployNFTDutchAuctionERC20Fixture);
      
            expect(await nftDutchAuction.connect(otherAccount).bid(200));
      
            await mine(100);
      
            expect(await nftDutchAuction.isAuctionOpen()).to.equal(false);
            expect(await nftDutchAuction.buyer()).to.equal(otherAccount.address);
      
            expect(await MyNFTFactory.balanceOf(owner.address)).to.equal(0);
            expect(await MyNFTFactory.balanceOf(otherAccount.address)).to.equal(1);
          });

        it("check NFT supply", async function () {
            const {MyNFTFactory} = await loadFixture(deployNFTDutchAuctionERC20Fixture);

            expect(await MyNFTFactory.maxSupply()).to.equal(10);
            expect(await MyNFTFactory.currentSupply()).to.equal(1);

        });

        it("check token supply", async function () {
            const {MyTokenFactory} = await loadFixture(deployNFTDutchAuctionERC20Fixture);

            expect(await MyTokenFactory.maxSupply()).to.equal(10000);
            expect(await MyTokenFactory.totalSupply()).to.equal(300);

        });

        it("check token price", async function () {
            const {MyTokenFactory} = await loadFixture(deployNFTDutchAuctionERC20Fixture);

            expect(await MyTokenFactory.currentPrice()).to.equal(100);

        });
        it("Check NFT balance after auction ends without bids", async function () {
            const { MyNFTFactory, nftDutchAuction, owner, otherAccount } = await loadFixture(deployNFTDutchAuctionERC20Fixture);
      
            await mine(100);
      
            expect(await nftDutchAuction.isAuctionOpen()).to.equal(false);
            expect(await nftDutchAuction.buyer()).to.equal(ethers.constants.AddressZero);
      
            expect(await MyNFTFactory.balanceOf(owner.address)).to.equal(1);
            expect(await MyNFTFactory.balanceOf(otherAccount.address)).to.equal(0);
          });
        it("Check NFT balance after unsuccessful bid", async function () {
            const { MyNFTFactory, nftDutchAuction, owner } = await loadFixture(deployNFTDutchAuctionERC20Fixture);
      
            await expect(nftDutchAuction.connect(owner).bid(200)).to.be.revertedWith("Owner can't Bid");
            expect(await MyNFTFactory.balanceOf(owner.address)).to.equal(1);
          });

        it("token Balance Check", async function () {
            const {MyTokenFactory, otherAccount} = await loadFixture(deployNFTDutchAuctionERC20Fixture);

            expect(await MyTokenFactory.balanceOf(otherAccount.address)).to.equal(300);

        });

        it("token Allowance Check", async function () {
            const {MyTokenFactory, nftDutchAuction, otherAccount} = await loadFixture(deployNFTDutchAuctionERC20Fixture);

            expect(await MyTokenFactory.allowance(otherAccount.address,nftDutchAuction.address)).to.equal(300);

        });
        it("Reverts when auction is closed", async function () {
            const { nftDutchAuction, otherAccount } = await loadFixture(deployNFTDutchAuctionERC20Fixture);
        
            // Close the auction by advancing the block number
            await mine(11);
        
            await expect(nftDutchAuction.connect(otherAccount).bid(10)).to.be.revertedWith("Auction is closed");
        });
        

        it('Check seller is owner', async function () {

            const { nftDutchAuction, owner} = await loadFixture(deployNFTDutchAuctionERC20Fixture);
            expect(await nftDutchAuction.sellerAccountAddress()).to.equal(owner.address);

        });

        it("Seller can't Bid", async function () {

            const { nftDutchAuction, owner} = await loadFixture(deployNFTDutchAuctionERC20Fixture);
            await expect(nftDutchAuction.connect(owner).bid(200)).to.be.revertedWith("Owner can't Bid");

        });

        it("Product is still available for bid", async function () {
            const { nftDutchAuction} = await loadFixture(deployNFTDutchAuctionERC20Fixture);

            expect(await nftDutchAuction.buyer()).to.equal(ethers.constants.AddressZero);

        });
        

        it("Auction Status is Open", async function () {
            const { nftDutchAuction} = await loadFixture(deployNFTDutchAuctionERC20Fixture);

            expect(await nftDutchAuction.auctionStatusOpen()).to.equal(true);

        });


        it("Number of rounds", async function () {
            const { nftDutchAuction} = await loadFixture(deployNFTDutchAuctionERC20Fixture);
            const hashOfTx = nftDutchAuction.deployTransaction.hash;
            const initBlock = (await nftDutchAuction.provider.getTransactionReceipt(hashOfTx)).blockNumber;
            const currentBlock = await ethers.provider.getBlockNumber();
            expect(10).to.greaterThanOrEqual(currentBlock-initBlock);

        });

        it("Wei is insufficient", async function () {
            const { nftDutchAuction, otherAccount} = await loadFixture(deployNFTDutchAuctionERC20Fixture);

            expect( nftDutchAuction.connect(otherAccount).bid(10)).to.be.revertedWith("WEI is insufficient");

        });

        it("Successful Bid and balance checks", async function () {
            const { MyNFTFactory, MyTokenFactory, nftDutchAuction, owner, otherAccount } = await loadFixture(deployNFTDutchAuctionERC20Fixture);

            expect(await MyNFTFactory.balanceOf(owner.address)).to.equal(1);
            expect(await MyNFTFactory.balanceOf(otherAccount.address)).to.equal(0);

             expect(await MyTokenFactory.balanceOf(owner.address)).to.equal(0);
             expect(await MyTokenFactory.balanceOf(otherAccount.address)).to.equal(300);

            expect(await nftDutchAuction.connect(otherAccount).bid(200));

            expect(await MyNFTFactory.balanceOf(otherAccount.address)).to.equal(1);
            expect(await MyNFTFactory.balanceOf(owner.address)).to.equal(0);

            expect(await nftDutchAuction.buyer()).to.equal(otherAccount.address);

            expect(await nftDutchAuction.auctionStatusOpen()).to.equal(false)
         //   expect(await MyTokenFactory.balanceOf(otherAccount.address)).to.equal(140);
         //  expect(await MyTokenFactory.balanceOf(owner.address)).to.equal(170);

        });

        it("You already bought this product", async function () {
            const { nftDutchAuction, otherAccount } = await loadFixture(deployNFTDutchAuctionERC20Fixture);

            expect(await nftDutchAuction.connect(otherAccount).bid(200)).to.be.revertedWith("You already bought this product");

        });

   

        it("Block passed - Auction closed", async function () {
            const { nftDutchAuction, otherAccount } = await loadFixture(deployNFTDutchAuctionERC20Fixture);

            await mine(100);

            expect( nftDutchAuction.connect(otherAccount).bid(10)).to.be.revertedWith("Auction is closed");

        });
        
        it("Reverts when auction is closed", async function () {
            const { nftDutchAuction, otherAccount } = await loadFixture(deployNFTDutchAuctionERC20Fixture);
          
            // Close the auction by advancing the block number
            await mine(11);
          
            await expect(nftDutchAuction.connect(otherAccount).bid(10)).to.be.revertedWith("Auction is closed");
          });
         

    });
});
