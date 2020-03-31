import React from 'react'
import {  View, FlatList, StyleSheet } from 'react-native'
import { Block, Text, ImageIcon } from '../../components';
import { SIZES } from '../../utils/theme'
import { data } from '../../data/index';

const Leaderboard = () => {


  return (
    <Block  paddingHorizontal={SIZES.base}>
      <Block flex>
        <FlatList
          data={data}
          keyExtractor={(item, index) =>
            `item-${index}`
          }
          renderItem={({item}) => {
        return (
          <Block row  middle center marginVertical={20} paddingHorizontal={SIZES.padding}>
            
            <Block>
              <Text gray h6>
                {item.title}
              </Text>
              </Block>
              <ImageIcon  
            style={{  
                  
                }}
                name="coin" 
            />
            <Text gray paddingLeft={12} h6>
              {item.amount}
            </Text>
            </Block>

        );
          }}
        />
      </Block>
    </Block>
  );
 }


export default Leaderboard;
