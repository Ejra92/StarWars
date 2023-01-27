import { View, Image, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { styles } from './Avatar.styles'

const darthVaderImgPath = '../../../../assets/img/darkAvatar.png'
const allImgPath = '../../../../assets/img/allAvatar.png'

export const Avatar = ({testID}) => {
  const { userName } = useSelector((state) => state.auth)
  const sourceImg = userName === 'darthvader' 
    ? require(darthVaderImgPath)
    : require(allImgPath)
  const txt = userName === 'darthvader'
    ? `Welcome back Master ${userName}!`
    : `Say hi, ${userName}!`
  return (
    <View testID={testID} style={styles.container}>
      <Image
        testID='AvatarImage'
        source={sourceImg}
        style={styles.image}
      />
      <Text style={styles.userName}>
        {txt}
      </Text>
    </View>
  )
}