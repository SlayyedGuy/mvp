import React from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
import toast from 'react-hot-toast'

function UploadFileModal() {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles) => {
      const formData = new FormData()
      acceptedFiles.forEach(file => {
        formData.append('files', file)
      })

      try {
        await axios.post('http://localhost:5001/api/upload', formData)
        toast.success('Files uploaded successfully!')
      } catch (error) {
        console.error(error)
        toast.error('Upload failed.')
      }
    }
  })

  return (
    <div {...getRootProps()} className="p-10 border-2 border-dashed border-accent rounded-xl bg-gray-900 text-center cursor-pointer">
      <input {...getInputProps()} />
      <p>Drop files here, or click to select</p>
    </div>
  )
}

export default UploadFileModal
