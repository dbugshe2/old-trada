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
    <Header backTitle="About Trada" />
   <Block paddingHorizontal={SIZES.padding} scroll >

    <Block>
        <Button paddingVertical={20}  height={50} transparent>
        <Text marginLeft={10} gray h6>Rate app</Text>
        </Button>

    </Block>
    <Divider />

    <Block>
        <Button paddingVertical={20} height={50}  transparent onPress={() => navigation.navigate("Faq")}>
        <Text marginLeft={10} gray h6>FAQs</Text>
        </Button>

    </Block>
    <Divider />
    <Block>
        <Button paddingVertical={20}  height={50} transparent>
        <Text marginLeft={10} gray h6>Terms and conditions</Text>
        </Button>

    </Block>
    <Divider />
    <Block>
        <Button paddingVertical={20}  height={50} transparent>
        <Text marginLeft={10} gray h6>Privacy policy</Text>
        </Button>

    </Block>
    <Divider />
  
  </Block>
  </Block>
    )
}

export default About
