import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { AddCashViaBankTransfer, AddCashViaUssd } from "../screens";
import { Header } from "../components";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const AddCashTab = () => {
  return (
    <Tab.Navigator initialRouteName="AddCashViaBankTransfer" screenOptions={{
        header: ({scene, previous, navigation}) => (<Header backTitle="Add Cash" />)
      }}>
      <Tab.Screen name="Via Bank Transfer" component={AddCashViaBankTransfer} />
      <Tab.Screen name="Via Ussd Code" component={AddCashViaUssd} />
    </Tab.Navigator>
  );
};

// const AddCashNavigator = () => (
//   <Stack.Navigator >
//     <Stack.Screen name="Add Cash" component={AddCashTab} screenOptions={{
//         header: ({scene, previous, navigation}) => (<Header backTitle="Add Cash" />)
//       }}/>
//   </Stack.Navigator>
// );

export default AddCashTab;