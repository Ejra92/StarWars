/* eslint-disable prettier/prettier */
import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './slices/auth'
import listReducer from './slices/list'

export default combineReducers({
  auth: authReducer,
  list: listReducer
})