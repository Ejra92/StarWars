/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  optContainer: {
    marginBottom: 20  
  },
  optTextBase: {
    color: '#fff',
    marginBottom: 10,
    fontSize: 18
  },
  optTextSelected: {
    color: '#5CCBEA',
    fontSize: 28,
    fontWeight: 'bold'
  },
  textDisclaimer: {
    color: '#5CCBEA',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  textError: {
    color: 'red',
  },
  textSuccess: {
    color: 'green',
  }
})