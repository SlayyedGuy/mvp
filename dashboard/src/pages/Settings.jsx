import React from 'react'

function Settings() {
  return (
    <div className="bg-darkbg p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl mb-4">Settings</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-2">Storage Limit (GB)</label>
          <input type="number" className="w-full p-2 rounded bg-gray-700 text-white" placeholder="Enter limit" />
        </div>
        <div>
          <label className="block mb-2">Encryption Key</label>
          <input type="password" className="w-full p-2 rounded bg-gray-700 text-white" placeholder="Secret Key" />
        </div>
        <button className="bg-accent mt-4 px-4 py-2 rounded-lg">Save Settings</button>
      </form>
    </div>
  )
}

export default Settings
