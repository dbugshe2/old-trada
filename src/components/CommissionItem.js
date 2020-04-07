import React from "react";
import Block from './primary/Block';
import ImageIcon from './primary/ImageIcon';
import Text  from "./primary/Text";
import { COLORS,  LINE_HEIGHTS, LETTERSPACING } from '../utils/theme';
import { StyleSheet } from 'react-native';
import { CurrencyFormatter } from '../utils';

const Commission = props => {
  const {amount, date}  = props
  return (
    <Block
      marginVertical={15}
      style={{
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: COLORS.lightgray
      }}
      row
      space="between"
    >
      <Block row center middle>
        <ImageIcon name="cashoutAlt" />
        <Block marginLeft={15}>
          <Text mtmedium gray h6>
            Cash out
          </Text>
          <Text mtmedium body muted>
            {new Date(date).toLocaleString()}
          </Text>
        </Block>
      </Block>

      <Block row right>
        <Block>
          <Text gray h6 right>
            {CurrencyFormatter(amount)}
          </Text>
          <Text mtmedium small primary right>
            Successfull
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default Commission;
