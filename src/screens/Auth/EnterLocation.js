import React, {useState} from 'react'
import {Block, Text, Dropdown, Header, Input, Button} from '../../components'
import { SIZES } from '../../utils/theme'
const EnterLocation = ({navigation}) => {
  return (
    <Block background >
      <Block space="around" >
      <Block paddingTop={80}>
        <Dropdown label="Select State" />
        <Dropdown label="LGA" />
        <Input label="District Ward"/>

      </Block>
    </Block>
    </Block>
    )
}

export default EnterLocation
