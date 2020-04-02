import React, {useState} from 'react'
import {Block, Text, Header, Input, ImageIcon, Button, Dropdown} from '../../components'
import { SIZES, COLORS, LINE_HEIGHTS, LETTERSPACING } from "../../utils/theme";
import { commission } from '../../data/index';
import { TouchableOpacity, View, FlatList, StyleSheet } from 'react-native'

const CommissionAct = () => {
    return (
          <Block  background paddingHorizontal={SIZES.padding}>
          <Header backTitle="Your Activity" />
          <Block marginVertical={15} scroll>
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
 
    )
}

export default CommissionAct
