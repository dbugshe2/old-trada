import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Home,
  AddCashViaBankTransfer,
  AddCashViaUssd,
  TransferCash,
  TransferDetails,
  TransferOptions,
  TransferToTmoni
} from "../screens";
import AddCashNavigator from './AddCashNavigator'

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="AddCashViaBankTransfer"
        component={AddCashViaBankTransfer}
      />
      <Stack.Screen name="AddCashViaUssd" component={AddCashViaUssd} />
      <Stack.Screen name="TransferCash" component={TransferCash} />
      <Stack.Screen name="TransferOptions" component={TransferOptions} />
      <Stack.Screen name="TransferDetails" component={TransferDetails} />
      <Stack.Screen name="TransferToTmoni" component={TransferToTmoni} />
      <Stack.Screen name="AddCashNavigator" component={AddCashNavigator} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
