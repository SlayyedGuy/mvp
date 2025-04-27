const fs = require('fs')
const path = require('path')

function splitFile(filePath, chunkSizeMB = 1) {
  const chunkSize = chunkSizeMB * 1024 * 1024
  const fileStream = fs.createReadStream(filePath, { highWaterMark: chunkSize })

  let partNumber = 0
  const outputPaths = []

  return new Promise((resolve, reject) => {
    fileStream.on('data', (chunk) => {
      const partPath = `${filePath}.part${partNumber}`
      fs.writeFileSync(partPath, chunk)
      outputPaths.push(partPath)
      partNumber++
    })

    fileStream.on('end', () => {
      resolve(outputPaths)
    })

    fileStream.on('error', (err) => {
      reject(err)
    })
  })
}

module.exports = { splitFile }
