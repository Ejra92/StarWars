import { fireEvent, render } from '../../../../../global/utils/test/test-utils'
import { ListItem } from '..'

describe('ListItem test suit', () => { 
  it('ListItem should render', () => {
    const {getByTestId} = render(<ListItem testID='ListItem' />)

    const Item = getByTestId('ListItem')

    expect(Item).toBeDefined()
  })

  it('ListItem should name, height and gender correctly', () => {
    const {getByText} = render(
      <ListItem
        gender={'male'}
        name={'eric'}
        height={180}
      />
    )

    const name = getByText(/eric/d)
    const heightAndGender = getByText('Height: 180 cm | Gender: male')

    expect(name).toBeDefined()
    expect(heightAndGender).toBeDefined()
  })

  it('ListItem should name, height and gender correctly', () => {
    const {getByTestId, store} = render(
      <ListItem
        gender={'male'}
        name={'eric'}
        height={180}
      />,
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

    const Button = getByTestId('ListItemDeleteButton')

    expect(store.getState().list.data.length).toBe(1)

    fireEvent.press(Button)

    expect(store.getState().list.data.length).toBe(0)
  })
})