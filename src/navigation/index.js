import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../context/auth/AuthContext";
import { LandingScreen } from "../screens";
import AuthNavigator from "./AuthNavigator";
import AppDrawer from "./AppDrawer";

const Stack = createStackNavigator();

class Navigation extends Component {


  static contextType = AuthContext

  componentDidMount() {
    this.context.verifyLogin()
    // this.verifyIntervalID = setInterval(this.context.verifyLogin(),1200000)
  }

  componentWillUnmount() {
    // clearInterval(this.verifyIntervalID)
  }
  render() {
    return (
      <AuthContext.Consumer>
        {({isAuthenticated, loading}) => (
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              {loading ? (
                <Stack.Screen name="LandingScreen" component={LandingScreen} />
              ) : isAuthenticated ? (
                <Stack.Screen name="App" component={AppDrawer} />
              ) : (
                <Stack.Screen name="Auth" component={AuthNavigator} /> // user NOT authenticated
              ) // user authenticated
              }
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Navigation;
