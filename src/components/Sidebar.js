import React, { useContext } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerView
} from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';
import Block from "./primary/Block";
import Text from "./primary/Text";
import Button from "./primary/Button";
import { Image } from "react-native";
import { AuthContext } from "../context/auth/AuthContext";
import { SIZES } from "../utils/theme";
import ImageIcon from './primary/ImageIcon';

const Sidebar = props => {
  const auth = useContext(AuthContext);
  const { logout, firstName, lastName, profileImage } = auth;
  const navigation = useNavigation();
  return (
    <Block  space="between">
      <Block scroll>
        <Block height={166} center marginVertical={SIZES.padding * 2} space="evenly">
          <Image
            source={{
              uri: profileImage
            }}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
          <Text h5 gray mtmedium>{firstName} {lastName}</Text>
          <Button secondary height={18} paddingHorizontal={SIZES.base} paddingHorizontal={SIZES.padding}
          onPress={() => navigation.navigate("ProfileTab")}
          >
            <Text small white center mtmedium>
              Edit Profile
            </Text>
          </Button>
        </Block>
        <Block flex={2}>
          <DrawerItemList {...props} />
        </Block>
      </Block>
      <DrawerItem  label={() => <Text mtregular body gray>Logout</Text>} {...props} icon={({ focused, color, size }) => <ImageIcon name="logout" /> } onPress={() => logout()} />
    </Block>
  );
};

export default Sidebar;
