import React from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import {StyleSheet} from 'react-native'
const PinInput = props => {
  // https://github.com/tttstudios/react-native-otp-input
  return (
    <OTPInputView
     codeInputFieldStyle={styles.borderStyleBase}
     codeInputHighlightStyle={styles.underlineStyleHighLighted}
      {...props}
/>

  )
}

export default PinInput

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});