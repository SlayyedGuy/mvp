const crypto = require('crypto')

function hashFile(filePath) {
  const hash = crypto.createHash('sha256')
  const fs = require('fs')
  const fileStream = fs.createReadStream(filePath)

  fileStream.on('data', (chunk) => {
    hash.update(chunk)
  })

  return new Promise((resolve, reject) => {
    fileStream.on('end', () => {
      const fileHash = hash.digest('hex')
      resolve(fileHash)
    })

    fileStream.on('error', (err) => {
      reject(err)
    })
  })
}

module.exports = { hashFile }
