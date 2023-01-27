/* eslint-disable prettier/prettier */
import { createAction, createSlice } from '@reduxjs/toolkit'

const sliceName = 'list'

const initialState = {
  data: [],
  error: false,
  isFetching: false
}

const listSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    //fetch
    fetchStart: state => {
      state.error = false
      state.isFetching = true
    },
    fetchSuccess: (state, {payload}) => {
      state.data = payload
    },
    fetchFailure: state => {
      state.error = true
    },
    fetchEnd: state => {
      state.isFetching = false
    },

    //Add or Delete
    addItemToList: (state, {payload}) => {
      state.data = [payload, ...state.data]
    },
    deleteItemFromListByName: (state, {payload}) => {
      state.data = state.data.filter(({name}) => name !== payload)
    },
    clearListData: state => {
      state.data = []
      state.error = false
      state.isFetching = false
    }
  }
})

const {actions, reducer} = listSlice

export const {
  //fetchList
  fetchStart,
  fetchSuccess,
  fetchFailure,
  fetchEnd,
  //Add or Delete
  addItemToList,
  deleteItemFromListByName,
  clearListData,
} = actions

export const fetchList = createAction(`${sliceName}/fetchList`)

export default reducer