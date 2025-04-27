import { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';
import axios from 'axios';

export default function TokenBalanceCard() {
  const [balance, setBalance] = useState(0);
  const [displayBalance, setDisplayBalance] = useState(0);

  useEffect(() => {
    async function fetchBalance() {
      const res = await axios.get('http://localhost:3001/api/balance');
      setBalance(res.data.balance);
    }
    fetchBalance();
    const interval = setInterval(fetchBalance, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const controls = animate(displayBalance, balance, {
      duration: 0.8,
      onUpdate(value) {
        setDisplayBalance(Math.round(value));
      }
    });
    return controls.stop;
  }, [balance]);

  return (
    <div className="p-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl text-white shadow-md">
      <h2 className="text-xl font-bold">Token Balance</h2>
      <motion.p 
        className="text-3xl mt-2"
        key={balance}
      >
        {displayBalance} Ⓣ
      </motion.p>
    </div>
  );
}
