import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Home,
  AddCashViaBankTransfer,
  AddCashViaUssd,
  TransferCash,
  TransferDetails,
  TransferOptions,
  TransferToTmoni,
} from "../screens";
import AddCashTab from './AddCashTab'
import { Header } from "../components";
import ProfileTab from "./ProfileTab";
import CommissionNavigator from "./CommissionNavigator";
import SettingsNavigator from "./SettingsNavigator";
import AboutNavigator from "./AboutNavigator";

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
      <Stack.Screen name="AddCashTab"  screenOptions={{
        header: ({scene, previous, navigation}) => (<Header backTitle="Add Cash" />)
      }}component={AddCashTab} />
      
    <Stack.Screen name="ProfileTab" component={ProfileTab}  />
    <Stack.Screen name="CommissionNavigator" component={CommissionNavigator}  />
    <Stack.Screen name="SettingsNavigator" component={SettingsNavigator} />
    <Stack.Screen name="AboutNavigator" component={AboutNavigator} />

      
    </Stack.Navigator>
  );
};

export default HomeNavigator;
