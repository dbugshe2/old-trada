import React, {useState} from 'react'
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView
} from "react-native";
import {Block, Card, Text, Header, ImageIcon, Input, Button} from '../../components'
import { SIZES, COLORS } from '../../utils/theme'
import BackButton from '../../components/BackButton';


const TransferToTmoni = ({navigation}) => {
  return (
    <Block scroll  background>
      <Header backTitle="Transfer Cash"/>
      <Block  space="evenly" paddingHorizontal={SIZES.padding} >

    
      <Block marginVertical={50} >
      <Button  center middle radius={8} white shadow elevation={10} row height={120}
      onPress={() => navigation.navigate("TransferCash")}
      >
          <Block paddingHorizontal={SIZES.padding} paddingVertical={SIZES.padding * 2} middle row center>

          <Block flex={2} column>
          <Text h2>
          Tmoni account
          </Text>
          <Text left gray body >
          Transfer cash to your Tmoni account for free 
          </Text>
          </Block>
          
          <Block flex={1}></Block>
          <ImageIcon  
            style={{
                  
                }}
                name="avatar" 
            />
          </Block>
      </Button>

      </Block>
    
      </Block>
    </Block>        

  );
};

export default TransferToTmoni;
