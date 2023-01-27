/* eslint-disable prettier/prettier */
import { Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { logIn } from '../../../../../store/slices/auth'
import { userExist } from '../../../utils/userExist'

export const useLoginFormLogic = () => {
  const dispatch = useDispatch()
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
  })

  const onSubmit = data => {
    if(!userExist(data)) {
      Alert.alert('Failed', 'This email/password is invalid')
      return
    }
    const userName = data.email.split('@')[0]
    dispatch(logIn(userName))
  }

  return {
    control,
    handleSubmit,
    errors,
    onSubmit
  }
}