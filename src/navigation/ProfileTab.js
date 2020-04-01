import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { PersonalInformation, ProfileVerification } from "../screens";
import { Header } from "../components";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const ProfileTab = () => {
  return (
    <Tab.Navigator initialRouteName="ProfileTab" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Personal Information" component={PersonalInformation} />
      <Tab.Screen name="Verification" component={ProfileVerification} />
    </Tab.Navigator>
  );
};


export default ProfileTab;
