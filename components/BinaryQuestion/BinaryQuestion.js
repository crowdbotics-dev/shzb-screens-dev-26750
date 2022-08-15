const BinaryQuestion = props => {
  return (
    <View style={binaryQuestionStyles.questionContainer}>
      <Text style={binaryQuestionStyles.questionText}>{props.question}</Text>
      <View style={binaryQuestionStyles.checkboxContainer}>
        <Pressable onPress={() => props.setValue(!props.value)}>
          <Image
            source={
              props.value
                ? require("./assets/checkboxIconActive.png")
                : require("./assets/checkboxIcon.png")
            }
            style={binaryQuestionStyles.checkbox}
          />
        </Pressable>
        <Text style={binaryQuestionStyles.questionText}>Yes</Text>
        <Pressable onPress={() => props.setValue(!props.value)}>
          <Image
            source={
              !props.value
                ? require("./assets/checkboxIconActive.png")
                : require("./assets/checkboxIcon.png")
            }
            style={binaryQuestionStyles.checkbox}
          />
        </Pressable>
        <Text style={binaryQuestionStyles.questionText}>No</Text>
      </View>
    </View>
  );
};

const binaryQuestionStyles = StyleSheet.create({
  questionContainer: {
    marginVertical: 10
  },
  questionText: {
    fontSize: 14,
    color: "#464D4E"
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "flex-start",
    width: "50%"
  },
  checkbox: {
    width: 20,
    height: 20,
    marginHorizontal: 10
  }
});
