import React, {useState} from 'react'
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import {Block, Card, Text, Header, ImageIcon, Input, Button, FAB} from '../../components'
import { SIZES, COLORS } from '../../utils/theme'
import { Divider } from 'react-native-paper';



const Settings = ({navigation}) => {
  return (
   <Block background>
    <Header backTitle="Settings" />
   <Block paddingHorizontal={SIZES.padding} scroll background>

    <Block marginVertical={18} center row >

        <ImageIcon name="lock" />

        <TouchableOpacity  onPress={() => navigation.navigate("ChangePassword")}>
        <Text marginLeft={10} gray h6>Change Password</Text>
        </TouchableOpacity>

    </Block>
    <Divider />
  
  </Block>
  </Block>
  )
}

export default Settings
