import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { AddCashViaBankTransfer, AddCashViaUssd } from "../screens";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const RecieveTab = () => {
  return (
    <Tab.Navigator initialRouteName="AddCashViaBankTransfer" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Via Bank Transfer" component={AddCashViaBankTransfer} />
      <Tab.Screen name="Via Ussd Code" component={AddCashViaUssd} />
    </Tab.Navigator>
  );
};

const RecieveNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Recieve" component={RecieveTab} />
  </Stack.Navigator>
);

export default RecieveNavigator;
