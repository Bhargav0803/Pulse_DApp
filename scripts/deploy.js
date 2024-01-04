
const hre = require("hardhat");

async function main() {

  const carbon = await hre.ethers.getContractFactory("Carbon");
  const carbonContract = await carbon.deploy();
  await carbonContract.deployed();

  console.log(
    `Deployed at:  ${carbonContract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
