import { render } from '../../../global/utils/test/test-utils'
import Login from "../Login"

describe('Login test suit', () => {
  it('Login should render', () => {
    const {getByTestId} = render(<Login />)
    
    const component = getByTestId('Login')

    expect(component).toBeDefined()
  })

  it('Login should have Logo, form and checkbox', () => {
    const {getByTestId} = render(<Login />)
    
    const Logo = getByTestId('LoginAppLogo')
    const Form = getByTestId('LoginForm')
    const Checkbox = getByTestId('CheckboxLoginForm')

    expect(Logo).toBeDefined()
    expect(Form).toBeDefined()
    expect(Checkbox).toBeDefined()
  })
})