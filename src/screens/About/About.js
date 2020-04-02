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
const About = ({navigation}) => {
    return (
   <Block  background>
    <Header backTitle="Settings" />
   <Block paddingHorizontal={SIZES.padding} scroll >

    <Block marginVertical={18} center row >

        <TouchableOpacity  onPress={() => navigation.navigate("ChangePassword")}>
        <Text marginLeft={10} gray h6>Rate app</Text>
        </TouchableOpacity>

    </Block>
    <Divider />

    <Block marginVertical={18} center row >
        
        <TouchableOpacity  onPress={() => navigation.navigate("Faq")}>
        <Text marginLeft={10} gray h6>FAQs</Text>
        </TouchableOpacity>

    </Block>
    <Divider />
    <Block marginVertical={18} center row >

        <TouchableOpacity>
        <Text marginLeft={10} gray h6>Terms and conditions</Text>
        </TouchableOpacity>

    </Block>
    <Divider />

    <Block marginVertical={18} center row >

        <TouchableOpacity >
        <Text marginLeft={10} gray h6>Privacy policy</Text>
        </TouchableOpacity>

    </Block>
    <Divider />
  
  </Block>
  </Block>
    )
}

export default About
