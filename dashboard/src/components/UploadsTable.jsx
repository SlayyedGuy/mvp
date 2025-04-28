import React from 'react'

function UploadsTable({ uploads }) {
  return (
    <div className="bg-darkbg p-4 rounded-2xl shadow-lg mt-6">
      <h2 className="text-xl mb-4">Uploads</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="py-2">File</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {uploads.map((upload, idx) => (
            <tr key={idx} className="border-b border-gray-800 hover:bg-gray-900">
              <td className="py-2">{upload.name}</td>
              <td>{upload.progress}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UploadsTable
