import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  ScrollView
} from "react-native";

const BanksFilter = () => {
  const [bankName, setBankName] = useState("");
  const [banks, setBanks] = useState([]);
  useEffect(() => {
    setBanks([
      {
        name: "Bank name",
        image: require("./assets/bank1.png"),
        checked: true
      },
      {
        name: "Bank name",
        image: require("./assets/bank2.png"),
        checked: false
      },
      {
        name: "Bank name",
        image: require("./assets/bank3.png"),
        checked: false
      },
      {
        name: "Bank name",
        image: require("./assets/bank1.png"),
        checked: false
      },
      {
        name: "Bank name",
        image: require("./assets/bank2.png"),
        checked: false
      },
      {
        name: "Bank name",
        image: require("./assets/bank3.png"),
        checked: false
      }
    ]);
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Search</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setBankName(text)}
            value={bankName}
            placeholder="Search Bank Name"
            placeholderTextColor="#9B9B9B"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Image
            source={require("./assets/searchIcon.png")}
            style={styles.searchIcon}
          />
        </View>
        <TabView tabTitles={["Choose Bank"]} selected={0} />
        <View style={styles.banksList}>
          {banks.map((bank, index) => (
            <Bank key={index} bank={bank} />
          ))}
        </View>
        <View style={styles.button}>
          <Button buttonText={"Proceed"} />
        </View>
      </ScrollView>
    </View>
  );
};

const Bank = ({ bank }) => {
  return (
    <View style={styles.bank}>
      <Image source={bank.image} />
      <Text style={styles.bankName}>{bank.name}</Text>
      <Image
        source={
          bank.checked
            ? require("./assets/checkboxIconActive.png")
            : require("./assets/checkboxIcon.png")
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 20
  },
  inputText: {
    fontSize: 16,
    marginLeft: 20,
    color: "#111112"
  },
  input: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    marginVertical: 10,
    width: "100%",
    height: 50
  },
  searchIcon: {
    position: "absolute",
    right: 25,
    top: 50
  },
  banksList: {
    marginHorizontal: 30
  },
  bank: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomColor: "#F0F2F7",
    borderBottomWidth: 1
  },
  bankName: {
    flex: 1,
    marginLeft: 20
  },
  button: {
    marginTop: 100
  }
});

export default BanksFilter;

const TabView = ({ tabTitles, selected }) => {
  return (
    <View style={tabViewStyles.paletteContainer}>
      {tabTitles.map((title, index) => (
        <View
          style={
            index === selected
              ? tabViewStyles.selected
              : tabViewStyles.unSelected
          }
          key={index}>
          <Text>{title}</Text>
        </View>
      ))}
    </View>
  );
};

const tabViewStyles = StyleSheet.create({
  paletteContainer: {
    width: 150,
    height: 48,
    backgroundColor: "#E4E4E4",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 6,
    marginVertical: 10,
    marginHorizontal: 20
  },
  selected: {
    borderRadius: 10,
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "gray",
    elevation: 10
  },
  unSelected: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E4E4E4",
    borderRadius: 10
  }
});

const Button = params => {
  const btnStyle = {
    backgroundColor: params.outline ? "#fff" : "#000",
    borderColor: params.outline ? "#000" : "#fff",
    borderWidth: 1
  };
  const btnText = {
    color: params.outline ? "#000" : "#fff"
  };
  const pinned = {
    flex: 1,
    justifyContent: "flex-end"
  };
  return (
    <View
      style={[buttonStyles.btnContainer, params.stickToBottom ? pinned : null]}>
      <Pressable style={[buttonStyles.btn, btnStyle]} onPress={params.onPress}>
        <Text style={[buttonStyles.btnText, btnText]}>{params.buttonText}</Text>
        <View style={styles.childrenContainer}>{params.children}</View>
      </Pressable>
    </View>
  );
};

const buttonStyles = StyleSheet.create({
  btnContainer: {
    paddingHorizontal: 40,
    justifyContent: "center",
    marginVertical: 20
  },
  btn: {
    backgroundColor: "black",
    height: 50,
    width: "100%",
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    elevation: 10,
    flexDirection: "row"
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  childrenContainer: {
    justifyContent: "center",
    alignItems: "center"
  }
});
