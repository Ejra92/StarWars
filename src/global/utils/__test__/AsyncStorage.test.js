import AsyncStorage from '@react-native-async-storage/async-storage'
import { getData, removeValue, storeData } from '../AsyncStorage'

describe('AsyncStorage test suite', () => { 
  it('setItem on storeData should been called once', () => {
    storeData('name', 'eric')

    expect(AsyncStorage.setItem).toHaveBeenCalled()
  })

  it('getItem on getData should been called once', () => {
    getData('name')

    expect(AsyncStorage.getItem).toHaveBeenCalled()
  })

  it('removeItem on removeValue should been called once', () => {
    removeValue('name')

    expect(AsyncStorage.removeItem).toHaveBeenCalled()
  })
})