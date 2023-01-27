/* eslint-disable prettier/prettier */
import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import rootSaga from './sagas/list'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  devTools: false,
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)