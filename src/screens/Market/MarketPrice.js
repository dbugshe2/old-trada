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


const MarketPrice = ({navigation}) => {
  return (
   <Block   background center middle>
   <Block   background center middle>
      <ImageIcon  name="market"  />
      <Text muted small>Update Daily Market Price & Earn credit points</Text>
    </Block>  
    <FAB right={15} bottom={35} onPress={() => navigation.navigate("PriceUpdate")}/>
  </Block>
  )
}

export default MarketPrice
