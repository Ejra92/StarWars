import { Profile } from '..';
import { fireEvent, render } from '../../../global/utils/test/test-utils'

describe('Profile test suite', () => {
  it('Profile should render', () => {
    const {getByTestId} = render(<Profile />)
    const component = getByTestId('Profile')
    expect(component).toBeDefined()
  })
  it('Profile Avatar should render', () => {
    const {getByTestId} = render(<Profile />)
    const ProfileAvatar = getByTestId('ProfileAvatar')
    expect(ProfileAvatar).toBeDefined()
  })
  it('Profile logOut button should close works well', () => {
    const {getByTestId, store} = render(
      <Profile />,
      {
        preloadedState: {
          auth: {
            isLogedIn: true
          }
        }
      }
    )
    const logOutButtom = getByTestId('ProfileLogoutButton')
    
    expect(store.getState().auth.isLogedIn).toBe(true)

    fireEvent.press(logOutButtom)

    expect(store.getState().auth.isLogedIn).toBe(false)
  })
})