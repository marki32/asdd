import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NoteForm = ({ title, setTitle, content, setContent, tags, setTags }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="photo-camera" size={24} color="black" />
        </View>
        <TextInput
          style={styles.title}
          value={title}
          onChangeText={setTitle}
          placeholder="Title"
        />
      </View>
      <TextInput
        style={styles.content}
        value={content}
        onChangeText={setContent}
        placeholder="Enter your note here..."
        multiline
      />
      <View style={styles.tagsContainer}>
        <Text style={styles.tagsLabel}>Tags:</Text>
        <View style={styles.tags}>
          {tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
              <TouchableOpacity onPress={() => setTags(tags.filter((t) => t !== tag))}>
                <MaterialIcons name="close" size={14} color="#71717a" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#D4FE72',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    flex: 1,
  },
  content: {
    fontSize: 14,
    color: '#71717a',
    marginBottom: 16,
    minHeight: 160,
  },
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagsLabel: {
    fontSize: 14,
    fontWeight: '500',
    marginRight: 8,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 12,
    color: '#71717a',
    marginRight: 4,
  },
});

export default NoteForm;
