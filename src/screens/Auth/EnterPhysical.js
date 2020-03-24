import React, {useState} from 'react'
import {Block, Text, Header, Input, Button} from '../../components'
import { SIZES } from '../../utils/theme'
const EnterPhysical = ({navigation}) => {
  return (
    <Block background >
      <Block space="around" >
      <Block paddingTop={80}>
        <Input label="Full Name" />
        <Input label="Phone Number" />
        <Input label="Email" />

      </Block>
    </Block>
    </Block>
    )
}

export default EnterPhysical
