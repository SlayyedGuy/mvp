import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useNodeStats() {
  const [stats, setStats] = useState({ peers: 0, uptime: 0 })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/stats')
        setStats(res.data)
      } catch (error) {
        console.error('Error fetching node stats', error)
      }
    }

    fetchStats()
    const interval = setInterval(fetchStats, 5000) // every 5 sec
    return () => clearInterval(interval)
  }, [])

  return stats
}
