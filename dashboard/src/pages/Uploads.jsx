import React from 'react'
import UploadFileModal from '../components/UploadFileModal'

function Uploads() {
  const handleFileDrop = (files) => {
    console.log('Dropped files:', files)
    alert(`Uploaded ${files.length} files!`)
  }

  return (
    <div className="space-y-6">
      <UploadFileModal onDrop={handleFileDrop} />
    </div>
  )
}

export default Uploads
