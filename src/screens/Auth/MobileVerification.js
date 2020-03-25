import React from "react";
import { Block, Text, Header, Input, Button } from "../../components";
import { SIZES } from "../../utils/theme";

const MobileVerification = ({navigation}) => {
  return (
    <Block background>
      <Header backTitle="Mobile Verification" />
      <Block
        space="around"
        marginVertical={SIZES.padding}
        paddingHorizontal={SIZES.padding}
      >
        <Block middle flex={2}>
          <Input
            label="Phone Number"
            keyboardType="phone-pad"
            mask="+[000] [000] [0000] [000]"
          />
        </Block>
        <Block
          flex={2}
          justifyContent="flex-start"
          marginVertical={SIZES.padding * 2}
        >
          <Button transparent>
            <Text gray center small>
              By signing up, you confirm that you agree to our <Text primary>Terms or Use</Text> and
              have read and understood our <Text primary>Privacy Policy</Text>. You will receive an
              SMS to confirm Your phone number. SMS fee may apply.
            </Text>
          </Button>
        </Block>
        <Block justifyContent="flex-start">
          <Button onPress={() => navigation.navigate('VerifyPhoneNumber')}>
            <Text white center h6>
              Continue
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default MobileVerification;
