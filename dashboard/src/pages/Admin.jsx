import React from 'react'
import useNodeStats from '../hooks/useNodeStats'
import useBlockchainStatus from '../hooks/useBlockchainStatus'

function Admin() {
  const { peers, uptime } = useNodeStats()
  const { balance } = useBlockchainStatus()

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
      </div>

      <div className="mt-10">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">
          Force Submit Proof
        </button>
      </div>
    </div>
  )
}

export default Admin
