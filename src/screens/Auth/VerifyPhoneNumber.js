import React from "react";
import { Block, Text, Header, Input, Button, PinInput } from "../../components";
import { SIZES } from "../../utils/theme";

const VerifyPhoneNumber = () => {
  return (
    <Block background>
      <Header backTitle="Verify Phone Number" />
      <Block
        space="around"
        marginVertical={SIZES.padding}
        paddingHorizontal={SIZES.padding}
      >
        <Block middle flex={2}>
          <PinInput
            style={{ width: "80%", height: 200 }}
            pinCount={4}
            autoFocusOnLoad
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </Block>
        <Block
          flex={2}
          justifyContent="flex-start"
          marginVertical={SIZES.padding * 2}
        >
          <Button transparent>
            <Text gray center small>
              We sent a text message to 07067139202 with your verification code
            </Text>
          </Button>
          <Button transparent>
            <Text secondary center small>
              Resend code in 09:23
            </Text>
          </Button>
        </Block>
        <Block justifyContent="flex-start">
          <Button onPress={() => navigation.navigate("VerifyPhoneNumber")}>
            <Text white center h6>
              Continue
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default VerifyPhoneNumber;
