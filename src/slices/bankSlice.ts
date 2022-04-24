import { createSlice } from '@reduxjs/toolkit'

interface BankState {
  checkingBalance: number
}

const initialState: BankState = {
  checkingBalance: 1000
}

export const bankSlice = createSlice({
  name: 'bankStore',
  initialState,
  reducers: {
    deposit: (state) => {
      state.checkingBalance += 10
    },
    withdrawal: (state) => {
      state.checkingBalance -= 10
    }
  }
})

export const { deposit, withdrawal } = bankSlice.actions
export default bankSlice.reducer
