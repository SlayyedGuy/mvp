import React from 'react'

function PeerStatusBar({ peers, uptime }) {
  return (
    <div className="flex justify-between items-center p-4 bg-darkbg rounded-2xl shadow-lg">
      <div>🧑‍🤝‍🧑 Peers: {peers}</div>
      <div>⏱️ Uptime: {uptime}h</div>
    </div>
  )
}

export default PeerStatusBar
