import React, {useState} from 'react'
import {Block, Text, Header, Input, Button, Dropdown} from '../../components'
import { SIZES } from '../../utils/theme'

const PriceUpdate = () => {
  return (
    <Block background >
      <Header backTitle="Price Update" />
      <Text marginVertical={10} paddingHorizontal={SIZES.padding }>Updates are based on a per bag bases - 100kg</Text>
      <Block space="around" marginVertical={SIZES.padding} paddingHorizontal={SIZES.padding}>
        <Block middle flex={4}>
        <Dropdown label="Select State" />
        <Dropdown label="LGA" />
        <Dropdown label="Select Item" />
        <Block flex={0} space='around' row>
        <Block>
        <Dropdown label="Min Price" />
        </Block>
        <Block>
        <Dropdown label="Max Price" />
        </Block>
        </Block>
        <Block marginVertical={50} justifyContent="flex-start" >
          <Button >
            <Text white center h6>Save</Text>
          </Button>
        </Block>

        </Block>
       
      </Block>
    </Block>
  )
}

export default PriceUpdate
