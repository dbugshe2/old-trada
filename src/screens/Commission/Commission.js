import React, { useState, useContext, useEffect } from "react";
import { Block, Text, Header, ImageIcon, Button } from "../../components";
import { SIZES, COLORS, LINE_HEIGHTS, LETTERSPACING } from "../../utils/theme";
import {
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import {
  CommissionContext,
  useCommissionContext
} from "../../context/commission/CommissionContext";
import { CurrencyFormatter } from "../../utils";

const Commission = ({ navigation }) => {
  const [loadingBalance, setLoadingBalance] = useState(true);
  const [loadingHistory, setLoadingHistory] = useState(true);

  const commission = useCommissionContext();
  const {
    getCommissionWallet,
    getRecentCommissionHistory,
    history,
    commissionBalance
  } = commission;

  useEffect(() => {
    (async () => {
      setLoadingBalance(true);
      await getCommissionWallet();
      setLoadingBalance(false);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      setLoadingHistory(true);
      await getRecentCommissionHistory(7);
      setLoadingHistory(false);
    })();
    return setLoadingHistory(true);
  }, []);
  return (
    <Block background>
      <Header backTitle="Comission Activities" />
      <Block paddingHorizontal={SIZES.padding}>
        <Block flex={0} center middle>
          <Text small muted mtmedium>
            Commision Balance
          </Text>
          {loadingBalance ? (
            <ActivityIndicator size="large" animating color={COLORS.primary} />
          ) : (
            <Text gray height={LINE_HEIGHTS.fourty_1} h1 mtregular>
              {CurrencyFormatter(commissionBalance)}
            </Text>
          )}
        </Block>

        <Block flex={0} marginVertical={30} center>
          <Button
            secondary
            width={138}
            height={35}
            onPress={() => navigation.navigate("CashOut")}
          >
            <Block center space="evenly" row>
              <Text middlebody white>
                Cash out
              </Text>
              <ImageIcon name="cashout" />
            </Block>
          </Button>
        </Block>

        <Block flex={0} space="between" row>
          <Text muted>Your Activity</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("CommissionAct")}
          >
            <Text secondary>View All</Text>
          </TouchableOpacity>
        </Block>

        <Block>
          {loadingHistory ? (
            <ActivityIndicator />
          ) : (
            <FlatList
            showsVerticalScrollIndicator={false}
              data={history}
              keyExtractor={(item, index) => `item-${index}`}
              renderItem={({ item }) => {
                return (
                  <Block marginVertical={15} style={{borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: COLORS.lightgray, }} row space="between">
                    <Block row center middle>
                      <ImageIcon name="cashoutAlt" />
                      <Block marginLeft={15}>
                        <Text mtmedium gray h6>
                        Cash out
                        </Text>
                        <Text mtmedium body muted>
                                    {new Date(item.meta.createdAt).toLocaleString()}
                        </Text>
                      </Block>
                    </Block>

                    <Block row right>
                      <Block>
                        <Text gray h6 right>
                          {CurrencyFormatter(item.commission)}
                        </Text>
                        <Text mtmedium small primary right>
                          Successfull
                        </Text>
                      </Block>
                    </Block>
                  </Block>
                );
              }}
            />
          )}
        </Block>
      </Block>
    </Block>
  );
};

export default Commission;
