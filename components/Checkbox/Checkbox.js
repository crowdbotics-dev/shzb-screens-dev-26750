const Checkbox = props => {
  return (
    <Pressable
      onPress={() => {
        props.setValue(!props.value);
      }}>
      <Image
        source={
          props.value
            ? require("./assets/checkboxIconActive.png")
            : require("./assets/checkboxIcon.png")
        }
      />
    </Pressable>
  );
};

const checkboxStyles = StyleSheet.create({});
