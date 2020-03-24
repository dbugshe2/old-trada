import React from "react";
import { View, Text } from "react-native";
import { Header, Block, TabedView } from "../../components";
import EnterBio from "./EnterBio";
import EnterLocation from "./EnterLocation";
import SetPassword from "./SetPassword";
import EnterPhysical from "./EnterPhysical";
import { SIZES } from "../../utils/theme";
import { AuthContext } from "../../context/auth/AuthState";

const Registration = ({ navigation }) => {
  const views = [
    { id: 0, viewContent: () => <EnterBio /> },
    {
      id: 1,
      viewContent: () => <EnterLocation />
    },
    { id: 2, viewContent: () => <EnterPhysical /> },
    { id: 3, viewContent: () => <SetPassword /> }
  ];
  return (
    <AuthContext.Consumer>
      {authContext => (
        <Block background paddingHorizontal={SIZES.padding}>
          <Header backTitle="" />
          <Block>
            <TabedView
              onComplete={() => authContext.login('aiufnv')}
              scroll
              views={views}
              steps={4}
            />
          </Block>
        </Block>
      )}
    </AuthContext.Consumer>
  );
};

export default Registration;
