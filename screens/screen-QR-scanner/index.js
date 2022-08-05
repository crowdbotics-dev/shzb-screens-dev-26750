import React from "react";
import { StyleSheet, View } from "react-native";

const QRScannerScreen = params => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("./assets/qrcode.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default QRScannerScreen;
