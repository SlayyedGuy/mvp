import React from 'react'
import StorageTable from '../components/StorageTable'
import UploadsTable from '../components/UploadsTable'
import TokenBalanceCard from '../components/TokenBalanceCard'
import PeerStatusBar from '../components/PeerStatusBar'
import ActionButtons from '../components/ActionButtons'
import StorageChart from '../components/StorageChart'

function Dashboard() {
  const dummyFiles = [
    { name: 'Movie1.mp4', size: 10485760, peers: 3, status: 'Seeding' },
    { name: 'Book.pdf', size: 5242880, peers: 5, status: 'Seeding' },
  ]
  const dummyUploads = [
    { name: 'Upload1.zip', progress: 70 },
    { name: 'Upload2.rar', progress: 30 },
  ]

  return (
    <div className="space-y-6">
      <PeerStatusBar peers={5} uptime={12} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TokenBalanceCard balance={250} />
        <StorageChart used={20} available={80} />
      </div>
      <ActionButtons
        onStart={() => alert('Node Started')}
        onStop={() => alert('Node Stopped')}
        onSubmitProof={() => alert('Proof Submitted')}
      />
      <StorageTable files={dummyFiles} />
      <UploadsTable uploads={dummyUploads} />
    </div>
  )
}

export default Dashboard
