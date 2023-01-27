import { Text } from 'react-native';
import { ContainerScreen } from '..';
import { render } from '../../../utils/test/test-utils'

describe('ContainerScreen test suite', () => {
  const testID = 'ContainerScreen'
  it('ContainerScreen should render', () => {
    const {getByTestId} = render(
      <ContainerScreen
        testID={testID}
      />
    )

    const Container = getByTestId(testID)

    expect(Container).toBeDefined()
  });

  it('ScreenScrollView should render on ContainerScreen when withScroll is true', () => {
    const {getByTestId} = render(
      <ContainerScreen testID={testID} withScroll>
        <Text>Hi</Text>
      </ContainerScreen>
    )

    const ScrollView = getByTestId('ContainerScreenScrollView')

    expect(ScrollView).toBeDefined()
  });

  it('ScreenView should render on ContainerScreen when withScroll is false', () => {
    const {getByTestId} = render(
      <ContainerScreen testID={testID}>
        <Text>Hi</Text>
      </ContainerScreen>
    )

    const ScreenView = getByTestId('ContainerScreenView')

    expect(ScreenView).toBeDefined()
  });

  it('ContainerScreen should render just one element, beside of the StatusBar, on screen when withScroll is true', () => {
    const {getByTestId} = render(
      <ContainerScreen testID={testID} withScroll>
        <Text>Hi</Text>
      </ContainerScreen>
    )

    const Container = getByTestId(testID)

    expect(Container.children).toHaveLength(2)
  })

  it('ContainerScreen should render just one element, beside of the StatusBar, on screen when withScroll is false', () => {
    const {getByTestId} = render(
      <ContainerScreen testID={testID}>
        <Text>Hi</Text>
      </ContainerScreen>
    )

    const Container = getByTestId(testID)

    expect(Container.children).toHaveLength(2)
  })
})