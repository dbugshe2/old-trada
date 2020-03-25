import React, {useState} from 'react'
import {Block, Text, Header, Input, Button} from '../../components'
import { SIZES } from '../../utils/theme'
const Login = () => {
  return (
    <Block background >
      <Header backTitle="Log in" />
      <Block space="around" marginVertical={SIZES.padding} paddingHorizontal={SIZES.padding}>
        <Block middle flex={2}>
        <Input label="Phone Number" keyboardType="phone-pad" mask="+[000] [000] [0000] [000]" />
        <Input label="Password" />
        </Block>
        <Block flex={3} justifyContent="flex-start" marginVertical={SIZES.padding * 2}>
          <Button>
            <Text white center h6>Log In</Text>
          </Button>
        <Button transparent>
            <Text secondary center small>Forgot your password?</Text>
          </Button>
        </Block>
        <Block flex={0} top>
        </Block>
      </Block>
    </Block>
  )
}

export default Login
