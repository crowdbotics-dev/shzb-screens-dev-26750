import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Image,
  FlatList,
  Pressable,
} from "react-native";

const SocialBlockedUsersScreen = params => {
  const [followers, setFollowers] = useState(4513);
  const [username, setUsername] = useState("");
  const [blockedUsers, setBlockedUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      profileImage: require("./assets/profile.png"),
    },
    {
      id: 2,
      name: "Cody Fisher",
      profileImage: require("./assets/profile.png"),
    },
    {
      id: 3,
      name: "Jenny Wilson",
      profileImage: require("./assets/profile.png"),
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Search</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setUsername(text)}
            value={username}
            placeholder="Search Username"
            placeholderTextColor="#9B9B9B"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Image
            source={require("./assets/Vector.png")}
            style={styles.searchIcon}
          />
        </View>
      </View>
      <View style={styles.follower_blocked}>
        <Text style={[styles.grey]}>{followers} Followers</Text>
        <Text style={[styles.bold, styles.black]}>Blocked Accounts</Text>
      </View>
      <View style={styles.frequentBar}>
        <Text style={[styles.fnt16, styles.bold, styles.grey]}>Frequently</Text>
      </View>
      <FlatList
        data={blockedUsers}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => <User user={item} />}
      />
    </SafeAreaView>
  );
};

const User = ({ user }) => {
  return (
    <View style={styles.userContainer}>
      <View style={styles.userInfo}>
        <Image source={user.profileImage} style={styles.profileImage} />
        <Text style={styles.username}>{user.name}</Text>
      </View>
      <Pressable style={styles.btnContainer}>
        <Text style={styles.btntext}>Unblock</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  header: {
    padding: 20,
    // flex: 1,
    height: 100,
  },
  inputContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 5,
  },
  inputText: {
    fontSize: 16,
    marginLeft: 20,
    color: "#111112",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    marginVertical: 10,
    width: "100%",
    height: 50,
  },
  searchIcon: {
    position: "absolute",
    right: 30,
    top: 35,
  },
  follower_blocked: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  frequentBar: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    backgroundColor: "#e6e6e6",
    marginVertical: 10,
  },
  fnt16: {
    fontSize: 16,
  },
  bold: {
    fontWeight: "bold",
  },
  grey: {
    color: "grey",
  },
  black: {
    color: "black",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  userInfo: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  profileImage: {
    borderRadius: 50,
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  username: {
    fontSize: 16,
    marginLeft: 20,
    color: "#111112",
  },
  btnContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  btntext: {
    fontSize: 17,
    color: "#12D790",
  },
});
export default SocialBlockedUsersScreen;
