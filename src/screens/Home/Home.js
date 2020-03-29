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

const Home = ({navigation}) => {
  return (
  
    <Block scroll  background>
      <Block  space="evenly" paddingHorizontal={SIZES.padding} >

      {/* one */}
      <Block>
        <Block center>
        <Text body muted> Tmoni Wallet Balance</Text>
        <Text  gray h1> N25 ,000</Text>
        </Block>
        {/* card */}
        <Block paddingHorizontal={SIZES.padding} paddingTop={30}>
            <Card  center middle radius={8} white shadow elevation={10} row>
            <Block row middle center space="evenly" paddingHorizontal={50}>

            <Text marginLeft primary>
            Providus Bank
            </Text>
            <Text muted>
            9902046493
            </Text>
            <Button transparent center middle paddingHorizontal={SIZES.base}>
                  <ImageIcon name="copy" />
            </Button>
            </Block>
          </Card>
        </Block>
        <Block center paddingTop={15}>
          <Text>
            Indicators
          </Text>
        </Block>
      </Block>
      


      {/* two */}
      <Block>
        <Block space="evenly" row center  paddingTop={30} paddingHorizontal={SIZES.padding * 2}>
          <Button center middle  height={50} width={100} odd shadow elevation={10}
          onPress={() => navigation.navigate("TransferToTmoni")}
          >
          <Block middle center  row>
          <ImageIcon  
            style={{
                  
                }}
                name="sentAlt" 
            />

            <Text marginLeft={8}>
              Send
            </Text>
          </Block>
          </Button>

          <Button center middle  height={50} width={100}  odd shadow elevation={10}
          onPress={() => navigation.navigate("RecieveNavigator")}
          >
          <Block middle center row>
          <ImageIcon  
            style={{
                  
                }}
                name="recievedAlt" 
            />

            <Text marginLeft={8}>
              Recieve
            </Text>
          </Block>
          </Button>
        </Block>
      </Block>


      {/* three */}
      <Block marginVertical={35} >
      <Button  center middle radius={8} white shadow elevation={10} row height={150}
      onPress={() => navigation.navigate('Store',{screen: 'BuyInputs'})}
      >
          <Block paddingHorizontal={SIZES.padding} paddingVertical={SIZES.padding * 2} middle row center>
          <Block column>
          <Text h2>
          Buy your inputs
          </Text>
          <Text left gray body>
          Get inputs from leading agro companies Across the world at guaranteed lowest price  
          </Text>
          </Block>
          <ImageIcon  
            style={{
                  
                }}
                name="cart" 
            />
          </Block>
      </Button>


      <Button marginVertical={25} center middle radius={8} white shadow elevation={10} row height={150}
      onPress={() => navigation.navigate('Store',{screen: 'SellOutputs'})}
      >
          <Block paddingHorizontal={SIZES.padding} paddingVertical={SIZES.padding * 2} middle row center>
          <Block column>
          <Text h2>
          Sell your Outputs
          </Text>
          <Text left gray body>
          Get inputs from leading agro companies Across the world at guaranteed lowest price  
          </Text>
          </Block>
          <ImageIcon  
            style={{
                  
                }}
                name="basket" 
            />
          </Block>
      </Button>

      </Block>
    
      </Block>
    </Block>        

  );
};

export default Home;
