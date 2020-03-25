import React, { Component } from "react";
import { Dropdown as DropdownType } from "react-native-material-dropdown";
import { SIZES, COLORS } from "../utils/theme";

const Dropdown = props => {
  return (
    <DropdownType
      {...props}
      pickerStyle={{}}
      itemTextStyle={{
        fontFamily: "robotoRegular",
        fontSize: SIZES.h6,
        color: COLORS.muted
      }}
      baseColor={COLORS.muted}
      textColor={COLORS.gray}
      itemColor={COLORS.gray}
      containerStyle={{
        padding: 0,
        paddingHorizontal: SIZES.base * 2,
        marginVertical: SIZES.base,
        borderWidth: 1,
        borderRadius: SIZES.cardRadius,
        borderColor: COLORS.muted,
        height: 63
      }}
    />
  );
};
export default Dropdown;
