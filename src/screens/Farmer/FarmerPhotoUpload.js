import React, { useState } from "react";
import { Block, Text, Header, Input, Button, Dropdown } from "../../components";
import { SIZES } from "../../utils/theme";
import { Image } from "react-native";

const FarmerPhotoUpload = ({ navigation }) => {
  return (
    <Block background>
      <Header backTitle />

      <Block flex={1} marginVertical={10} paddingHorizontal={SIZES.padding}>
        <Text mtmedium gray h5 marginVertical={5}>
          Make sure farmers photo is not blurry.
        </Text>
        <Block scroll>
          <Block center marginTop={80} flex={0}>
            <Image
              source={{
                uri: "https://api.adorable.io/avatars/100/tradaAvatar.png"
              }}
              style={{ width: 200, height: 200, borderRadius: 100 }}
            />
            <Block center marginVertical={35} flex={0}>
              <Text h6 gray>
                Is this clear enough?
              </Text>
              <Text paddingHorizontal={80} marginTop={10} small center muted>
                Make sure your face is clear enough and the photo is not blurry
              </Text>
            </Block>
          </Block>

          <Block marginVertical={20} flex={0}>
            <Button onPress={() => navigation.navigate("FarmerSummary")}>
              <Text white center h6>
                Yes use this one
              </Text>
            </Button>
          </Block>
          <Block flex={0}>
            <Button secondary>
              <Text white center h6>
                Retake photo
              </Text>
            </Button>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default FarmerPhotoUpload;
