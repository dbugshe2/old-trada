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
import { Divider } from 'react-native-paper';


const StoreItemSummary = ({navigation}) => {
  return (
   <Block   background>
  
  
   <Header backTitle="Summary" />
    <Block  paddingHorizontal={SIZES.padding}  marginVertical={30} >
      
      <Block column>
        {/* pic */}
        <Block flex={0} row paddingHorizontal={10}>
          <Block center middle>
          <ImageIcon name="riceBag" width={180} height={100} />
          </Block>
          <Block paddingHorizontal={16}>
            <Text h3>Rice Padi</Text>
            <Text muted h6>Freshly harvested rice padi</Text>
          </Block>
        </Block>
        {/* end */}
        {/* text section */}
        <Block flex={0} marginVertical={18}>
            <Text  body muted>Reference No. T2U93992882</Text>
            <Text body muted >Monday Jan 09, 2020</Text>
        </Block>
        {/* end */}
        <Block marginVertical={25} flex={0.8}>
        <Card outlined white >

        </Card>
      </Block>

      </Block>
      
    </Block>
    


    </Block>        

  );
};

export default StoreItemSummary;
