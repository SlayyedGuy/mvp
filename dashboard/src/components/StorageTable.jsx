import React from 'react'

function StorageTable({ files }) {
  return (
    <div className="bg-darkbg p-4 rounded-2xl shadow-lg">
      <h2 className="text-xl mb-4">Hosted Files</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="py-2">File Name</th>
            <th>Size</th>
            <th>Peers</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, idx) => (
            <tr key={idx} className="border-b border-gray-800 hover:bg-gray-900">
              <td className="py-2">{file.name}</td>
              <td>{(file.size / 1024 / 1024).toFixed(2)} MB</td>
              <td>{file.peers}</td>
              <td>{file.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StorageTable
