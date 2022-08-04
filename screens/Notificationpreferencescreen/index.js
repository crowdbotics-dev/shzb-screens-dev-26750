import React, { useState } from "react";
import { Text, StyleSheet, View, Switch, ScrollView } from "react-native";

const NotificationPreferenceScreen = params => {
  const [pushNotifications, setPushNotifications] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [loremIpsum, setLoremIpsum] = useState(false);
  return (
    <View style={styles.container}>
      <TabView tabTitles={["Preferences", "Extended"]} selected={0} />
      <ScrollView>
        <View style={styles.preferenceContainer}>
          <Text style={styles.preferenceTitle}>System Notifications</Text>
          <View style={styles.notificationsContainer}></View>
          <NotificationTile
            name={"Push Notifications"}
            value={pushNotifications}
            onValueChange={() => setPushNotifications(!pushNotifications)}
          />
          <NotificationTile
            name={"Email Notifications"}
            value={emailNotifications}
            onValueChange={() => setEmailNotifications(!emailNotifications)}
          />
        </View>
        <View style={styles.preferenceContainer}>
          <Text style={styles.preferenceTitle}>Group Notifications</Text>
          <View style={styles.notificationsContainer}></View>
          <NotificationTile
            name={"SMS Notifications"}
            value={smsNotifications}
            onValueChange={() => setSmsNotifications(!smsNotifications)}
          />
          <NotificationTile
            name={"Sed elit ipsum"}
            value={loremIpsum}
            onValueChange={() => setLoremIpsum(!loremIpsum)}
          />
        </View>
        <View style={styles.preferenceContainer}>
          <Text style={styles.preferenceTitle}>Group Notifications</Text>
          <View style={styles.notificationsContainer}></View>
          <NotificationTile
            name={"Sed elit ipsum"}
            value={loremIpsum}
            onValueChange={() => setLoremIpsum(!loremIpsum)}
          />
          <NotificationTile
            name={"Sed elit ipsum"}
            value={loremIpsum}
            onValueChange={() => setLoremIpsum(!loremIpsum)}
          />
        </View>
        <View style={styles.preferenceContainer}>
          <Text style={styles.preferenceTitle}>Group Notifications</Text>
          <View style={styles.notificationsContainer}></View>
          <NotificationTile
            name={"Sed elit ipsum"}
            value={loremIpsum}
            onValueChange={() => setLoremIpsum(!loremIpsum)}
          />
          <NotificationTile
            name={"Sed elit ipsum"}
            value={loremIpsum}
            onValueChange={() => setLoremIpsum(!loremIpsum)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2"
  },
  preferenceContainer: {
    marginVertical: 10
  },
  preferenceTitle: {
    fontSize: 16,
    marginLeft: 20,
    marginVertical: 5,
    color: "grey"
  },
  notificationsContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20
  }
});
export default NotificationPreferenceScreen;

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

const NotificationTile = ({ name, value, onValueChange }) => {
  return (
    <View style={notificationTileStyles.container}>
      <Text style={notificationTileStyles.text}>{name}</Text>
      <Switch value={value} onValueChange={() => onValueChange()} />
    </View>
  );
};

const notificationTileStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6"
  },
  text: {
    fontSize: 16
  }
});
