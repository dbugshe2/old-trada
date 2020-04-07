import React, {useState} from 'react'
import {Block, Text, Header, Input, Button} from '../../components'
import { SIZES } from '../../utils/theme'

const TransferCash = () => {
  return (
    <Block background >
      <Header backTitle="Transfer Cash" />
      <Block>
      <Block scroll paddingHorizontal={SIZES.padding}>
      <Text mtmedium gray small marginVertical={10} >Transfer funds to your Tmoni account</Text>
        <Block middle>
        <Input label="Amount" />
        <Input label="Tmoni Account Number" />
        <Input label="Narration" />
        </Block>
        <Block>
          <Button>
            <Text white center h6>Transfer</Text>
          </Button>
        </Block>
      </Block>
      </Block>
    </Block>
  )
}

export default TransferCash
