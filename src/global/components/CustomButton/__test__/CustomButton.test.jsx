import { fireEvent, render } from '../../../utils/test/test-utils'
import {CustomButton} from '../index'

describe('CustomButton test suite', () => {
  const title = 'hola'
  it('CustomButton should render', () => {
    const {getByTestId} = render(
      <CustomButton
        onPress={() =>{}}
        title={title}
        testID={'CustomButton'}
      />
    )
    const Buttom = getByTestId('CustomButton')
    expect(Buttom).toBeDefined()
  });
  it('CustomButton should render correctly title', () => {
    const {getByText} = render(
      <CustomButton
        onPress={() =>{}}
        title={title}
      />
    )
    const ButtomTitle = getByText(title)
    expect(ButtomTitle).toBeDefined()
  });
  it('CustomButton should be inavailable wether disabled prop is true', () => {
    const func = jest.fn()
    const {getByTestId} = render(
      <CustomButton
        onPress={func}
        title={title}
        disabled
        testID={'CustomButton'}
      />
    )
    const Buttom = getByTestId('CustomButton')
    fireEvent.press(Buttom)
    
    expect(func).not.toBeCalled()
  });
});