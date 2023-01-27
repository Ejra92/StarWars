import { fireEvent, render, waitFor } from '../../../../../global/utils/test/test-utils'
import { LoginForm } from '..'

describe('LoginForm test suite', () => {
  const LoginFormTestID = 'LoginForm'
  it('LoginForm should render', () => {
    const {getByTestId} = render(
      <LoginForm />
    )

    expect(getByTestId(LoginFormTestID)).toBeDefined()
  })

  it('LoginForm inputs email should render', () => {
    const {getByTestId} = render(
      <LoginForm />
    )

    const email = getByTestId('LoginFormEmailInput')

    expect(email).toBeDefined()
  })

  it('LoginForm email error should render if have wrong or empty data', async () => {
    const {getByTestId} = render(
      <LoginForm />
    )

    const email = getByTestId('LoginFormEmailInput')
    fireEvent.changeText(email, '123')

    const button = getByTestId('LoginFormCustomButton')
    fireEvent.press(button)

    await waitFor(
      () => {
        expect(getByTestId('ErrorTextEmail')).toBeDefined()
      }, 350
    )
  })

  it('LoginForm password error should render if have wrong or empty data', async () => {
    const {getByTestId} = render(
      <LoginForm />
    )

    const password = getByTestId('LoginFormPasswordInput')
    fireEvent.changeText(password, '123')

    const button = getByTestId('LoginFormCustomButton')
    fireEvent.press(button)

    await waitFor(
      () => {
        expect(getByTestId('ErrorTextPassword')).toBeDefined()
      }, 350
    )
  })

  it('LoginForm should dispatch logIn action if all fields are ok', async () => {
    const {getByTestId, store} = render(
      <LoginForm 
        testID={LoginFormTestID}
      />
    )

    const email = getByTestId('LoginFormEmailInput')
    fireEvent.changeText(email, 'eric@gmail.com')

    const password = getByTestId('LoginFormPasswordInput')
    fireEvent.changeText(password, '1234')

    const button = getByTestId('LoginFormCustomButton')
    fireEvent.press(button)

    await waitFor(
      () => {
        expect(store.getState().auth.isLogedIn).toBe(true)
        expect(store.getState().auth.userName).toBe('eric')
      }, 500
    )
  })
})
