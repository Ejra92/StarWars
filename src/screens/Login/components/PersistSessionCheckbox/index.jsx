import { Text, View } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { removeValue, storeData } from '../../../../global/utils/AsyncStorage'
import { styles } from './PersistSessionCheckbox.styles'


export const PersistSessionCheckbox = ({testID}) => {
  const handlePress = (isCheked) => {
    if(isCheked) return storeData('persistSession', 'persist')
    removeValue('persistSession')
  }
  
  return (
    <View testID={testID} style={styles.container}>
      <BouncyCheckbox
        testID='Checkbox'
        size={20}
        fillColor='#5CCBEA'
        unfillColor='#FFFFFF'
        iconStyle={{ borderColor: '#fff' }}
        innerIconStyle={{ borderWidth: 0 }}
        textStyle={{ fontFamily: 'JosefinSans-Regular' }}
        onPress={handlePress}
        textComponent={<Text style={styles.text}>Keep session logged in</Text>}
      />
    </View>
  )
}
