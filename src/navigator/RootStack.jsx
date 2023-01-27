import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { useAuth } from '../global/hooks/useAuth';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack'

const Stack = createNativeStackNavigator()

export const RootStack = () => {
  const isLogedIn = useAuth()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          isLogedIn 
            ? (
              <Stack.Screen
                name='AppStack'
                component={AppStack}
                options={{
                  headerShown: false
                }}
              />
            )
            : (
              <Stack.Screen
                name='AuthStack'
                component={AuthStack}
                options={{
                  headerShown: false
                }}
              />
            )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}