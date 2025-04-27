const fs = require('fs')
const path = require('path')
const axios = require('axios')
const { encryptFile } = require('../encryption/encryptor')
const { splitFile } = require('../encryption/splitter')
const logger = require('../utils/logger')

const CHUNK_DIR = path.join(__dirname, '../uploads')

async function prepareFileForStorage(originalPath, secretKey) {
  const encryptedPath = originalPath + '.enc'
  encryptFile(originalPath, encryptedPath, secretKey)
  
  const chunks = await splitFile(encryptedPath)
  logger.info(`File encrypted and split into ${chunks.length} chunks.`)
  
  return chunks
}

async function uploadChunk(chunkPath) {
  const formData = new FormData()
  formData.append('file', fs.createReadStream(chunkPath))
  
  try {
    const res = await axios.post('http://localhost:5001/api/upload', formData, {
      headers: formData.getHeaders()
    })
    logger.info(`Uploaded chunk: ${chunkPath}`)
    return true
  } catch (error) {
    logger.error(`Failed uploading ${chunkPath}: ${error.message}`)
    return false
  }
}

async function uploadChunksWithRetry(chunks, retries = 3) {
  for (const chunk of chunks) {
    let success = await uploadChunk(chunk)
    let attempts = 0
    
    while (!success && attempts < retries) {
      logger.warn(`Retrying upload for ${chunk}...`)
      success = await uploadChunk(chunk)
      attempts++
    }

    if (!success) {
      logger.error(`Failed to upload chunk after ${retries} retries: ${chunk}`)
    }
  }
}

module.exports = { prepareFileForStorage, uploadChunksWithRetry }
