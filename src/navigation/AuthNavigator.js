import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import {UserOnboarding} from '../screens';


const Stack = createStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="UserOnboarding">
      <Stack.Screen name="UserOnboarding" component={UserOnboarding} />
      </Stack.Navigator>
  )
}

export default AuthNavigator
