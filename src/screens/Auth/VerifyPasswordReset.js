import React, { useState, useEffect, useContext } from "react";
import { Block, Text, Header, Button, PinInput, Timer } from "../../components";
import { ActivityIndicator } from "react-native";
import { SIZES, COLORS } from "../../utils/theme";
import { AuthContext } from "../../context/auth/AuthContext";
import { captureException } from "sentry-expo";
import { useForm } from "react-hook-form";

const VerifyPasswordReset = ({ navigation}) => {
  const auth = useContext(AuthContext);
  const { register, handleSubmit, setValue } = useForm();

  const { phone, setResetPinOtp } = auth;

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [canResend, setCanResend] = useState(false);

  const onSubmit = async data => {
    setLoading(true);
    setResetPinOtp(data);
    navigation.navigate("ResetPassword");
    setLoading(false);
  };
  useEffect(() => {
    register({ name: "resetPinOtp" }, { required: true, minLength: 4 });
  }, [register]);
  return (
    <Block background>
      <Header backTitle="Enter OTP" />
      <Block
        space="around"
        marginVertical={SIZES.padding}
        paddingHorizontal={SIZES.padding}
      >
        <Block middle center flex={2}>
          <PinInput
            style={{ width: "80%" }}
            pinCount={4}
            autoFocusOnLoad
            onCodeChanged={text => {
              setValue("resetPinOtp", text);
            }}
          />
          <Text secondary h5>
            {message}
          </Text>
        </Block>
        <Block
          flex={2}
          justifyContent="flex-start"
          marginVertical={SIZES.padding * 2}
        >
          <Text gray center small>
            Enter the 4 digit code we sent to {phone}
          </Text>
          {canResend ? (
            <Button transparent onPress={null}>
              <Text primary center small>
                Resend code
              </Text>
            </Button>
          ) : (
            <Button transparent>
              <Text secondary center small>
                Resend code in{" "}
                <Timer
                  onComplete={() => setCanResend(true)}
                  secondary
                  time={{ mins: 0, secs: 10 }}
                />
              </Text>
            </Button>
          )}
        </Block>
        <Block justifyContent="flex-start">
          {loading ? (
            <ActivityIndicator animating size="large" color={COLORS.primary} />
          ) : (
            <Button onPress={handleSubmit(onSubmit)}>
              <Text white center h6>
                Continue
              </Text>
            </Button>
          )}
        </Block>
      </Block>
    </Block>
  );
};

export default VerifyPasswordReset;
