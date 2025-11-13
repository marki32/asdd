import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Calendar = () => {
  const [date, setDate] = useState(new Date(2022, 10, 15));

  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dates = [12, 13, 14, 15, 16, 17, 18];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.month}>{`${month} ${year}`}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <MaterialIcons name="chevron-left" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="chevron-right" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.days}>
        {days.map((day) => (
          <Text key={day} style={styles.day}>{day}</Text>
        ))}
      </View>
      <View style={styles.dates}>
        {dates.map((d) => (
          <View key={d} style={[styles.dateContainer, d === 15 && styles.activeDate]}>
            <Text style={[styles.date, d === 15 && styles.activeDateText]}>{d}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    borderRadius: 24,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  month: {
    fontSize: 18,
    fontWeight: '600',
  },
  buttons: {
    flexDirection: 'row',
  },
  days: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  day: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  dates: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dateContainer: {
    padding: 8,
  },
  activeDate: {
    backgroundColor: '#D4FF93',
    borderRadius: 8,
  },
  date: {
    fontSize: 14,
  },
  activeDateText: {
    fontWeight: 'bold',
  },
});

export default Calendar;
