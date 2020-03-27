import React, {useState} from 'react'
import {Block, Text, Header, Input, Button, ImageIcon, Dropdown} from '../../components'
import { SIZES } from '../../utils/theme'

const SellInput = () => {
  return (
    <Block background >
      <Header backTitle="Sell Your Outputs" />
      <Text marginVertical={5} paddingHorizontal={SIZES.padding }>Place item available for sell</Text>
      <Block scroll marginVertical={25}  paddingHorizontal={SIZES.padding}>
      <Block marginVertical={8} center middle flex={0} column>
       <Button muted center middle width={80} height={80}>
         <Block center middle >
        <ImageIcon  
            style={{
               
                }}
                name="add" 
            />
         </Block>
       </Button>
       <Text marginVertical={6} small muted>
       Add image of item
       </Text>
      </Block>
        <Block middle flex={0}>
        <Input label="Description" />
        <Input label="Select State" />
        <Dropdown label="LGA" />
        <Dropdown label="Category" />
        <Block flex={0} space='around' row>
        <Block>
        <Dropdown label="Item" />
        <Text primary small >Minimum of 10 item per order</Text>
        </Block>
        <Block>
        <Dropdown label="Qty:10" />
        </Block>
        </Block>
        <Input label="Delivery location" />
        <Text primary small>Estimated Price:
          <Text black small >
            N8,000 per item
          </Text>
        </Text>
        </Block>
  
      </Block>
        <Block flex={0} >
          <Button radius={false}>
            <Text white center h6>Pay N5,000</Text>
          </Button>
        </Block>
        <Block flex={0} top>
        </Block>
    </Block>
  )
}

export default SellInput;
