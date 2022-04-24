import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BankAccount } from './components/BankAccount';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      checkingBalance: 0,
    }
    this.handleDeposit = this.handleDeposit.bind(this)
    this.handleWithdrawal = this.handleWithdrawal.bind(this)
  }

  componentDidMount() {
    // API Call here to fetch balance
    this.setState({
      checkingBalance: 1000
    })
  }

  handleDeposit() {
    this.setState(prevState => {
      return {
        checkingBalance: prevState.checkingBalance += 10
      }
    })
  }
  handleWithdrawal() {
    this.setState(prevState => {
      return {
        checkingBalance: prevState.checkingBalance -= 10
      }
    })
  }

  render() {
    return  (
    <div className="App">
      <BankAccount 
        checkingBalance = {this.state.checkingBalance} 
        handleDeposit = { this.handleDeposit }
        handleWithdrawal = { this.handleWithdrawal }
      />
    </div>
    )
  };
}

export default App;
