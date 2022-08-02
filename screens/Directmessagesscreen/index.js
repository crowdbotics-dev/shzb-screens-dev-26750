import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';

const DirectMessagesScreen = params => {
  const [message, setMessage] = useState('');
  const [user1, setUser1] = useState({
    name: 'User1',
    image: require('./assets/profile1.png'),
    isOnline: true,
  });
  const [user2, setUser2] = useState({
    name: 'Username',
    image: require('./assets/profile2.png'),
    isOnline: true,
  });
  const [conversation, setConversation] = useState([
    {
      id: 1,
      sender: user1,
      text: 'lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      sentTime: '12:00 PM',
    },
    {
      id: 2,
      sender: user2,
      text: 'lorem ipsum dolor sit amet',
      sentTime: '01:15 PM',
    },
    {
      id: 3,
      sender: user2,
      text: 'lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      sentTime: '01:15 PM',
    },
    {
      id: 4,
      sender: user1,
      text: 'lorem ipsum dolor sit amet',
      sentTime: '01:15 PM',
    },
    {
      id: 5,
      sender: user2,
      text: 'lorem ipsum dolor sit amet',
      sentTime: '01:15 PM',
    },
    {
      id: 6,
      sender: user1,
      text: 'lorem ipsum dolor sit amet',
      sentTime: '01:15 PM',
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerImage}>
          <Image source={user2.image} style={styles.headerImage} />
          {(user2.isOnline && (
            <Image
              source={require('./assets/online.png')}
              style={styles.activityIconHeader}
            />
          )) ||
            null}
        </View>
        <View style={styles.profileName}>
          <Text style={styles.profileNameText}>{user2.name}</Text>
        </View>
        <View style={styles.icons}>
          <Image source={require('./assets/phone.png')} />
          <Image source={require('./assets/video.png')} />
        </View>
      </View>
      <ScrollView style={styles.body}>
        {conversation.map((message, index) => (
          <ConversationElement message={message} />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.camera}>
          <Image
            source={require('./assets/camera.png')}
            style={styles.cameraIcon}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message"
            onChangeText={text => setMessage(text)}
            value={message}
            autoCorrect={false}
            autoCapitalize="none"
            autoFocus={false}
          />
          <Image
            source={require('./assets/smiley.png')}
            style={styles.smileyIcon}
          />
          <Image
            source={require('./assets/voice.png')}
            style={styles.voiceIcon}
          />
        </View>
        <View style={styles.send}>
          <Image
            source={require('./assets/send.png')}
            style={styles.sendIcon}
          />
        </View>
      </View>
    </View>
  );
};
const ConversationElement = ({ message }) => {
  const boxAlignment = {
    flexDirection: message.sender.name == 'User1' ? 'row' : 'row-reverse',
  };
  const messageTextContainer = {
    marginLeft: message.sender.name == 'User1' ? 20 : 0,
    marginRight: message.sender.name == 'User1' ? 0 : 20,
    backgroundColor: message.sender.name == 'User1' ? '#FCF1D6' : '#F9D8D9',
  };
  return (
    <View style={[styles.messageContainer, boxAlignment]}>
      <View style={styles.profileImageContainer}>
        <Image source={message.sender.image} style={styles.profileImage} />
        {(message.sender.isOnline && (
          <Image
            source={require('./assets/online.png')}
            style={styles.activityIcon}
          />
        )) ||
          null}
      </View>
      <View style={[styles.messageTextContainer, messageTextContainer]}>
        <Text style={styles.messageText}>{message.text}</Text>
        <Text style={styles.messageTime}>{message.sentTime}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 20,
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    height: 50,
  },
  headerImage: {
    flex: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileName: {
    flex: 2,
  },
  profileNameText: {
    fontSize: 16,
  },
  icons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  activityIconHeader: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    position: 'absolute',
    right: 20,
    top: 25,
  },
  body: {
    flex: 1,
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    paddingLeft: 15,
    borderRadius: 10,
    backgroundColor: '#F1F1F1',
  },
  smileyIcon: {
    position: 'absolute',
    right: 40,
    top: 10,
    opacity: 0.5,
  },
  voiceIcon: {
    top: 14,
    right: 15,
    position: 'absolute',
    opacity: 0.5,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'flex-start',
    marginVertical: 20,
  },
  messageTextContainer: {
    minHeight: 70,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
    width: '70%',
  },
  messageText: {
    lineHeight: 20,
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  activityIcon: {
    position: 'absolute',
    right: 0,
    top: 40,
  },
  messageTime: {
    position: 'absolute',
    right: 5,
    bottom: -20,
    color: 'grey',
    fontSize: 12,
  },
});
export default DirectMessagesScreen;
