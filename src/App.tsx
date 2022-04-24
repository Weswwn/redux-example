import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BankAccount } from './components/BankAccount';

const App = () => {

  return (
    <div className="App">
      <BankAccount />
    </div>
  )
}

export default App;
