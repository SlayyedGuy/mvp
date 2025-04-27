import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Uploads from './pages/Uploads'
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-black">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="p-6 flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/uploads" element={<Uploads />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
