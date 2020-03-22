import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import HomeNavigator from './HomeNavigator';
import MarketNavigator from './MarketNavigator';
import StoreNavigator from './StoreNavigator';
import LeaderboardNavigator from './LeaderboardNavigator';

const Tab = createMaterialBottomTabNavigator()

const AppBottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home" >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Store" component={StoreNavigator} />
      <Tab.Screen name="Market" component={MarketNavigator} />
      <Tab.Screen name="Leaderboard" component={LeaderboardNavigator} />
      </Tab.Navigator>
  )
}

export default AppBottomTabs
