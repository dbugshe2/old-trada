import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeNavigator from "./HomeNavigator";
import MarketNavigator from "./MarketNavigator";
import StoreNavigator from "./StoreNavigator";
import LeaderboardNavigator from "./LeaderboardNavigator";
import { bottomBarStyles } from "../constants/navigation";

import ImageIcon from "../components/primary/ImageIcon";
import { theme } from "../utils";

const Tab = createMaterialBottomTabNavigator();

const { COLORS } = theme;

const AppBottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={COLORS.primary}
      inactiveColor={COLORS.white}
      shifting={false}
      screenOptions={{ headerShown: false }}
      barStyle={bottomBarStyles}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <ImageIcon name={focused ? "houseAlt" : "house"} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Store"
        component={StoreNavigator}
        options={{
          tabBarLabel: "Shop",
          tabBarIcon: ({ focused }) => (
            <ImageIcon name={focused ? "storeFrontAlt" : "storeFront"} />
          )
        }}
      />
      <Tab.Screen
        name="Market"
        component={MarketNavigator}
        options={{
          tabBarLabel: "Market Price",
          tabBarIcon: ({ focused }) => (
            <ImageIcon name={focused ? "add" : "add"} />
          )
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderboardNavigator}
        options={{
          tabBarLabel: "Leaderboard",
          tabBarIcon: ({ focused }) => (
            <ImageIcon name={focused ? "eventAlt" : "event"} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default AppBottomTabs;
