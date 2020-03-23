import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import {Leaderboard} from '../screens';


const Stack = createStackNavigator()

const LeaderboardNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LeaderBoard" component={Leaderboard} />
    </Stack.Navigator>
  )
}

export default LeaderboardNavigator
