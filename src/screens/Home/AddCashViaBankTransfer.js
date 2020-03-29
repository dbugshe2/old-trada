import React, {useState} from 'react'
import {Block, Text, Header, Input, Button, ImageIcon, Dropdown} from '../../components'
import { SIZES } from '../../utils/theme'

const AddCashViaBankTransfer = () => {
  return (
    <Block background >
      <Block scroll marginVertical={60} marginHorizontal={30} paddingHorizontal={SIZES.padding}>

         <Text  muted>
         Make a bank transfer into the following account to fund your Trada wallet
         </Text>

        <Block marginVertical={50}>
        
          <Block>
         <Text gray h6>
             ACCOUNT NAME
         </Text>
         <Text primary small>
             CHRISTOPHER SANI
         </Text>
          </Block>

         <Block marginVertical={20}>
         <Text gray h6>
              ACCOUNT NUMBER
         </Text>
         <Text primary small>
              9907683967
         </Text>
         </Block> 

         <Block>
         <Text gray h6>
              BANK NAME
         </Text>
         <Text primary small>
              Providus Bank
         </Text>
         </Block> 
        </Block>
        
         

      </Block>
    </Block>
  )
}

export default AddCashViaBankTransfer
