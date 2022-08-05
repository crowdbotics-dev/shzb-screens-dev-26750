<View style={styles.buttonsContainer}>
  <Pressable style={styles.button1}>
    <Text style={styles.btnText1}>Confirm</Text>
  </Pressable>
  <Pressable style={styles.button2}>
    <Text style={styles.btnText2}>Cancel</Text>
  </Pressable>
</View>;


buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 40
  },
  button1: {
    backgroundColor: "black",
    borderRadius: 10,
    height: 50,
    width: 145,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  button2: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 145,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  btnText1: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  btnText2: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold"
  }
