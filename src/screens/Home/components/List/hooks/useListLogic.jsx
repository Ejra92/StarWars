/* eslint-disable prettier/prettier */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearListData, fetchList } from '../../../../../store/slices/list'

export const useListLogic = () => {
  const dispatch = useDispatch()
  const { data, isFetching, error } = useSelector(state => state.list)

  useEffect(() => {
    dispatch(fetchList())
    return () => {
      dispatch(clearListData())
    }
  }, [dispatch])

  return {
    data,
    isFetching,
    error,
  }
}