const { ethers, upgrades } = require("hardhat");

async function main() {
    // Deploy the StorageToken contract
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const Token = await ethers.getContractFactory("StorageToken");
    const token = await Token.deploy();

    console.log("StorageToken deployed to:", token.address);

    // Saving the contract address for later
    const fs = require('fs');
    fs.writeFileSync('./deployed_contract_address.txt', token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
