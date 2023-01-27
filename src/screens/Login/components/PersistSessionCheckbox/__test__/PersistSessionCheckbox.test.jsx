import { fireEvent, render } from '../../../../../global/utils/test/test-utils'
import { PersistSessionCheckbox } from ".."
import AsyncStorage from '@react-native-async-storage/async-storage'

describe('PersistSessionCheckbox test suite', () => {
  const testID = 'PersistSession'
  it('PersistSessionCheckbox should render', () => {
    const {getByTestId} = render(<PersistSessionCheckbox testID={testID} />)

    const container = getByTestId(testID)

    expect(container).toBeDefined()
  })

  it('PersistSessionCheckbox should render', () => {
    const {getByTestId} = render(<PersistSessionCheckbox testID={testID} />)

    const checkbox = getByTestId('Checkbox')

    fireEvent.press(checkbox)

    expect(checkbox).toBeDefined()
  })

  it('PersistSessionCheckbox should set persist data in storage', () => {
    const {getByTestId} = render(<PersistSessionCheckbox testID={testID} />)

    const checkbox = getByTestId('Checkbox')

    fireEvent.press(checkbox)

    expect(AsyncStorage.setItem).toBeCalled()
  })

  it('PersistSessionCheckbox should remove persist data in storage', () => {
    const {getByTestId} = render(<PersistSessionCheckbox testID={testID} />)

    const checkbox = getByTestId('Checkbox')

    fireEvent.press(checkbox)
    fireEvent.press(checkbox)

    expect(AsyncStorage.removeItem).toBeCalled()
  })
})