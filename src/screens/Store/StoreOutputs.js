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


const StoreOutputs = ({navigation}) => {
  return (
   <Block   background>
   <Block space="evenly" paddingHorizontal={SIZES.padding}  marginVertical={35} background>
      <Block flex={2}>
      <Button  center middle radius={8} white shadow elevation={8} row height={180}
      onPress={() => navigation.navigate("StoreItemSummary")}
      >
         <Block column paddingHorizontal={SIZES.padding} paddingVertical={SIZES.padding}>
          <Block paddingBottom={25} middle row>
         <Block  space="between"  column>
                <Text  h2>
               N25,000
                </Text>
                <Text gray h4>
                Rice Padi
                </Text>
            </Block>
            <ImageIcon  
            style={{
                  
                }}
                name="riceBag" 
            />
          </Block>
            <Divider />
            <Block marginVertical={10} space="between"  column>
                <Text muted small>
                Delivery Status
                </Text>
                <Text gray h6>
                Ungwan Pama, Kaduna, Tuesday Feb 19
                </Text>
            </Block>
         </Block>
      </Button>
      </Block>
     
     

     
      </Block>
     <FAB right={15} bottom={35} onPress={() => navigation.navigate("SellOutput")}/>
    </Block>        

  );
};

export default StoreOutputs;
