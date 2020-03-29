import React from 'react'
import {useWindowDimensions} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {theme} from '../utils'
import AppBottomTabs from './AppBottomTabs';
const Drawer = createDrawerNavigator()

const AppDrawer = () => {
  const { width } = theme.SIZES
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}} drawerType={width > 900 ? 'permanent' : 'front'}>
      <Drawer.Screen name="AppBottomTabs" component={AppBottomTabs} />
    </Drawer.Navigator>
  )
}

export default AppDrawer