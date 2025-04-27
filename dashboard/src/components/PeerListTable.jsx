const dummyPeers = [
    { id: 'peer1', ip: '192.168.1.5', status: 'Connected' },
    { id: 'peer2', ip: '192.168.1.8', status: 'Disconnected' },
  ];
  
  export default function PeerListTable() {
    return (
      <div className="p-4 bg-white rounded-2xl shadow-md">
        <h2 className="text-xl font-bold mb-2">Active Peers</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Peer ID</th>
              <th className="text-left">IP Address</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyPeers.map((peer) => (
              <tr key={peer.id}>
                <td>{peer.id}</td>
                <td>{peer.ip}</td>
                <td>{peer.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  