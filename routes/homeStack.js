
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'
// https://heartbeat.fritz.ai/getting-started-with-stack-navigator-using-react-navigation-5-in-react-native-and-expo-apps-4c516becaee1
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import Header from '../shared/header'

const Stack = createStackNavigator()

function HomeStack() {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
       screenOptions={{
        headerStyle: {
          backgroundColor: "#eee",
          height: 60,
          
        },
        headerTintColor: "#444",
      }}>
        <Stack.Screen name='Home' component={Home} options={( {navigation})=>{ return { headerTitle: () => <Header navigation={navigation} /> }}} />
        <Stack.Screen name='ReviewDetails' component={ReviewDetails} options={{ title: 'Review Details' }} />
      </Stack.Navigator>
    // </NavigationContainer>
  )
}


export default HomeStack;
