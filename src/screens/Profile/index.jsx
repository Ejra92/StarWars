import { useDispatch } from 'react-redux'
import { Avatar } from './components/Profile/Avatar'
import { ContainerScreen } from '../../global/components/ContainerScreen'
import { logOut } from '../../store/slices/auth'
import { CustomButton } from '../../global/components/CustomButton'

export const Profile = () => {
  const dispatch = useDispatch()
  const handleLogOut = () => dispatch(logOut())
  return (
    <ContainerScreen
      testID='Profile'
      statusBgColor='#fff'
      statusBarStyle='dark-content'
      withScroll
      style={{
        justifyContent: 'space-between'
      }}
    >
      <Avatar testID='ProfileAvatar' />
      <CustomButton
        testID='ProfileLogoutButton'
        title='Logout'
        onPress={handleLogOut}
        alt='red'
      />
    </ContainerScreen>
  )
}