<View style={styles.header}>
  <View style={styles.paletteContainer}>
    <View style={styles.unSelected}></View>
    <View style={styles.unSelected}></View>
    <View style={styles.unSelected}></View>
  </View>
  <Image source={require("./assets/3Dots.png")} style={styles.threeDots} />
</View>;


header: {
    paddingHorizontal: 20
  },
  paletteContainer: {
    flexDirection: "row",
    backgroundColor: "#F1F1F1",
    height: 45,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 5
  },
  selected: {
    backgroundColor: "#fff",
    height: "80%",
    flex: 1,
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    marginHorizontal: 5
  },
  unSelected: {
    height: "80%",
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#12D790",
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 10
  },
  threeDots: {
    alignSelf: "center",
    marginTop: 20
  },