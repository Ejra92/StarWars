import { FormInput } from '..'
import { fireEvent, render } from '../../../utils/test/test-utils';

describe('FormInput test suite', () => { 
  const testID = 'FormInput'
  it('FormInput sould render', () => {
    const {getByTestId} = render(
      <FormInput
        placeholder='Hi'
        label = 'hi'
        onChange = {() => {}}
        value = 'hi'
        testID={testID}
      />
    )
    const Input = getByTestId(testID)

    expect(Input).toBeDefined()
  });

  it('FormInput should render label if the input has a value', () => {
    const {getByText} = render(
      <FormInput
        label = 'i am the label'
        onChange = {() => {}}
        value = 'data to have label'
        testID={testID}
      />
    )

    const label = getByText('i am the label')
    expect(label).toBeDefined()
  });

  it('FormInput should not render label if the input does not has a value', () => {
    const {getByTestId} = render(
      <FormInput
        label = 'i am the label'
        onChange = {() => {}}
        value = ''
      />
    )
    
    const InputContainer = getByTestId('FormInputContainer')

    expect(InputContainer.children).toHaveLength(1)
  });

  it('FormInput onChange should be called', () => {
    const mockedOnChange = jest.fn()
    const {getByTestId} = render(
      <FormInput
        label = 'Email'
        onChange = {mockedOnChange}
        value = ''
        testID={testID}
      />
    )
    
    const Input = getByTestId(testID)
    fireEvent.changeText(Input, 'Hello Mr DarthVader')

    expect(mockedOnChange).toBeCalled()
  });
})