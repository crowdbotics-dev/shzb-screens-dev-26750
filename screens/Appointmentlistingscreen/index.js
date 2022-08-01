import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';

const AppointmentListScreen = params => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: 'Appointment',
      date: '17 June 2022',
      time: '12:00 AM',
      image: require('./assets/crowdbotics.png'),
    },
    {
      id: 2,
      name: 'Appointment',
      date: '17 May 2022',
      time: '02:00 AM',
      image: require('./assets/crowdbotics.png'),
    },
    {
      id: 3,
      name: 'Appointment',
      date: '17 April 2022',
      time: '12:00 AM',
      image: require('./assets/crowdbotics.png'),
    },
    {
      id: 4,
      name: 'Pelican Steve',
      date: '17 March 2022',
      time: '12:00 AM',
      image: require('./assets/crowdbotics.png'),
    },
    {
      id: 5,
      name: 'Appointment',
      date: '17 March 2022',
      time: '12:00 AM',
      image: require('./assets/crowdbotics.png'),
    },
    {
      id: 6,
      name: 'Appointment',
      date: '17 March 2022',
      time: '12:00 AM',
      image: require('./assets/crowdbotics.png'),
    },
    {
      id: 7,
      name: 'Appointment',
      date: '17 March 2022',
      time: '12:00 AM',
      image: require('./assets/crowdbotics.png'),
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Appointments</Text>
      </View>
      <FlatList
        style={styles.list}
        data={appointments}
        keyExtractor={appointment => appointment.id.toString()}
        renderItem={({ item }) => <Appointment item={item} />}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const Appointment = ({ item }) => {
  return (
    <View style={styles.appointmentContainer}>
      <View style={styles.imgContainer}>
        <Image source={item.image} style={styles.img} />
      </View>
      <View style={styles.desContainer}>
        <Text>{item.name}</Text>
        <View style={styles.timings}>
          <Text style={styles.timingText}>{item.date}</Text>
          <Text style={styles.timingText}>,</Text>
          <Text style={styles.timingText}>{item.time}</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 2,
    marginVertical: 12,
  },
  list: {
    padding: 10,
    paddingTop: 0,
    marginHorizontal: 20,
  },
  listContainer: {
    margin: 0, // backgroundColor: '#f1f1f1',
  },
  appointmentContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#e6e6e6',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#ddd',
    height: 80,
    width: 80,
  },
  desContainer: {
    width: '70%',
    justifyContent: 'space-between',
    height: '60%',
    alignItems: 'flex-start',
  },
  timings: {
    flexDirection: 'row',
  },
  timingText: {
    color: 'grey',
  },
});
export default AppointmentListScreen;
