import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  UserOnboarding,
  EnterPin,
  EnterBio,
  EnterLocation,
  EnterPhysical,
  Login,
  MobileVerification,
  Registration,
  ForgotPassword,
  SetPassword,
  VerifyPasswordReset,
  VerifyPhoneNumber,
  ResetPassword
} from "../screens";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="UserOnboarding">
      <Stack.Screen name="UserOnboarding" component={UserOnboarding} />
      <Stack.Screen name="EnterPin" component={EnterPin} />
      <Stack.Screen name="EnterBio" component={EnterBio} />
      <Stack.Screen name="EnterLocation" component={EnterLocation} />
      <Stack.Screen name="EnterPhysical" component={EnterPhysical} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MobileVerification" component={MobileVerification} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="SetPassword" component={SetPassword} />
      <Stack.Screen name="VerifyPasswordReset" component={VerifyPasswordReset} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
