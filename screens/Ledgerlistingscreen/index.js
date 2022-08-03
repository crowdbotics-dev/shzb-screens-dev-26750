import React, { useState } from "react";
import {
  Image,
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
} from "react-native";

const LedgerListingScreen = params => {
  const [todayHistory, setTodayHistory] = useState([
    {
      id: 1,
      title: "Sports Center",
      price: "$125.90",
      type: "debit",
    },
    {
      id: 2,
      title: "Shopping",
      price: "$552.68",
      type: "credit",
    },
    {
      id: 3,
      title: "Income",
      price: "$345.00",
      type: "credit",
    },
  ]);
  const [aprilHistory, setAprilHistory] = useState([
    {
      id: 1,
      title: "Sports Center",
      price: "$125.90",
      type: "debit",
    },
    {
      id: 2,
      title: "Shopping",
      price: "$552.68",
      type: "credit",
    },
    {
      id: 3,
      title: "Income",
      price: "$345.00",
      type: "credit",
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text>Current Balance</Text>
          <Text style={styles.currentBalance}>$35,559.00</Text>
          <Text>Bank Account: 0954 4543 2112 3116</Text>
        </View>
        <View>
          <Image
            resizeMode="contain"
            style={styles.withdrawImage}
            source={require("./assets/withdraw.png")}
          />
        </View>
      </View>
      <View style={styles.paletteContainer}>
        <View style={styles.selected}>
          <Text>Transactions</Text>
        </View>
        <View style={styles.unSelected}>
          <Text>Report</Text>
        </View>
        <View style={styles.unSelected}>
          <Text>Transfer</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.historyList}>
          <Text style={styles.historyDate}>TODAY's</Text>
          <FlatList
            data={todayHistory}
            renderItem={({ item }) => <HistoryItem transaction={item} />}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>
        <View style={styles.historyList}>
          <Text style={styles.historyDate}>April 01</Text>
          <FlatList
            scrollEnabled={false}
            data={aprilHistory}
            renderItem={({ item }) => <HistoryItem transaction={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const HistoryItem = ({ transaction }) => {
  const pricingTextColor = {
    color: transaction.type === "debit" ? "#EA4335" : "#05B417",
  };
  return (
    <View style={styles.historyItem}>
      <View style={styles.description}>
        <Text style={styles.titleText}>{transaction.title}</Text>
        <Text
          style={{
            color: "grey",
          }}>
          Invoice
        </Text>
      </View>
      <View style={styles.pricing}>
        {transaction.type === "debit" ? (
          <Text style={[styles.pricingText, pricingTextColor]}>- </Text>
        ) : (
          <Text style={[styles.pricingText, pricingTextColor]}>+ </Text>
        )}
        <Text style={[styles.pricingText, pricingTextColor]}>
          {transaction.price}
        </Text>
        <Image
          source={require("./assets/arrow.png")}
          style={styles.arrowIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginVertical: 20,
    backgroundColor: "#e6e6e6",
    paddingBottom: 10,
  },
  currentBalance: {
    fontSize: 36,
    marginVertical: 5,
  },
  withdrawImage: {
    width: 52,
    height: 73,
  },
  paletteContainer: {
    // width: '70%',
    height: 48,
    backgroundColor: "#F1F1F1",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 6,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  selected: {
    borderRadius: 10,
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "gray",
    elevation: 10,
  },
  unSelected: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
  },
  historyDate: {
    fontSize: 16,
    marginVertical: 10,
    color: "#9B9B9B",
    marginLeft: 20,
  },
  historyList: {
    marginVertical: 10,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: "#e6e6e6",
    borderRadius: 10,
    marginHorizontal: 20,
    shadowColor: "gray",
    elevation: 10,
    backgroundColor: "#fff",
  },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#e6e6e6",
    height: 80,
  },
  description: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 16,
    color: "#111112",
  },
  pricing: {
    marginRight: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pricingText: {
    fontSize: 16,
    color: "#111112",
    fontWeight: "bold",
  },
  arrowIcon: {
    marginLeft: 10,
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
});
export default LedgerListingScreen;
