import React from 'react'
import { View, Text } from 'react-native'
import {Input} from '../../components'

const SetPassword = () => {
  return (
    <View>
      <Input label="Set Password" secureTextEntry />
      <Input label="Confirm Password" secureTextEntry />
    </View>
  )
}

export default SetPassword
