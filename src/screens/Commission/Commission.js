import React, {useState} from 'react'
import {Block, Text, Header, Input, ImageIcon, Button, Dropdown} from '../../components'
import { SIZES, COLORS, LINE_HEIGHTS, LETTERSPACING } from "../../utils/theme";
import { commission } from '../../data/index';
import { TouchableOpacity, View, FlatList, StyleSheet } from 'react-native'

const Commission = ({navigation}) => {
    return (
        <Block background>
            <Block paddingHorizontal={SIZES.padding}>
            <Header backTitle="Comission Activities" />
            <Block flex={0} center middle >
            <Text small muted mtmedium>
              Commision Balance
            </Text>
            <Text gray height={LINE_HEIGHTS.fourty_1} h1 mtregular>
              N 5 ,000
            </Text>
          </Block>

          <Block flex={0} marginVertical={30} center>
            <Button secondary width={150} height={50}>
                <Block center  space="evenly"  row>
                <Text middle h5 white>Cash out</Text>
                <ImageIcon name="cashout" />
                </Block>
            </Button>
          </Block>


          <Block flex={0} space="between" row>

              <Text muted>Your Activity</Text>            
              <TouchableOpacity    onPress={() => navigation.navigate("CommissionAct")}>
              <Text secondary>View All</Text>
              </TouchableOpacity>                
          </Block>






          <Block scroll>
            <Block>
                <FlatList
                data={commission}
                keyExtractor={(item, index) =>
                    `item-${index}`
                }
                renderItem={({item}) => {
                return (
                <Block marginVertical={15} row space="between">
                    <Block row center>
                    <ImageIcon name="cashoutAlt" />
                    <Block marginLeft={15}>
                        <Text gray h6>{item.action}</Text>
                        <Text muted>{item.date}</Text>
                    </Block>
                    </Block>

                    <Block row right>
                        <Block>
                        <Text gray h6 right>{item.amount}</Text>
                        <Text primary right>{item.status}</Text>
                        </Block>
                    </Block>
                </Block>

                );
                }}
                />
            </Block>
         </Block>
         </Block>

        </Block>
    )
}

export default Commission
