import { View, Text } from 'react-native'
import { styles } from './ListItem.styles'
import { CustomButton } from '../../../../global/components/CustomButton'
import { useDispatch } from 'react-redux'
import { deleteItemFromListByName } from '../../../../store/slices/list'

export const ListItem = ({name, height, gender, testID}) => {
  const dispatch = useDispatch()
  const handleDeleteItem = () => dispatch(deleteItemFromListByName(name))
  return (
    <View testID={testID} style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}>Height: {height} cm | Gender: {gender}</Text>

      <CustomButton
        testID='ListItemDeleteButton'
        title='Delete'
        onPress={handleDeleteItem}
        alt='red'
      />
    </View>
  )
}