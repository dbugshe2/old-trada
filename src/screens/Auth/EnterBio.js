import React, {useState} from 'react'
import {Block, Text, Drop, Header, Input, Button} from '../../components'
import { SIZES } from '../../utils/theme'
const EnterBio = ({navigation}) => {
  return (
    <Block background >
      <Header backTitle="Physical" />
      <Block space="around" paddingHorizontal={SIZES.padding}>
      <Block paddingTop={80}>
        <Drop label="Gender" />
        <Input keyboardType={numeric}
        label="Age"/>
        <Drop label="Highest Degree" />

      </Block>
      <Block space="between" row flex={0}>
      <Button transparent onPress={() => navigation.navigate("EnterLocation")}>        
          <Text mtregular gray h5>Back</Text>
        </Button>

        <Button transparent onPress={() => navigation.navigate("EnterBio")}>        
          <Text mtregular primary h5>Next</Text>
        </Button>
      </Block>
    </Block>
    </Block>
    )
}

export default EnterBio;