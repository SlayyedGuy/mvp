import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="w-64 bg-darkbg text-white min-h-screen p-5">
      <ul className="space-y-4">
        <li><Link to="/" className="hover:text-accent">Dashboard</Link></li>
        <li><Link to="/settings" className="hover:text-accent">Settings</Link></li>
        <li><Link to="/uploads" className="hover:text-accent">Uploads</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar
