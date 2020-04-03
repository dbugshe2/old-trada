import React, { useState, useEffect, useContext } from "react";
import { Keyboard, ActivityIndicator } from "react-native";
import {
  Header,
  Block,
  Text,
  Button,
  StepIndicator,
  Input,
  Dropdown
} from "../../components";
import ViewPager from "@react-native-community/viewpager";
import { COLORS, SIZES } from "../../utils/theme";
import { AuthContext, useAuthContext } from "../../context";
import { VariationContext } from "../../context/variation/VariationContext";
import { useForm } from "react-hook-form";
import { captureException } from "sentry-expo";

const SetPassword = ({ navigation }) => {
  const auth = useAuthContext();
  const variation = useContext(VariationContext);
  const { register, setValue, getValues, handleSubmit, errors } = useForm();

  const { resetPinOtp } = auth;

  const [sending, setSending] = useState(false);

  const onSubmit = async data => {
    setSending(true);
    const res = await login(data);
    if (res.status === "success") {
      setMessage("Login Successfull");
      setSending(false);
    }
    setMessage(res.message);
    setSending(false);
  };
  useEffect(() => {
    register({ name: "pin" }, { required: "please " });
    register(
      { name: "confirmPin" },
      { required: "please enter your pin again" }
    );
  }, [register]);

  return (
    <Block background>
      <Header backTitle="Reset Password" />
      <Block>
        <Input
          label="New Pin"
          secureTextEntry
          onChangeText={text => setPin(text)}
          message={errors.pin && errors.pin.message}
          error={errors.pin}
        />
        <Input
          label="Confirm New Pin"
          secureTextEntry
          onChangeText={text => setConfirmPin(text)}
          message={errors.confirmPin && errors.confirmPin.message}
          error={errors.confirmPin}
        />
        {sending ? (
          <ActivityIndicator animating size="large" />
        ) : (
          <Button
            marginVertical={SIZES.padding}
            secondary
            onPress={() => onSubmit()}
          >
            <Text white center>
              Submit
            </Text>
          </Button>
        )}
      </Block>
    </Block>
  );
};

export default SetPassword;
