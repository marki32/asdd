import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NoteCard = ({ note }) => {
  const isImportant = note.tags.includes('#work');

  return (
    <View style={[styles.card, isImportant && styles.importantCard]}>
      <View style={styles.header}>
        <View style={[styles.iconContainer, isImportant && styles.importantIconContainer]}>
          <MaterialIcons name={note.icon} size={20} color={isImportant ? '#1C1C1E' : '#9CA3AF'} />
        </View>
        <MaterialIcons name="favorite-border" size={20} color={isImportant ? '#1C1C1E' : '#9CA3AF'} />
      </View>
      <Text style={[styles.title, isImportant && styles.importantTitle]}>{note.title}</Text>
      <View style={styles.tags}>
        {note.tags.map((tag) => (
          <Text key={tag} style={[styles.tag, isImportant && styles.importantTag]}>{tag}</Text>
        ))}
      </View>
      <Text style={[styles.content, isImportant && styles.importantContent]}>{note.content}</Text>
      <View style={styles.footer}>
        <Text style={[styles.date, isImportant && styles.importantDate]}>{note.date}</Text>
        {isImportant && (
          <TouchableOpacity style={styles.arrowButton}>
            <MaterialIcons name="arrow-forward-ios" size={14} color="#D4FE72" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    flex: 1,
  },
  importantCard: {
    backgroundColor: '#D4FE72',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  importantIconContainer: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  importantTitle: {
    color: '#1C1C1E',
  },
  tags: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  tag: {
    fontSize: 12,
    backgroundColor: 'rgba(0,0,0,0.05)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
  },
  importantTag: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    color: '#1C1C1E',
  },
  content: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 8,
    flex: 1,
  },
  importantContent: {
    color: 'rgba(28,28,30,0.8)',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  importantDate: {
    color: 'rgba(28,28,30,0.6)',
  },
  arrowButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#1C1C1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NoteCard;
