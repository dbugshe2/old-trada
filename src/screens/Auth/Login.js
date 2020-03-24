import React, {useState} from 'react'
import {Block, Text, Header, Input, Button} from '../../components'
import { SIZES } from '../../utils/theme'
const Login = () => {
  return (
    <Block background >
      <Header backTitle="Log in" />
      <Block space="around" paddingHorizontal={SIZES.padding}>
        <Block middle space="around">
        <Input label="Phone Number" />
        <Input label="Password" />
        </Block>
        <Block>
          <Button>
            <Text white center h6>Log In</Text>
          </Button>
        </Block>
      </Block>
    </Block>
  )
}

export default Login
