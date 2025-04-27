const axios = require('axios')
const ethers = require('ethers')
const contractABI = require('../blockchain/StorageTokenABI.json')
const config = require('../config/config.json')

async function submitProof(walletPrivateKey) {
  const provider = new ethers.providers.JsonRpcProvider(config.rpcUrl)
  const wallet = new ethers.Wallet(walletPrivateKey, provider)
  const contract = new ethers.Contract(config.tokenAddress, contractABI, wallet)

  try {
    const tx = await contract.submitProofOfStorage()
    await tx.wait()
    console.log('Proof submitted successfully! TX Hash:', tx.hash)
  } catch (error) {
    console.error('Error submitting proof:', error)
  }
}

module.exports = { submitProof }
