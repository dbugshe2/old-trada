import React, {useState} from 'react'
import {Block, Text, Header, Input, Button, Dropdown} from '../../components'
import { SIZES } from '../../utils/theme'

const BuyInput = () => {
  return (
    <Block background >
      <Header backTitle="Buy Your Inputs" />
      <Text marginVertical={5} paddingHorizontal={SIZES.padding }>Transfer funds to your Tmoni account</Text>
      <Block marginVertical={25}  paddingHorizontal={SIZES.padding}>
        <Block middle flex={0}>
        <Dropdown label="Select State" />
        <Dropdown label="LGA" />
        <Dropdown label="Category" />
        <Block flex={0} space='around' row>
        <Block>
        <Dropdown label="Category" />
        <Text primary tiny >Minimum of 10 item per order</Text>
        </Block>
        <Block>
        <Dropdown label="Qty:10" />
        </Block>
        </Block>
        <Dropdown label="Pickup location" />
        </Block>
  
      </Block>
        <Block flex={0} >
          <Button radius={false}>
            <Text white center h6>Pay N27,000</Text>
          </Button>
        </Block>
        <Block flex={0} top>
        </Block>
    </Block>
  )
}

export default BuyInput;
