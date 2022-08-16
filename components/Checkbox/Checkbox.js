const Checkbox = props => {
  return (
    <Pressable
      onPress={() => {
        props.setValue(!props.value);
      }}
      style={[checkboxStyles.container, props.style]}>
      <Image
        source={
          props.value
            ? require("./assets/checkboxIconActive.png")
            : require("./assets/checkboxIcon.png")
        }
        style={[checkboxStyles.checkbox]}
      />
    </Pressable>
  );
};

const checkboxStyles = StyleSheet.create({
  container: {
    height: 20,
    width: 20
  },
  checkbox: {
    height: "100%",
    width: "100%"
  }
});
