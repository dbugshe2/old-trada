import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Commission,
  CommissionAct
} from "../screens";

const Stack = createStackNavigator()

const CommissionNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Commission" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Commission" component={Commission}/>
      <Stack.Screen name="CommissionAct" component={CommissionAct}/>

    </Stack.Navigator>
  )
}

export default CommissionNavigator

