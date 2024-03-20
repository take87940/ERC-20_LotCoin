const Lottery = artifacts.require("Lottery");

module.exports = function(deployer) 
{
  deployer.deploy(Lottery, 1000000);
}