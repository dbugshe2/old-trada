import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Commission,
  CommissionHistory,
  CashOut
} from "../screens";

const Stack = createStackNavigator()

const CommissionNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Commission" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Commission" component={Commission}/>
      <Stack.Screen name="CommissionHistory" component={CommissionHistory}/>
      <Stack.Screen name="CashOut" component={CashOut} />
    </Stack.Navigator>
  )
}

export default CommissionNavigator

