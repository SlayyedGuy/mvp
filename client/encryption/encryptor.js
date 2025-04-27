const crypto = require('crypto')
const fs = require('fs')

const algorithm = 'aes-256-ctr'

function encryptFile(inputPath, outputPath, secretKey) {
  const cipher = crypto.createCipher(algorithm, secretKey)
  const input = fs.createReadStream(inputPath)
  const output = fs.createWriteStream(outputPath)

  input.pipe(cipher).pipe(output)

  output.on('finish', () => {
    console.log('File encrypted successfully!')
  })
}

function decryptFile(inputPath, outputPath, secretKey) {
  const decipher = crypto.createDecipher(algorithm, secretKey)
  const input = fs.createReadStream(inputPath)
  const output = fs.createWriteStream(outputPath)

  input.pipe(decipher).pipe(output)

  output.on('finish', () => {
    console.log('File decrypted successfully!')
  })
}

module.exports = { encryptFile, decryptFile }
