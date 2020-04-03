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
import { CommissionContext, useCommissionContext } from "../../context";
import { CurrencyFormatter } from "../../utils";

const Commission = ({ navigation }) => {
  const [loadingBalance, setLoadingBalance] = useState(true);
  const [loadingHistory, setLoadingHistory] = useState(true);

  const commission = useCommissionContext();
  const {
    getCommissionWallet,
    getRecentCommissionHistory,
    history,
    commissionBalance,
    loading
  } = commission;

  useEffect(() => {
    if (commissionBalance === null) {
      getCommissionWallet();
      setLoadingBalance(false);
    }
  }, [commissionBalance]);
  useEffect(() => {
    if (history === null) getRecentCommissionHistory(7);
    setLoadingHistory(false);
  }, [history]);
  return (
    <Block background>
      <Header backTitle="Comission Activities" />
      <Block paddingHorizontal={SIZES.padding}>
        <Block flex={0} center middle>
          <Text small muted mtmedium>
            Commision Balance
          </Text>
          {loading && loadingBalance ? (
            <ActivityIndicator size="large" animating color={COLORS.primary} />
          ) : (
            <Text gray height={LINE_HEIGHTS.fourty_1} h1 mtregular>
              {"\u20A6 "}
              {CurrencyFormatter(commissionBalance)}
            </Text>
          )}
        </Block>

        <Block flex={0} marginVertical={30} center>
          <Button secondary width={150} height={50}>
            <Block center space="evenly" row>
              <Text middle h5 white>
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
          {loading || loadingHistory ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={history}
              keyExtractor={(item, index) => `item-${index}`}
              renderItem={({ item }) => {
                return (
                  <Block marginVertical={15} row space="between">
                    <Block row center>
                      <ImageIcon name="cashoutAlt" />
                      <Block marginLeft={15}>
                        <Text gray h6>
                          Cash Out
                        </Text>
                        <Text muted>date</Text>
                      </Block>
                    </Block>

                    <Block row right>
                      <Block>
                        <Text gray h6 right>
                          {CurrencyFormatter(98765467)}
                        </Text>
                        <Text primary right>
                          successfull
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
