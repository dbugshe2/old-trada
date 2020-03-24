import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Text from "./primary/Text";
import Block from "./primary/Block";
import BackButton from "./BackButton";
import { SIZES } from "../utils/theme";

const Header = props => {
  const {
    renderLeft,
    title,
    backTitle,
    renderRight,
    onPressLeft,
    onPressRight
  } = props;
  const navigation = useNavigation();
  return (
    <View style={styles.contain}>
      <View
        style={styles.contentLeft}
        onPress={onPressLeft}
      >
        {(renderLeft && renderLeft()) || (
          <BackButton backTitle={backTitle && backTitle} />
        )}
      </View>
      {title && ( <Text style={styles.contentCenter}>
          <Text gray size={20}>
            {title}
          </Text>
        </Text>)}
       
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  contain: {
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentLeft: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "90%",
  },
  contentCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  contentRight: {
    justifyContent: "center",
    alignItems: "flex-end",
    paddingLeft: 10,
    paddingRight: 20,
    height: "100%"
  },
  right: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
