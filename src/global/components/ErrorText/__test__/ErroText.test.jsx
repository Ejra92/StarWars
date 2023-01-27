import React from 'react'
import {ErrorText} from '..'
import { render } from '../../../utils/test/test-utils';


describe('ErrorText test suite', () => {
  it('should render', () => {
    const {getByTestId} = render(<ErrorText text='render' testID='ErrorText' />)
    const component = getByTestId('ErrorText')
    expect(component).toBeDefined()
  });
  it('should render right message', () => {
    const text = 'Hi'
    const {getByText} = render(<ErrorText text={text} />)
    const component = getByText(text)
    expect(component).toBeDefined()
  });
})
