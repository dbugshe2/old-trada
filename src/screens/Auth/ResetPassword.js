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
import { AuthContext } from "../../context/auth/AuthContext";
import { VariationContext } from "../../context/variation/VariationContext";
import { useForm } from "react-hook-form";
import { captureException } from "sentry-expo";

const ResetPassword = ({ navigation }) => {
  const auth = useContext(AuthContext);
  const { register, setValue, handleSubmit, errors } = useForm();

  const { resetPin } = auth;

  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState('')

  const onSubmit = async data => {
    setSending(true);
    const res = await resetPin(data);
    if (res.status === "success") {
      setMessage("Pin reset Successfully");
      navigation.navigate("Login")
    } else {
      setMessage(res.message);
    }
    setSending(false);
  };
  useEffect(() => {
    register({ name: "newPin" }, { required: "please set a new pin" });
    register(
      { name: "confirmPin" },
      { required: "please enter your pin again", validate: value => value === getValues() }
    );
  }, [register]);

  return (
    <Block background>
      <Header backTitle="Reset Password" />
      <Block>
        <Block paddingHorizontal={SIZES.padding} space="between">
          <Text secondary>{message}</Text>
          <Input
            label="New Pin"
            secureTextEntry
            maxLength={4}
            keyboardType="number-pad"
            onChangeText={text => setValue("newPin", text)}
            error={errors.newPin}
          />
          <Input
            label="Confirm New Pin"
            maxLength={4}
            secureTextEntry
            keyboardType="number-pad"
            onChangeText={text => setValue("confirmPin", text)}
            error={errors.confirmPin}
          />
          <Block middle>
            {sending ? (
              <ActivityIndicator animating size="large" />
            ) : (
              <Button
                marginVertical={SIZES.padding}
                primary
                onPress={handleSubmit(onSubmit)}
              >
                <Text white center>
                  Reset Password
                </Text>
              </Button>
            )}
          </Block>
        </Block>
        <Block flex={0} inactive center middle row>
          <Text muted small>
            Already have an account?
          </Text>
          <Button
            transparent
            marginHorizontal={SIZES.base}
            onPress={() => navigation.navigate("Login")}
          >
            <Text primary small>
              Log In
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default ResetPassword;
