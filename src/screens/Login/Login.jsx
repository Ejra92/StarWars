import React from 'react'
import { PersistSessionCheckbox } from './components/PersistSessionCheckbox'
import { LoginForm } from './components/LoginForm'
import AppLogo from '../../global/components/AppLogo'
import { ContainerScreen } from '../../global/components/ContainerScreen'
import { styles } from './Login.style'

export default function Login() {
  return (
    <ContainerScreen
      testID='Login'
      style={styles.container}
      withScroll
      keyboardShouldPersistTaps='handled'
    >
      <AppLogo testID={'LoginAppLogo'} />
      <LoginForm testID={'LoginForm'} />
      <PersistSessionCheckbox testID={'CheckboxLoginForm'} />
    </ContainerScreen>
  )
}