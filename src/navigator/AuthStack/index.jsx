import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../../screens/Login/Login'

const Stack = createNativeStackNavigator()

export const AuthStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </>
  )
}