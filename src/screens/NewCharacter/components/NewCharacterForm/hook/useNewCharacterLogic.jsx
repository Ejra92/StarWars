/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { generateDefaultInputValues } from '../utils/generateDefaultValues'
import { useDispatch } from 'react-redux'
import { addItemToList } from '../../../../../store/slices/list'

export const useNewCharacterLogic = () => {
  const navigation = useNavigation()
  const { control, handleSubmit, reset } = useForm({
    defaultValues: generateDefaultInputValues(),
  })
  const dispatch = useDispatch()

  const createNewCharacter = (data) => {
    dispatch(addItemToList(data))
    reset()
    navigation.goBack()
  }

  return {
    control,
    handleSubmit,
    createNewCharacter
  }
}