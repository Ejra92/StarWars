import { Provider } from 'react-redux'
import { RootStack } from './src/navigator/RootStack'
import { store } from './src/store'

function App() {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  )
}

export default App
