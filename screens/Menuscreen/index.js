import React from "react";
import { Text, StyleSheet, View } from "react-native";

const MenuScreen = params => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingTxt}>Menu Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    justifyContent: "space-around",
  },
  headingTxt: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12,
  },
});
export default MenuScreen;
