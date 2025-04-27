import React from 'react'
import useNodeStats from '../hooks/useNodeStats'

function PeerStatusBar() {
  const { peers, uptime } = useNodeStats()

  return (
    <div className="flex justify-between items-center bg-gray-800 p-4 rounded-xl">
      <span>Peers Connected: {peers}</span>
      <span>Node Uptime: {uptime} hrs</span>
    </div>
  )
}

export default PeerStatusBar
