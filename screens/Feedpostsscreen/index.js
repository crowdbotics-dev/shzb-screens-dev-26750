import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native';

const PostsFeedScreen = params => {
  const [posts, setPosts] = useState([
    {
      id: '1',
      user: {
        name: 'Username',
        image: require('./assets/profile1.png'),
      },
      caption:
        'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec',
      images: [require('./assets/post1.png')],
      likes: 56,
      comments: 6,
    },
    {
      id: '2',
      user: {
        name: 'Username',
        image: require('./assets/profile2.png'),
      },
      caption:
        'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec',
      images: [require('./assets/post2.png')],
      likes: 56,
      comments: 6,
    },
  ]);
  return (
    <ScrollView style={styles.container}>
      {posts.map((post, index) => (
        <PostView post={post} />
      ))}
    </ScrollView>
  );
};

const PostView = ({ post }) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image source={post.user.image} style={styles.profileImage} />
        <Text style={styles.username}>{post.user.name}</Text>
        <Image source={require('./assets/menu.png')} style={styles.menuIcon} />
      </View>
      <Image source={post.images[0]} style={styles.postImage} />
      <View style={styles.postFooter}>
        <View style={styles.footerSmallblock1}>
          <Image
            source={require('./assets/like.png')}
            style={styles.likeIcon}
          />
          <Text style={styles.footerText}>{post.likes}</Text>
          <Image
            source={require('./assets/comment.png')}
            style={styles.commentIcon}
          />
          <Text style={styles.footerText}>{post.comments}</Text>
        </View>
        <View style={styles.threeDots}>
          <Image source={require('./assets/3Dots.png')} />
        </View>
        <View style={styles.footerSmallblock2}>
          <Image
            source={require('./assets/chat.png')}
            style={styles.chatIcon}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postContainer: {
    margin: 10,
    marginHorizontal: 20,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // justifyContent: 'space-between',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  username: {
    fontSize: 14,
    color: 'grey',
    textAlign: 'left',
    marginLeft: 10,
    flex: 1,
    fontWeight: 'bold',
  },
  menuIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  postImage: {
    // width: '100%',
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 10,
  },
  postFooter: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  threeDots: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerSmallblock1: {
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flex: 1,
  },
  footerSmallblock2: {
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flex: 1,
  },
  commentIcon: {
    marginLeft: 20,
  },
  footerText: {
    fontSize: 12,
    color: 'grey',
    marginBottom: 10,
    marginLeft: 5,
  },
});
export default PostsFeedScreen;
