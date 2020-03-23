import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import {MarketPrice, PriceUpdate} from '../screens'
const Stack = createStackNavigator()

const MarketNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MarketPrice" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MarketPrice" component={MarketPrice}/>
      <Stack.Screen name="PriceUpdate" component={PriceUpdate}/>
    </Stack.Navigator>
  )
}

export default MarketNavigator
