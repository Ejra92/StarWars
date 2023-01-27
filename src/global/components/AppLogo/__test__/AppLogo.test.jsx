import { render } from '../../../utils/test/test-utils'
import AppLogo from '..'

describe('AppLogo test suite', () => {
  it('AppLogo should render', () => {
    const {getByTestId} = render(<AppLogo testID='AppLogo' />)
    const component = getByTestId('AppLogo')
    expect(component).toBeDefined()
  });
  it('StarwarsSvg should render', () => {
    const {getByTestId} = render(<AppLogo />)
    const component = getByTestId('StarwarsSvg')
    expect(component).toBeDefined()
  });
})
