import React from 'react';

interface Props {
  handleDeposit: () => void
  handleWithdrawal: () => void
  checkingBalance: number
}

export const BankAccount: React.FC<Props> = ({ handleDeposit, handleWithdrawal, checkingBalance }) => {

  return (
    <div>
      <div>
        <h1>{`Checking Balance: ${checkingBalance}`}</h1>
      </div>
      <div>
        <button onClick={ () => handleDeposit()}>Deposit 10 dollars</button>
        <button onClick={ () => handleWithdrawal()}>Withdrawal 10 dollars</button>
      </div>
    </div>
  )
}