import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

function UploadFileModal({ onDrop }) {
  const dropHandler = useCallback((acceptedFiles) => {
    onDrop(acceptedFiles)
  }, [onDrop])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: dropHandler })

  return (
    <div {...getRootProps()} className="border-2 border-dashed p-6 rounded-2xl text-center cursor-pointer hover:border-accent transition">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop files here...</p>
      ) : (
        <p>Drag and drop files here or click to upload</p>
      )}
    </div>
  )
}

export default UploadFileModal
