import { View } from 'react-native'
import { Controller } from 'react-hook-form'
import { FormInput } from '../../../../global/components/FormInput'
import { ErrorText } from '../../../../global/components/ErrorText'
import { CustomButton } from '../../../../global/components/CustomButton'
import { emailErrorText, passwordErrorText } from '../../utils/loginErrorsText'
import { emailRegex } from '../../../../global/utils/emailRegex'

import { useLoginFormLogic } from './hooks/useLoginFormLogic'

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    errors,
    onSubmit,
    testID = 'LoginForm'
  } = useLoginFormLogic()

  const {
    email,
    password,
  } = errors

  return (
    <View testID={testID}>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: emailRegex
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormInput
            placeholder='Email'
            label='Email'
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            hasError={!!email}
            testID={'LoginFormEmailInput'}
          />
        )}
        name='email'
      />
      {email && <ErrorText testID='ErrorTextEmail' text={emailErrorText[email?.type]} />}

      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 4,
          maxLength: 12,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormInput
            placeholder='Password'
            label='Password'
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            hasError={!!password}
            secureTextEntry
            testID={'LoginFormPasswordInput'}
          />
        )}
        name='password'
      />
      {password && <ErrorText testID='ErrorTextPassword' text={passwordErrorText[password?.type]} />}

      <CustomButton
        testID='LoginFormCustomButton'
        title='Submit'
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  )
}