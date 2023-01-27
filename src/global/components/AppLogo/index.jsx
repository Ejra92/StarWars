import { memo } from 'react'
import { View } from 'react-native'
import { styles } from './AppLogo.styles'
import { StarwarsSvg } from './components/StarWars'

const AppLogo = ({height, width, color, homeLogo, testID}) => (
  <View testID={testID} style={[styles.container, homeLogo && {flex: 0.2, marginBottom: 10}]}>
    <StarwarsSvg height={height} width={width} color={color} />
  </View>
)

export default memo(AppLogo)