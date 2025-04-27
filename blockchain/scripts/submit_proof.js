const { ethers } = require("hardhat");
const fs = require("fs");
require("dotenv").config();

async function main() {
    // Get the contract address from the file
    const contractAddress = fs.readFileSync("./deployed_contract_address.txt", "utf-8");

    // Connect to the contract
    const [signer] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("StorageToken");
    const token = await Token.attach(contractAddress);

    console.log("Connected to contract at:", contractAddress);
    console.log("Submitting proof for user:", signer.address);

    // Submit proof (mock data for storage provided)
    const storageAmount = 1000; // e.g., 1000 GB-hours of storage
    const tx = await token.submitProofOfStorage(signer.address, storageAmount);

    console.log(`Submitting proof for ${storageAmount} GB-hours of storage...`);
    await tx.wait();

    console.log(`Proof submitted successfully!`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
