import { Home } from '..';
import { fireEvent, render } from '../../../global/utils/test/test-utils'

describe('Home test suite', () => {
  it('Home should render', () => {
    const {getByTestId} = render(<Home />)
    const component = getByTestId('Home')
    expect(component).toBeDefined()
  });
  it('Home should have AppLogo, List and CustomButton', () => {
    const {getByTestId} = render(<Home />)
    const HomeLogo = getByTestId('HomeLogo')
    const HomeList = getByTestId('HomeList')
    const HomeCreateButton = getByTestId('HomeCreateButton')
    expect(HomeLogo).toBeDefined()
    expect(HomeList).toBeDefined()
    expect(HomeCreateButton).toBeDefined()
  });
  it('Home should redirect to NewCharacter screen once HomeCreateButton has been pressed', () => {
    const navigate = jest.fn()
    const {getByTestId} = render(<Home navigation={{ navigate }} />)
    const HomeCreateButton = getByTestId('HomeCreateButton')
    fireEvent.press(HomeCreateButton)
    expect(navigate).toHaveBeenCalledWith('NewCharacter')
  });
})
