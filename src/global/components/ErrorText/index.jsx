import { Text, StyleSheet } from 'react-native'
import React from 'react'

export const ErrorText = ({text = '', style, testID}) => {
  return (
    <Text testID={testID} style={[style && style, styles.text]}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#e20505',
    fontWeight: 'bold',
    marginBottom: 20
  }
})