const User = ({ user }) => {
  return (
    <View style={userStyles.userContainer}>
      <View style={userStyles.userInfo}>
        <Image source={user.profileImage} style={userStyles.profileImage} />
        <Text style={userStyles.username}>{user.name}</Text>
      </View>
      <Text style={userStyles.ammountText}>-${user.ammount}</Text>
    </View>
  );
};

const userStyles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
    marginHorizontal: 20,
    justifyContent: "space-between"
  },
  userInfo: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  profileImage: {
    borderRadius: 50,
    width: 70,
    height: 70,
    resizeMode: "contain"
  },
  username: {
    fontSize: 16,
    marginLeft: 20,
    color: "#111112"
  },
  ammountText: {
    fontSize: 17,
    color: "#EA4335",
    fontWeight: "bold"
  }
});
