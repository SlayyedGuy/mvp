import React, { useState, useEffect } from 'react'
import useNodeStats from '../hooks/useNodeStats'
import useBlockchainStatus from '../hooks/useBlockchainStatus'

function Admin() {
  const { peers, uptime } = useNodeStats()
  const { balance } = useBlockchainStatus()
  const [fileHash, setFileHash] = useState(null)

  // Mock data for file hash (use your real data here)
  useEffect(() => {
    const interval = setInterval(() => {
      setFileHash('QmT5pBtd5qG46aAGn3Kp8afkqvXxQkrxGH1dFuhL9HYtkp')
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-lg mb-2">Node Stats</h2>
          <p>Peers Connected: {peers}</p>
          <p>Uptime: {uptime} hours</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-lg mb-2">Wallet Balance</h2>
          <p>{balance} $STORAGE</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-lg mb-2">File Integrity</h2>
          <p>Latest File Hash: {fileHash || 'No file uploaded yet'}</p>
        </div>
      </div>
    </div>
  )
}

export default Admin
