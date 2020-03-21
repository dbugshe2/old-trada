import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {LandingScreen} from '../screens'

import { AuthContext } from "../context/auth/AuthState";
const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <AuthContext.Consumer>
      {authContext => {
        {
          authContext.loading
            ?
            (<LandingScreen />)
            :
        (<NavigationContainer>
          <Stack.Navigator>
            {
              authContext.isAuthenticated
              ?
            (<Stack.Screen />)
              :
              (<Stack.Screen />)
            }
          </Stack.Navigator>
        </NavigationContainer>)
            
        }
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
