import React from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'

const COLORS = ['#00FFAB', '#FF6B00']

function StorageChart({ used, available }) {
  const data = [
    { name: 'Used', value: used },
    { name: 'Available', value: available },
  ]

  return (
    <div className="bg-darkbg p-6 rounded-2xl shadow-lg flex flex-col items-center">
      <h3 className="text-lg mb-4">Storage Usage</h3>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  )
}

export default StorageChart
