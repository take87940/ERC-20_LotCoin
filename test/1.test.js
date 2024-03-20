const Lottery = artifacts.require("contracts/Lottery.sol");

contract("Lottery", (accounts) => {
    before(async () => {
        lottery = await Lottery.deployed();
    });

    it("mint 1M worth of tokens", async () => {
        let balance = await lottery.balanceOf(accounts[0]);
        balance = web3.utils.fromWei(balance);
        assert.equal(balance, 1000000, "Initial supply of token is 1000000");
    });

    it("transfer token to another account", async () => {
        let amount = web3.utils.toWei("10000", "ether");
        await lottery.transfer(accounts[1], amount, { from: accounts[0] });
        let balance = await lottery.balanceOf(accounts[1]);
        balance = web3.utils.fromWei(balance);
        assert.equal(balance, 10000, "token balance is 10000");
    })
})
