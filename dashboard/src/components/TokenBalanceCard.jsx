import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TokenBalanceCard() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function fetchBalance() {
      const res = await axios.get('http://localhost:3001/api/balance');
      setBalance(res.data.balance);
    }
    fetchBalance();
    const interval = setInterval(fetchBalance, 5000); // refresh every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl text-white shadow-md">
      <h2 className="text-xl font-bold">Token Balance</h2>
      <p className="text-3xl mt-2">{balance} Ⓣ</p>
    </div>
  );
}
