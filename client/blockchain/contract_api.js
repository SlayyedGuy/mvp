// Interact with StorageToken smart contract

const { ethers } = require('ethers');
const contractABI = require('./StorageToken.json'); // ABI JSON after compilation

const CONTRACT_ADDRESS = "your_deployed_contract_address";
const PROVIDER_URL = "https://rpc-mumbai.maticvigil.com"; // Polygon Mumbai testnet

async function submitProof(gbHours) {
    const provider = new ethers.providers.JsonRpcProvider(PROVIDER_URL);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI.abi, wallet);

    const tx = await contract.submitProof(gbHours);
    await tx.wait();
    console.log('Proof submitted successfully:', tx.hash);
}

module.exports = { submitProof };
