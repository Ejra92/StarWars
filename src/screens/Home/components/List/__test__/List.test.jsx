import { render } from '../../../../../global/utils/test/test-utils'
import { List } from '..'

describe('List test suite', () => {
  it('List should render', () => {
    const {getByTestId} = render(<List testID={'List'} />)
    const component = getByTestId('List')
    expect(component).toBeDefined()
  })

  it('ListItems should render ActivityIndicator when data isFetching', () => {
    const {getByTestId} = render(
      <List testID={'List'} />,
      {
        preloadedState: {
          list: {
            data: [],
            isFetching: true,
            error: false
          }
        }
      }
    )

    const loader = getByTestId('ListActivityIndicator')
    expect(loader).toBeDefined()
  })

  it('ListItems should render', () => {
    const {getByText} = render(
      <List testID={'List'} />,
      {
        preloadedState: {
          list: {
            data: [{
              name: 'eric',
              gender: 'male',
              height: 180
            }]
          }
        }
      }
    )
    const itemName = getByText('eric')
    expect(itemName).toBeDefined()
  })

  it('ListItems should error message when it have troubles with the api request', () => {
    const {getByText} = render(
      <List testID={'List'} />,
      {
        preloadedState: {
          list: {
            data: [],
            isFetching: false,
            error: true
          }
        }
      }
    )
    const errorMessage = getByText('An error has occurred')
    expect(errorMessage).toBeDefined()
  })

  it('ListItems should message when data is empty', () => {
    const {getByText} = render(
      <List testID={'List'} />,
      {
        preloadedState: {
          list: {
            data: [],
            isFetching: false,
            error: false
          }
        }
      }
    )

    const emptyMessage = getByText('The list is empty')
    expect(emptyMessage).toBeDefined()
  })
})