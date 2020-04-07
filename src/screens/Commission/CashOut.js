import React, { useEffect, useState } from "react";
import { Block, Text, Header, Input, Button } from "../../components";
import { SIZES, COLORS } from "../../utils/theme";
import { useForm } from "react-hook-form";
import { useCommissionContext } from "../../context/commission/CommissionContext";
import { ActivityIndicator } from "react-native-paper";

const CashOut = ({ navigation }) => {
  const { register, setValue, handleSubmit, errors } = useForm();
  const commission = useCommissionContext();
  const { cashOutCommission } = commission;
  const [sending, setSending] = useState(false);

  useEffect(() => {
    register({ name: "amount" }, { required: "please enter an amount" });
  }, [register]);
  const onSubmit = async data => {
    setSending(true);
    const done = await cashOutCommission(data);
    if (done) {
      navigation.navigate("Commission");
    }
    setSending(false);
  };
  return (
    <Block background>
      <Header backTitle />
      <Block paddingHorizontal={SIZES.padding}>
        <Text h4 gray mtregular>
          How much do you want to cash out? 💰
        </Text>
        <Block>
          <Input
            error={errors.amount}
            onChangeText={text => setValue("amount", text)}
            keyboardType="number-pad"
            label="Enter Amount"
          />
        </Block>
        <Block>
          {sending ? (
            <ActivityIndicator animating color={COLORS.primary} size="large" />
          ) : (
            <Button onPress={handleSubmit(onSubmit)}>
              <Text center white h6>
                Cash out
              </Text>
            </Button>
          )}
        </Block>
      </Block>
    </Block>
  );
};

export default CashOut;
