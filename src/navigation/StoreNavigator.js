import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { StoreInputs, StoreItemSummary, StoreOutputs, PhotoUpload, BuyInput, SellOutput } from "../screens";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const StoreTab = () => {
  return (
    <Tab.Navigator initialRouteName="StoreInputs" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Buy Your Inputs" component={StoreInputs} />
      <Tab.Screen name="Sell Your Outputs" component={StoreOutputs} />
    </Tab.Navigator>
  );
};

const StoreNavigator = () => (
  <Stack.Navigator initialRouteName="Store" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Store" component={StoreTab} />
    <Stack.Screen name="StoreItemSummary" component={StoreItemSummary} />
      <Stack.Screen name="PhotoUpload" component={PhotoUpload} />
    <Stack.Screen name="BuyInput" component={BuyInput} />
    <Stack.Screen name="SellOutput" component={SellOutput} />
  </Stack.Navigator>
);

export default StoreNavigator;
