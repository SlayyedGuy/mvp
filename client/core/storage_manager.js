const fs = require('fs')
const { startP2P } = require('./p2p_manager')
const { hashFile } = require('./file_hashing')
const { prepareFileForStorage, uploadChunksWithRetry } = require('./storage_manager')

async function uploadFile(filePath, secretKey) {
  try {
    // Start P2P
    const p2pNode = await startP2P()

    // Encrypt and split file into chunks
    const chunks = await prepareFileForStorage(filePath, secretKey)

    // Hash the entire file for integrity verification
    const fileHash = await hashFile(filePath)
    console.log(`File hash: ${fileHash}`)

    // Upload all chunks with retry logic
    await uploadChunksWithRetry(chunks)

    // Inform the P2P network about the file hash (for decentralized verification)
    await p2pNode.pubsub.publish('filehash', Buffer.from(fileHash))

    console.log('File uploaded successfully to the decentralized network!')
  } catch (error) {
    console.error('Error during file upload:', error)
  }
}

module.exports = { uploadFile }
