import React, {useState} from 'react'
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView
} from "react-native";
import {Block, Card, Text, Header, ImageIcon, Input, Button, FAB} from '../../components'
import { SIZES, COLORS } from '../../utils/theme'
import BackButton from '../../components/BackButton';
import { Divider } from 'react-native-paper';


const FarmerActivitiesAdd = ({navigation}) => {
  return (
    <Block background center middle>
      <Header backTitle="Farmer Activities"/>
   <Block  background center middle>
      <Text mtmedium muted small>Onboard Farmers in your location and earn commissions</Text>
    </Block>  
    <FAB right={15} bottom={35} onPress={() => navigation.navigate("FarmerOnboarding")}/>
  </Block>
  )
}

export default FarmerActivitiesAdd
