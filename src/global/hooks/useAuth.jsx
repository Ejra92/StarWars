/* eslint-disable prettier/prettier */
import { useEffect, useRef } from 'react'
import { AppState } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../store/slices/auth'
import { getData } from '../utils/AsyncStorage'

export const useAuth = () => {
  const { isLogedIn } = useSelector(({auth}) => auth)
  const appState = useRef(AppState.currentState)
  const dispatch = useDispatch()

  useEffect(() => {
    const loginOut = () => dispatch(logOut())
    const subscription = AppState.addEventListener('change', async (nextAppState) => {
      const appStateCondition = 
        appState.current.match(/inactive|background/) && 
        nextAppState === 'active'

      if (appStateCondition) {
        const hasPersistSession = await getData('persistSession')
        !hasPersistSession && loginOut()
      }

      appState.current = nextAppState;
    })

    return () => {
      subscription.remove()
    }
  }, [dispatch])

  return isLogedIn
}
