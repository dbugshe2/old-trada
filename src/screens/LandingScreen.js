import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ImageIcon from '../components/primary/ImageIcon';




export class LandingScreen extends Component {
 
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
      <ImageIcon name="logo" />
    <Text>loading...</Text>
  </View>
    )
  }
}

export default LandingScreen
