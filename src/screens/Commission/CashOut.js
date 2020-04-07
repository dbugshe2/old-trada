import React, { useEffect} from "react";
import { Block, Text, Header, Input, Button } from "../../components";
import { SIZES } from "../../utils/theme";
import { useForm } from 'react-hook-form';
import { useCommissionContext } from '../../context/commission/CommissionContext'
const CashOut = () => {

  const commission = useCommissionContext()
  const {cashout} = commission
  return (
    <Block background>
      <Header backTitle />
      <Block paddingHorizontal={SIZES.padding}>
        <Text h4 gray mtregular>
          How much do you want to cash out? 💰
        </Text>
        <Block>
          <Input keyboardType="number-pad" label="Enter Amount" />
        </Block>
        <Block>
          <Button>
            <Text center white h6>
              Cash out
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default CashOut;
