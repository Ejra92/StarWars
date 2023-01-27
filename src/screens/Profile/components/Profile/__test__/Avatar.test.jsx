import { render } from '../../../../../global/utils/test/test-utils'
import { Avatar } from '../Avatar'

describe('Avatar test suite', () => {
  it('Avatar should render', () => {
    const {getByTestId} = render(<Avatar testID={'Avatar'} />)
    const component = getByTestId('Avatar')
    expect(component).toBeDefined()
  })
  it('Avatar should render image', () => {
    const {getByTestId} = render(<Avatar />)
    const AvatarImage = getByTestId('AvatarImage')
    expect(AvatarImage).toBeDefined()
  })
  it('Avatar should render text with the username', () => {
    const userName = 'eric'
    const {getByText, debug} = render(
      <Avatar />,
      {
        preloadedState: {
          auth: {
            isLogedIn: true,
            userName
          }
        }
      }
    )
    debug()
    const AvatarText = getByText(`Say hi, ${userName}!`)
    expect(AvatarText).toBeDefined()
  })
})