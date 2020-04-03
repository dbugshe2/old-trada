import React, { useState, useContext, useEffect } from "react";
import { Block, Text, Header, Input, Button } from "../../components";
import { ActivityIndicator } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { SIZES, COLORS } from "../../utils/theme";
import { useForm } from "react-hook-form";
import { AuthContext, useAuthContext } from "../../context";
import { captureException } from "sentry-expo";

const ForgotPassword = ({ navigation }) => {
  const { register, handleSubmit, setValue, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const auth = useAuthContext();
  const { requestResetOtp } = auth;

  useEffect(() => {
    register(
      { name: "phone" },
      {
        required: "please enter your phone number",
        maxLength: { value: 11, message: "phone number is too short" },
        minLength: { value: 10, message: "phone number should be 11 digits or less" }
      }
    );
  }, [register]);

  const onSubmit = data => {
    setLoading(true);
    requestResetOtp(data)
      .then(res => {
        console.log({ ...res });
        if (res.status === "success") {
          navigation.navigate("VerifyPasswordReset");
        } else {
          setMessage(res.message);
          setLoading(false);
        }
      })
      .catch(err => {
        captureException(err);
        setLoading(false);
        setMessage({ ...err });
        return;
      });
  };

  return (
    <Block background>
      <Header backTitle="Password Reset" />
      <Block
        space="around"
        marginVertical={SIZES.padding}
        paddingHorizontal={SIZES.padding}
      >
        <Block>
          <Input
            label="Phone Number"
            keyboardType="phone-pad"
            // render={props => {
            //   return <TextInputMask type={'cel-phone'} options={{ maskType: 'INTERNATIONAL', withDDD: true, dddMask: '+234' }} {...props} />
            // }}
            onChangeText={text => {
              setValue("phone", text);
            }}
            maxLength={11}
            error={errors.phone}
          />
          <Text secondary small>
            {message}
          </Text>
          <Text gray small>
            Please enter phone number to reset your password
          </Text>
        </Block>
        <Block middle>
          {loading ? (
            <ActivityIndicator animating size="large" color={COLORS.primary} />
          ) : (
            <Button onPress={() => navigation.navigate('VerifyPasswordReset')}>
              <Text white center h6>
                Continue
              </Text>
            </Button>
          )}
        </Block>
      </Block>
      <Block flex={0} inactive center paddingVertical={SIZES.base}>
        <Block flex={0} row middle center>
          <Text muted body center>
            Already have an account?
          </Text>
          <Button
            marginHorizontal={SIZES.base}
            transparent
            onPress={() => navigation.navigate("Login")}
          >
            <Text body primary>
              Log In
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default ForgotPassword;
