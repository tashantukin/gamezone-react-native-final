
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { NavigationContainer } from '@react-navigation/native'

import  AboutStack from './aboutStack'
import HomeStack from './homeStack'

const Drawer = createDrawerNavigator()


function RootDrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='AboutStack' component={AboutStack} options={{ title: 'About Page' }} />
       <Drawer.Screen name='HomeStack' component={HomeStack} options={{ title: 'Home Page' }} />
      </Drawer.Navigator>
    </NavigationContainer>
)

}

export default RootDrawerNavigator;