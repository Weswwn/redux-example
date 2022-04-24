import React from 'react';

export class BankAccount extends React.Component {
  render() {
    const { handleDeposit, handleWithdrawal, checkingBalance } = this.props
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
}
