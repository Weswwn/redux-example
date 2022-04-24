import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { deposit, withdrawal } from '../slices/bankSlice';


export const BankAccount = () => {
  const checkingBalance = useAppSelector(state => state.bankStore.checkingBalance)
  const dispatch = useAppDispatch();
  return (
    <div>
      <div>
        <h1>{`Checking Balance ${checkingBalance}`}</h1>
      </div>
      <div>
        <button onClick={ () => dispatch(deposit()) }>Deposit 10 dollars</button>
        <button onClick={ () => dispatch(withdrawal()) }>Withdrawal 10 dollars</button>
      </div>
    </div>
  )
}
