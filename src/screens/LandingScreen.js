import React from 'react'
import { View, Text } from 'react-native'
import { AsyncStorage } from "../utils";

const LandingScreen = ({ navigation}) => {
  useEffect(() => {
    async () => {
      let data = await AsyncStorage.getStorageData();
      // try {
      //   if (data) {
      //     return
      //   }
      // } catch (error) {
        
      // }
    }
  });
  return (
    <View style={{flex: 1, justifyContent: 'center',alignContent: 'center'}}>
      <Text>loading...</Text>
    </View>
  )
}

export default LandingScreen
