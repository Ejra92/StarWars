import { Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { styles } from './FormInput.styles'

export const FormInput = (props) => {
  const {
    placeholder='',
    label = '', 
    onChange,
    onBlur,
    value = '',
    hasError = false,
    textStyle,
    secureTextEntry = false,
    testID
  } = props
  return (
    <View testID='FormInputContainer' style={!hasError && styles.container}>
      {value && <Text testID='FormInputLabel' style={styles.label}> {label} </Text>}
      <TextInput
        testID={testID}
        style={[
          styles.input,
          textStyle && textStyle
        ]}
        placeholder={placeholder}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}