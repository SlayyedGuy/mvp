export default function SyncStatus({ online }) {
    return (
      <div className="flex items-center space-x-2 p-4 bg-white rounded-2xl shadow-md">
        <div className={`w-3 h-3 rounded-full ${online ? 'bg-green-500' : 'bg-red-500'}`} />
        <span className="text-gray-700">{online ? 'Online' : 'Offline'}</span>
      </div>
    );
  }
  