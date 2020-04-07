import React, { useState, useEffect } from "react";
import { Block, Text, Header, CommissionItem } from "../../components";
import { SIZES, COLORS } from "../../utils/theme";
import { FlatList } from "react-native";
import { useCommissionContext } from "../../context";
import { ActivityIndicator } from "react-native";

const CommissionHistory = () => {
  const [loading, setLoading] = useState(true);
  const [full, setFull] = useState(false);

  const commision = useCommissionContext();

  const { getCommissionHistory, fullHistory, historyCount } = commision;

  useEffect(() => {
    (async () => {
      setLoading(true);
      if (fullHistory.length < 1) {
        await getCommissionHistory(10, 0);
      }
      setLoading(false);
    })();
  }, []);

  const handleEndReached = async () => {
    if (fullHistory.length < historyCount) {
      setFull(false);
      return await getCommissionHistory(10, fullHistory.length);
    } else {
      setFull(true);
    }
  };
  return (
    <Block background>
      <Header backTitle="Your Activity" />
      <Block marginVertical={15} paddingHorizontal={SIZES.padding}>
        <Block>
          {loading ? (
            <ActivityIndicator animating size="large" color={COLORS.primary} />
          ) : (
            <FlatList
              data={fullHistory}
              keyExtractor={(item, index) => `item-${index}`}
              renderItem={({ item }) => {
                return (
                  <CommissionItem
                    amount={item.commission}
                    date={item.meta.createdAt}
                  />
                );
              }}
              onEndReached={() => handleEndReached()}
              onEndReachedThreshold={0.5}
            />
          )}
          {full && (
            <Text center mtmedium gray small>
              Thats all doc
            </Text>
          )}
        </Block>
      </Block>
    </Block>
  );
};

export default CommissionHistory;
