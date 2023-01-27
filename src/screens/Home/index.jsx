import { StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import AppLogo from '../../global/components/AppLogo'
import { ContainerScreen } from '../../global/components/ContainerScreen'
import { CustomButton } from '../../global/components/CustomButton'
import { List } from './components/List'

export const Home = ({navigation}) => {
  const { isFetching } = useSelector(state => state.list)
  const handleGoTo = () => navigation.navigate('NewCharacter')
  return (
    <ContainerScreen
      testID='Home'
      statusBgColor='#fff'
      statusBarStyle='dark-content'
      style={styles.container}
    >
      <AppLogo
        testID='HomeLogo'
        height='100px'
        width='100px'
        color='#000'
        homeLogo
      />
      <List testID='HomeList' />
      <CustomButton
        testID='HomeCreateButton'
        title={'Create new character'}
        disabled={isFetching}
        alt='#5CCBEA'
        onPress={handleGoTo}
      />
    </ContainerScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between'
  }
})