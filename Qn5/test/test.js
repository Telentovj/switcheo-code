const { ethers } = require("hardhat");

describe("Get Wallet Balances", function () {
  it("Contract should give the appropriate wallet balances", async function () {
    // owner is used here to be assigned the initial 1000 tokens of alpha and beta tokens.
    const [owner, dummyWallet] = await ethers.getSigners();

    const dummyToken = await ethers.getContractFactory("DummyToken");
    const tokenAlpha = await dummyToken.deploy("Alpha", "a", 1000, 18);
    const tokenBeta = await dummyToken.deploy("Beta", "b", 1000, 18);
  
    await tokenAlpha.transfer(dummyWallet.address, 300)
    await tokenBeta.transfer(dummyWallet.address, 500)
  
    const ADDRESS = dummyWallet.address
    const TOKENS = [tokenAlpha.address,tokenBeta.address]
  
    const balancePrinter = await (await ethers.getContractFactory("BalancePrinter")).deploy();
    
    await balancePrinter.getBalances(ADDRESS, TOKENS).then(console.log);
  });
});

