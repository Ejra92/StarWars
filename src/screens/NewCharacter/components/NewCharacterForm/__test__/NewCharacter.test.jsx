import { fireEvent, render, waitFor } from '../../../../../global/utils/test/test-utils'
import { NewCharacterForm } from '..'
import { mockedGoBack } from '../../../../../../jest.setup'

describe('NewCharacterForm test suite', () => {
  it('NewCharacterForm should render', () => {
    const {getByTestId} = render(<NewCharacterForm testID={'NewCharacterForm'} />)
    const component = getByTestId('NewCharacterForm')
    expect(component).toBeDefined()
  })
  it('NewCharacterForm fields should render', () => {
    const {getByText, getByTestId} = render(<NewCharacterForm testID={'NewCharacterForm'} />)
    const nameField = getByTestId('NewCharacterFormInput-name')
    const heightField = getByTestId('NewCharacterFormInput-height')
    const maleOpt = getByText('male')
    const femaleOpt = getByText('female')
    const naOpt = getByText('n/a')

    expect(nameField).toBeDefined()
    expect(heightField).toBeDefined()
    expect(maleOpt).toBeDefined()
    expect(femaleOpt).toBeDefined()
    expect(naOpt).toBeDefined()
  })
  it('NewCharacterForm disclaimer should render', () => {
    const {getByTestId} = render(<NewCharacterForm testID={'NewCharacterForm'} />)
    const disclaimer = getByTestId('NewCharacterDisclaimerText')
    expect(disclaimer).toBeDefined()
  })
  it('NewCharacterForm fields should render', async () => {
    const {getByText, getByTestId, store} = render(
      <NewCharacterForm testID={'NewCharacterForm'} />,
      {
        preloadedState: {
          list: {
            data: []
          }
        }
      }
    )
    const nameField = getByTestId('NewCharacterFormInput-name')
    const heightField = getByTestId('NewCharacterFormInput-height')
    const maleOpt = getByText('male')

    fireEvent.changeText(nameField, 'Eric')
    fireEvent.changeText(heightField, '180')
    fireEvent.press(maleOpt)

    const createButtom = getByTestId('NewCharacterCreateButton')
    fireEvent.press(createButtom)

    await waitFor(
      () => {
        expect(store.getState().list.data.length).toBeGreaterThan(0)
      }, 6000
    )
    
    expect(mockedGoBack).toHaveBeenCalled()
  })
})