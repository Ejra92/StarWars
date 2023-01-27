/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogedIn: false,
  userName: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, {payload}) => {
      state.isLogedIn = true
      state.userName = payload
    },
    logOut: state => {
      state.isLogedIn = false
      state.userName = ''
    }
  }
})

const {actions, reducer} = authSlice

export const {
  logIn,
  logOut,
} = actions

export default reducer