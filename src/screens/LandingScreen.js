import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { getStorageData } from '../utils';
import {captureException} from 'sentry-expo'



export class LandingScreen extends Component {
  async componentDidMount() {
    try {
      let data = await getStorageData()
      if (data) {
        this.props.navigation('App')
      } else {
        this.props.navigation('Auth')
      }
    } catch (error) {
      captureException(error)
    }
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center',alignContent: 'center'}}>
      <Text>loading...</Text>
    </View>
    )
  }
}

export default LandingScreen
