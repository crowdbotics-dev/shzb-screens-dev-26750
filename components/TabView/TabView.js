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
    width: "70%",
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
