import React from "react";
import { Text, StyleSheet, View, TextInput, Image } from "react-native";

const SearchBar = params => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputText}>Search</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUsername(text)}
        value={username}
        placeholder="Search Username"
        placeholderTextColor="#9B9B9B"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Image
        source={require("./assets/searchIcon.png")}
        style={styles.searchIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 5
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
    right: 30,
    top: 35
  }
});

export default SearchBar;
