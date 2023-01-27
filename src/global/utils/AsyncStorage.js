/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage'

// Strings type data are a must to use this method in order to type issues
export const storeData = async (key, value) => {
  if(!key || !value) return
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    console.warn(e)
  }
}

export const getData = async (key = '') => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return value
    }
  } catch (e) {
    console.warn(e)
  }
}

export const removeValue = async (key = '') => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.warn(e)
  }
}
