import { View, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import { styles } from './ContainerScreen.styles'

export const ContainerScreen = props => {
  const {
    children,
    style,
    withScroll = false,
    keyboardShouldPersistTaps,
    statusBgColor = '#1B1B1D',
    statusBarStyle = 'light-content',
    testID
  } = props

  return (
    <SafeAreaView testID={testID} style={{flex: 1, backgroundColor: statusBgColor}}>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={statusBgColor}
      />
      {!!withScroll && (
        <ScrollView
          testID='ContainerScreenScrollView'
          style={{flex: 1}}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps}
          contentInsetAdjustmentBehavior={'automatic'}
          contentContainerStyle={[
            styles.container,
            styles.scrollView,
            style
          ]}
        >
          {children}
        </ScrollView>
      )}
      {!withScroll && (
        <View
          testID='ContainerScreenView'
          style={[
            styles.container,
            {flex: 1, backgroundColor: statusBgColor},
            style
          ]}
        >
          {children}
        </View>
      )}
    </SafeAreaView>
  )
}