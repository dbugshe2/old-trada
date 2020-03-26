import React, {useState} from 'react'
import {Block, Text, Header, Input, Button} from '../../components'
import { SIZES } from '../../utils/theme'

const TransferCash = () => {
  return (
    <Block background >
      <Header backTitle="Transfer Cash" />
      <Text marginVertical={10} paddingHorizontal={SIZES.padding }>Transfer funds to your Tmoni account</Text>
      <Block space="around" marginVertical={SIZES.padding} paddingHorizontal={SIZES.padding}>
        <Block middle flex={2}>
        <Input label="Amount" />
        <Input label="Tmoni Account Number" />
        <Input label="Narration" />
        </Block>
        <Block flex={3} justifyContent="flex-start" paddingTop={80}>
          <Button >
            <Text white center h6>Transfer</Text>
          </Button>
        </Block>
        <Block flex={0} top>
        </Block>
      </Block>
    </Block>
  )
}

export default TransferCash
