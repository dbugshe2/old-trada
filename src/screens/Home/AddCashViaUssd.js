import React, {useState} from 'react'
import {Block, Text, Header, Input, Button, ImageIcon, Dropdown} from '../../components'
import { SIZES } from '../../utils/theme'

const AddCashViaUssd = () => {
  return (
    <Block background >
      <Block scroll marginVertical={60} marginHorizontal={30} paddingHorizontal={SIZES.padding}>
          <Block>
            <Input label="Enter Amount" />
          </Block>
         <Text  paddingTop={30} muted>
           Make a USSD transfer into your Trada wallet by selecting Providus Bank as destination bank
         </Text>

        <Block marginVertical={50}>
        
          <Block>
         <Text gray h6>
         ACCESS BANK
         </Text>
         <Text primary small>
         *901*1*100*9907683967#
         </Text>
          </Block>

         <Block marginVertical={20}>
         <Text gray h6>
         DIAMOND BANK
         </Text>
         <Text primary small>
         *426*100*9907683967
         </Text>
         </Block> 

         <Block>
         <Text gray h6>
         FCMB
         </Text>
         <Text primary small>
         *329*100*9907683967#
         </Text>
         </Block> 
        
         <Block  marginVertical={20}>
         <Text gray h6>
         FIDELITY BANK
         </Text>
         <Text primary small>
         *770*9907683967*100#
         </Text>
         </Block> 
        
         <Block>
         <Text gray h6>
         FIRST BANK
         </Text>
         <Text primary small>
         *894*100*9907683967#
         </Text>
         </Block> 
        
        </Block>
        
         

      </Block>
    </Block>
  )
}

export default AddCashViaUssd
