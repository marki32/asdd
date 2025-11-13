import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ReminderCard = ({ reminder }) => {
  const isImportant = reminder.important;

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{reminder.time}</Text>
      <View style={[styles.card, isImportant && styles.importantCard]}>
        <View style={[styles.iconContainer, isImportant && styles.importantIconContainer]}>
          <MaterialIcons name={reminder.icon} size={24} color={isImportant ? '#1C1C1E' : '#9CA3AF'} />
        </View>
        <View>
          <Text style={[styles.title, isImportant && styles.importantTitle]}>{reminder.title}</Text>
          <Text style={[styles.duration, isImportant && styles.importantDuration]}>{reminder.duration}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  time: {
    width: 64,
    textAlign: 'right',
    paddingRight: 16,
    color: '#9CA3AF',
    fontSize: 12,
    paddingTop: 12,
  },
  card: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  importantCard: {
    backgroundColor: '#D4FF93',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  importantIconContainer: {
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  title: {
    fontWeight: '600',
  },
  importantTitle: {
    color: '#1C1C1E',
  },
  duration: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  importantDuration: {
    color: 'rgba(28,28,30,0.6)',
  },
});

export default ReminderCard;
