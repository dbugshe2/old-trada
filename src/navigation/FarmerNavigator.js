import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import {FarmerActivitiesAdd, FarmerCultivate, FarmerOnboarding, FarmerPhotoUpload, FarmerSummary, FarmerActivities  } from '../screens'
const Stack = createStackNavigator()

const FarmerNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="FarmerActivitiesAdd" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FarmerActivitiesAdd" component={FarmerActivitiesAdd}/>
      <Stack.Screen name="FarmerCultivate" component={FarmerCultivate}/>
      <Stack.Screen name="FarmerOnboarding" component={FarmerOnboarding}/>
      <Stack.Screen name="FarmerPhotoUpload" component={FarmerPhotoUpload}/>
      <Stack.Screen name="FarmerSummary" component={FarmerSummary}/>
      <Stack.Screen name="FarmerActivities" component={FarmerActivities}/>
 
    </Stack.Navigator>
  )
}

export default FarmerNavigator
