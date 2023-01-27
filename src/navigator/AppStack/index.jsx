
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Profile } from '../../screens/Profile'
import { HomeStack } from './HomeStack'

const Tab = createBottomTabNavigator()

export const AppStack = () => (
  <Tab.Navigator
    initialRouteName='HomeStack'
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height: 60,
        paddingBottom: 5
      },
      tabBarLabelStyle: {
        fontSize: 14,
        marginTop: -5
      }
    }}
  >
    <Tab.Screen
      options={{
        title: 'Home',
        tabBarIcon: ({focused}) => {
          return (
            <MaterialIcons name='home' size={30} color={focused ? '#5CCBEA' : '#bbb'} />
          )
        },
        tabBarActiveTintColor: '#5CCBEA'
      }}
      component={HomeStack}
      name='HomeStack'
    />
    <Tab.Screen
      options={{
        headerTitleAlign: 'center',
        tabBarIcon: ({focused}) => {
          return (
            <MaterialIcons name='settings' size={30} color={focused ? '#5CCBEA' : '#bbb'} />
          )
        },
        tabBarActiveTintColor: '#5CCBEA'
      }}
      name='Profile'
      component={Profile}
    />
  </Tab.Navigator>
)