import React from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, Text } from 'react-native';
import Header from '@/components/reminders/Header';
import Calendar from '@/components/reminders/Calendar';
import ReminderCard from '@/components/reminders/ReminderCard';

const mockReminders = [
  {
    id: '1',
    time: '9 am',
    icon: 'photo-camera',
    title: 'Instagram Content Plan for Begginer',
    duration: '9:00am to 9:50am',
    important: true,
  },
  {
    id: '2',
    time: '10 am',
    icon: 'notes',
    title: 'Job Interview ques & ans.',
    duration: '10:00am to 10:50am',
    important: false,
  },
  {
    id: '3',
    time: '12 pm',
    icon: 'design-services',
    title: 'Some rules for Ux Ui designs',
    duration: '11:00am to 12:30pm',
    important: true,
  },
  {
    id: '4',
    time: '1 pm',
    icon: 'apps',
    title: 'Best iOS apps for making cool user interfaces',
    duration: '1:00pm to 2:00pm',
    important: false,
  },
];

export default function CalendarScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Calendar />
      <Text style={styles.title}>Scheduled Reminders:</Text>
      <FlatList
        data={mockReminders}
        renderItem={({ item }) => <ReminderCard reminder={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  list: {
    paddingHorizontal: 16,
  },
});
