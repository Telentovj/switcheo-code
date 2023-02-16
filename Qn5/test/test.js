const { ethers } = require("hardhat");

describe("Get Wallet Balances", function () {
  it("Contract should give the appropriate wallet balances", async function () {
    // owner is used here to be assigned the initial 1000 tokens of alpha and beta tokens.
    const [owner, dummyWallet] = await ethers.getSigners();
    // Get dummy tokens
    const dummyToken = await ethers.getContractFactory("DummyToken");
    const tokenAlpha = await dummyToken.deploy("Alpha", "a", 1000, 18);
    const tokenBeta = await dummyToken.deploy("Beta", "b", 1000, 18);
    // Transfer Tokens from owner to dummy wallet
    await tokenAlpha.transfer(dummyWallet.address, 300)
    await tokenBeta.transfer(dummyWallet.address, 500)
    
    const ADDRESS = dummyWallet.address
    const TOKENS = [tokenAlpha.address,tokenBeta.address]
    // Get the Contract then deploy
    const balancePrinter = await (await ethers.getContractFactory("BalancePrinter")).deploy();
    // Get balance of each token in dummy wallet along with the token's address.    
    await balancePrinter.getBalances(ADDRESS, TOKENS).then(console.log);
  });
});

