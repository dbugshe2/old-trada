import React, {useState} from 'react'
import {Block, Text, Dropdown, Header, Input, Button} from '../../components'
import { SIZES } from '../../utils/theme'
const EnterBio = ({ navigation }) => {
  let data = [{
    value: 'Banana',
  }, {
    value: 'Mango',
  }, {
    value: 'Pear',
  }];
  return (
    <Block background >
      <Block space="around" >
      <Block paddingTop={80}>
        <Dropdown data={data} label="Gender" />
        <Input keyboardType="numeric"
        label="Age"/>
        <Dropdown label="Highest Degree" />

      </Block>
    </Block>
    </Block>
    )
}

export default EnterBio;