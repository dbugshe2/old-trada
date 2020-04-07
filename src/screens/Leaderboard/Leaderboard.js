import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Block, Text, ImageIcon, Header, LeaderboardItem } from "../../components";
import { SIZES } from "../../utils/theme";
import { data } from "../../data/index";

const Leaderboard = () => {
  return (
    <Block background>
      <Header title="LeaderBoard" />
      <Block paddingHorizontal={SIZES.base}>
        <Block flex middle>
          {/* <FlatList
            data={data}
            keyExtractor={(item, index) => `item-${index}`}
            renderItem={({ item }) => {
              return (
               <LeaderboardItem />
              );
            }}
          /> */}
          <Text h2 mtregular secondary center>Coming Soon...</Text>
        </Block>
      </Block>
    </Block>
  );
};

export default Leaderboard;
