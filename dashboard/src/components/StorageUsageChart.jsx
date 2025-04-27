import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { time: '00:00', storage: 5 },
  { time: '02:00', storage: 10 },
  { time: '04:00', storage: 8 },
  { time: '06:00', storage: 12 },
];

export default function StorageUsageChart() {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-2 dark:text-white">Storage Usage Over Time</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" stroke="#8884d8" />
          <YAxis stroke="#8884d8" />
          <Tooltip />
          <Line type="monotone" dataKey="storage" stroke="#4F46E5" strokeWidth={2} dot={true} activeDot={{ r: 6 }} animationDuration={1000} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
