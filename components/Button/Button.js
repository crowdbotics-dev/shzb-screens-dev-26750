const Button = ({ onPress, buttonText }) => {
  return (
    <View style={buttonStyles.btnContainer}>
      <Pressable style={buttonStyles.btn} onPress={onPress}>
        <Text style={buttonStyles.btnText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

const buttonStyles = StyleSheet.create({
  btnContainer: {
    padding: 30,
    paddingTop: 10,
    paddingHorizontal: 40,
    justifyContent: "center",
    marginTop: 20
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
    elevation: 10
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});
