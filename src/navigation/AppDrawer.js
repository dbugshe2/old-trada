import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { theme } from "../utils";
import AppBottomTabs from "./AppBottomTabs";
import { Sidebar, ImageIcon } from "../components";
import { SIZES, COLORS, LETTERSPACING, LINE_HEIGHTS } from "../utils/theme";
import SettingsNavigator from "./SettingsNavigator";
import CommissionNavigator from './CommissionNavigator'
import hexToRgba from '../utils/rgba'

const Drawer = createDrawerNavigator();


const AppDrawer = () => {
  const { width } = theme.SIZES;
  return (
    <Drawer.Navigator
      drawerContent={props => <Sidebar {...props} />}
      screenOptions={{ headerShown: false }}
      drawerType={width > 900 ? "permanent" : "front"}
      drawerStyle={{
        borderTopRightRadius: SIZES.btnRadius,
        borderBottomRightRadius: SIZES.btnRadius
      }}
      drawerContentOptions={{
        activeTintColor: COLORS.primary,
        inactiveTintColor: COLORS.gray,
        activeBackgroundColor: hexToRgba(COLORS.primary, 0.1),
        labelStyle: {
          fontFamily: 'montserratRegular',
          color: COLORS.gray,
          letterSpacing: LETTERSPACING.point_25,
          lineHeight: LINE_HEIGHTS.seventeen
        },
        itemStyle: {
          marginVertical: SIZES.base
        }
      }}
      hideStatusBar
    >
    <Drawer.Screen name="AppBottomTabs" component={AppBottomTabs}
        options={{ drawerLabel: "Home", drawerIcon: ({ focused}) => <ImageIcon name={focused ?"houseAlt": "house"} /> }}
      />
      {/* <Drawer.Screen
        name="Farmers"
        options={{ drawerLabel: "Farmers activities", drawerIcon : () => <ImageIcon name="farmer" /> }}
        component={AppBottomTabs}
      /> */}
      <Drawer.Screen
        name="Commission"
        options={{ drawerLabel: "Commission activities", drawerIcon : () => <ImageIcon name="commision" />  }}
        component={CommissionNavigator}
      />
      {/* <Drawer.Screen
        name="HowTo"
        options={{ drawerLabel: "How credit score works", drawerIcon : () => <ImageIcon name="hcsw" />  }}
        component={AppBottomTabs}
      /> */}
      <Drawer.Screen
        name="Settings"
        options={{ drawerLabel: "Settings", drawerIcon : () => <ImageIcon name="settings" />  }}
        component={SettingsNavigator}
      />
      <Drawer.Screen
        name="Support"
        options={{ drawerLabel: "Support", drawerIcon : () => <ImageIcon name="support" />  }}
        component={AppBottomTabs}
      />
      <Drawer.Screen
        name="About"
        options={{ drawerLabel: "About", drawerIcon : () => <ImageIcon name="about" />  }}
        component={AppBottomTabs}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
