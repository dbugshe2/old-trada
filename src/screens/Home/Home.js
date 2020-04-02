import React, { useState } from "react";
import {
  Block,
  Card,
  Text,
  Header,
  ImageIcon,
  Input,
  Button,
  Swiper
} from "../../components";
import { SIZES, COLORS, LINE_HEIGHTS, LETTERSPACING } from "../../utils/theme";

const Home = ({ navigation }) => {
  return (
    <Block scroll background>
      <Header main shadow />
      <Block paddingTop={SIZES.padding} paddingBottom={SIZES.padding * 2}>
        <Swiper showPagination>
          {/* one */}
          <Block center middle width={SIZES.width}>
            <Text small muted mtmedium>
              Tmoni Wallet Balance
            </Text>
            <Text gray height={LINE_HEIGHTS.fourty_1} h1 mtregular>
              N25 ,000
            </Text>
            <Block
              marginTop={SIZES.padding}
              lightgray
              center
              radius={5}
              height={30}
              paddingHorizontal={SIZES.padding}
              row
            >
              <Text primary mtlight small marginHorizontal={SIZES.base}>
                Providus Bank
              </Text>
              <Text muted mtlight small spacing={LETTERSPACING.two_point_4}>
                9902046493
              </Text>
              <Button transparent paddingHorizontal={SIZES.padding}>
                <ImageIcon name="copy" />
              </Button>
            </Block>
          </Block>

          <Block center middle width={SIZES.width}>
            <Text small muted mtmedium>
              Commission Balance
            </Text>
            <Text gray height={LINE_HEIGHTS.fourty_1} h1 mtregular>
              N5 ,000
            </Text>
            <Block
              marginTop={SIZES.padding}
              lightgray
              center
              radius={5}
              height={30}
              paddingHorizontal={SIZES.padding}
              row
            >
              <Text primary mtlight small marginHorizontal={SIZES.base}>
                Providus Bank
              </Text>
              <Text muted mtlight small spacing={LETTERSPACING.two_point_4}>
                9902046493
              </Text>
              <Button transparent paddingHorizontal={SIZES.padding}>
                <ImageIcon name="copy" />
              </Button>
            </Block>
          </Block>
        </Swiper>
      </Block>
      {/* card */}
      <Block space="evenly" paddingHorizontal={SIZES.padding}>
        {/* two */}
        <Block>
          <Block
            space="evenly"
            row
            center
            paddingTop={30}
            paddingHorizontal={SIZES.padding * 2}
          >
            <Button
              center
              middle
              height={50}
              width={100}
              odd
              onPress={() => navigation.navigate("TransferToTmoni")}
            >
              <Block middle center row>
                <ImageIcon style={{}} name="sentAlt" />

                <Text mtmedium gray marginLeft={8}>
                  Send
                </Text>
              </Block>
            </Button>

            <Button
              center
              middle
              height={50}
              width={100}
              odd
              onPress={() => navigation.navigate("AddCashTab")}
            >
              <Block middle center row>
                <ImageIcon style={{}} name="recievedAlt" />

                <Text mtmedium gray marginLeft={8}>
                  Recieve
                </Text>
              </Block>
            </Button>
          </Block>
        </Block>

        {/* three */}
        <Block marginVertical={35}>
          <Button
            center
            middle
            radius={8}
            white
            shadow
            elevation={10}
            row
            height={150}
            onPress={() =>
              navigation.navigate("Store", { screen: "BuyInputs" })
            }
          >
            <Block
              paddingHorizontal={SIZES.padding}
              paddingVertical={SIZES.padding * 2}
              middle
              row
              center
            >
              <Block column>
                <Text gray mtregular h2>
                  Buy your inputs
                </Text>
                <Text left muted body>
                  Get inputs from leading agro companies Across the world at
                  guaranteed lowest price
                </Text>
              </Block>
              <ImageIcon style={{}} name="cart" />
            </Block>
          </Button>

          <Button
            marginVertical={25}
            center
            middle
            radius={8}
            white
            shadow
            elevation={10}
            row
            height={150}
            onPress={() =>  navigation.navigate("Store", { screen: "SellOutputs" })}
          >
            <Block
              paddingHorizontal={SIZES.padding}
              paddingVertical={SIZES.padding * 2}
              middle
              row
              center
            >
              <Block column>
                <Text gray mtregular h2>
                  Sell your Outputs
                </Text>
                <Text left muted body>
                  Get inputs from leading agro companies Across the world at
                  guaranteed lowest price
                </Text>
              </Block>
              <ImageIcon style={{}} name="basket" />
            </Block>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default Home;
