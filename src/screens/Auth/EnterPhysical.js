import React, {useState} from 'react'
import {Block, Text, Header, Input, Button} from '../../components'
import { SIZES } from '../../utils/theme'
const EnterPhysical = () => {
  return (
    <Block background >
      <Header backTitle="Physical" />
      <Block space="around" paddingHorizontal={SIZES.padding}>
      <Block paddingTop={80}>
        <Input label="Full Name" />
        <Input label="Phone Number" />
        <Input label="Email" />

      </Block>
      <Block right row flex={0}>
        <Button transparent onPress={() => navigation.navigate("EnterLocation")}>        
          <Text mtregular primary h5>Next</Text>
        </Button>
      </Block>
    </Block>
    </Block>
    )
}

export default EnterPhysical
