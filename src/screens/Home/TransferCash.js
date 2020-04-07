import React, {useState} from 'react'
import {Block, Text, Header, Input, Button, Dropdown} from '../../components'
import { SIZES } from '../../utils/theme'
import { useForm } from 'react-hook-form';
import { ActivityIndicator } from 'react-native';
import {useVariationContext} from '../../context'

const TransferCash = () => {

  const [sending, setSending] = useState(false)

  return (
    <Block background >
      <Header backTitle="Transfer Cash" />
      <Block>
      <Block scroll paddingHorizontal={SIZES.padding}>
      <Text mtmedium gray small marginVertical={10} >Transfer funds to your Tmoni account</Text>
          <Block middle>
            <Dropdown />
        <Input label="Account Number" />
        <Input label="Account Name" />
        <Input label="Bank" />
        <Input label="Amount" />
        <Input label="Narration" />
        </Block>
          <Block>
            {sending ? (<ActivityIndicator size="small" />) : (<Button>
            <Text white center h6>Transfer</Text>
          </Button>)}
          
        </Block>
      </Block>
      </Block>
    </Block>
  )
}

export default TransferCash
