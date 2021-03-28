
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'
// https://heartbeat.fritz.ai/getting-started-with-stack-navigator-using-react-navigation-5-in-react-native-and-expo-apps-4c516becaee1
import About from '../screens/about'
import Header from '../shared/header'

const Stack = createStackNavigator()

function AboutStack() {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName='About'
       screenOptions={{
        headerStyle: {
          backgroundColor: "#eee",
          height: 60,
        },
        headerTintColor: "#444",
      }}>
        <Stack.Screen name='About' component={About} options={( {navigation})=>{ return { headerTitle: () => <Header navigation={navigation} /> }}} />
       
      </Stack.Navigator>
    // </NavigationContainer>
  )
}


export default AboutStack;
