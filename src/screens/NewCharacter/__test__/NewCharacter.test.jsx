import { NewCharacter } from '..'
import { render } from '../../../global/utils/test/test-utils'

describe('NewCharacter test suite', () => {
  it('NewCharacter should render', () => {
    const {getByTestId} = render(<NewCharacter testID='NewCharacter' />)
    const component = getByTestId('NewCharacter')
    expect(component).toBeDefined()
  })
  it('NewCharacterForm should render on NewCharacter component', () => {
    const {getByTestId} = render(<NewCharacter testID='NewCharacterForm' />)
    const Form = getByTestId('NewCharacter')
    expect(Form).toBeDefined()
  })
})
