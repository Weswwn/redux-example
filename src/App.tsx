import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BankAccount } from './components/BankAccount';

const App: React.FC = () => {
  const [checkingBalance, setCheckingBalance] = useState(0);

  useEffect(() => {
    // API Call here to fetch balance
    setCheckingBalance(1000)
  }, [])

  const handleDeposit = () => {
    setCheckingBalance(prevBal => prevBal += 10)
  }

  const handleWithdrawal = () => {
    setCheckingBalance(prevBal => prevBal -= 10)
  }

  return (
    <div className="App">
      <BankAccount 
        checkingBalance = { checkingBalance } 
        handleDeposit = { handleDeposit }
        handleWithdrawal = { handleWithdrawal }
      />
    </div>
  )
}

export default App;
