const SymptomLevel = ({ level, setLevel }) => {
  let currentLevel = level;
  let width = 20;
  let height = 20;
  let radius = 5;
  const giveDimentions = () => {
    return {
      width: (width += 4),
      height: (height += 4),
      borderRadius: (radius += 1)
    };
  };
  return (
    <View style={symptomLevelStyles.container}>
      {[1, 2, 3, 4, 5].map((level, index) => (
        <Pressable
          onPress={() => {
            setLevel(level);
            currentLevel = level;
          }}
          key={index}
          style={[
            symptomLevelStyles.check,
            giveDimentions(),
            level === currentLevel ? symptomLevelStyles.fill : null
          ]}></Pressable>
      ))}
    </View>
  );
};

const symptomLevelStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10
  },
  check: {
    borderWidth: 2,
    borderColor: "#C4C4C4",
    marginHorizontal: 5
  },
  fill: {
    backgroundColor: "#C4C4C4"
  }
});
