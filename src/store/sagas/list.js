/* eslint-disable prettier/prettier */
import { call, put, takeLatest } from 'redux-saga/effects'
import { getStarWarsItems } from '../api/list';
import {
  fetchEnd,
  fetchFailure,
  fetchList,
  fetchStart,
  fetchSuccess
} from '../slices/list'

export function* fetchListWorker() {
  try {
    yield put(fetchStart())
    const { data, status } = yield call(getStarWarsItems)
    const { results = [] } = data

    if (status !== 200) {
      yield put(fetchFailure())
      console.warn(`The server response with status ${status}`)
      return
    }

    yield put(fetchSuccess(results))
  } catch (error) {
    yield put(fetchFailure())
    console.warn(error)
  } finally {
    yield put(fetchEnd())
  }
}

export default function* listSagasRoot () {
  yield takeLatest(fetchList, fetchListWorker)
}