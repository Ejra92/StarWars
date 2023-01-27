import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../../screens/Home'
import { NewCharacter } from '../../screens/NewCharacter'

const Stack = createNativeStackNavigator()

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name='Home'
        component={Home}
      />
      <Stack.Screen
        options={{
          title: 'Create a new character',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#1B1B1D',
          },
          headerTintColor: '#fff',
          headerShadowVisible: false
        }}
        name='NewCharacter'
        component={NewCharacter}
      />
    </Stack.Navigator>
  )
}