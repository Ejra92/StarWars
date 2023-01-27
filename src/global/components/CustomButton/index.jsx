import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './CustomButton.styles'

export const CustomButton = ({onPress, title, disabled, alt = false, testID}) => (
  <TouchableOpacity
    testID={testID}
    style={[styles.buttonContainer, alt && {backgroundColor: alt, marginTop: 20}, disabled && {backgroundColor: '#bbbbbb'}]}
    onPress={onPress}
    disabled={disabled}
    activeOpacity={0.4}
  >
    <Text
      style={
        [styles.buttonText, alt && {color: '#fff'}]
      }
    >
      {title}
    </Text>
  </TouchableOpacity>
)