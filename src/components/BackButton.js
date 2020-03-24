import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ImageIcon from "./primary/ImageIcon";
import Text from "./primary/Text";
import Block from './primary/Block';

const BackButton = ({ backTitle }) => {
  const navigation = useNavigation();
  return (
    <Block row>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <ImageIcon name="back" />
      </TouchableOpacity>
        <Text backTitle>{backTitle && backTitle}</Text>
    </Block>
  );
};

export default BackButton;
