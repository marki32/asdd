import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import Header from '@/components/add-note/Header';
import NoteForm from '@/components/add-note/NoteForm';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import useNoteStore from '@/store/noteStore';
import { router } from 'expo-router';

export default function AddScreen() {
  const addNote = useNoteStore((state) => state.addNote);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);

  const handleSave = () => {
    const newNote = {
      id: Date.now().toString(),
      icon: 'notes',
      title,
      tags,
      content,
      date: new Date().toLocaleDateString(),
    };
    addNote(newNote);
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
      </View>
      <NoteForm
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        tags={tags}
        setTags={setTags}
      />
      <ThemedView style={styles.keyboardPlaceholder}>
        <ThemedText>Keyboard/Toolbar</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
  },
  saveButton: {
    fontSize: 16,
    fontWeight: '600',
    color: '#D4FE72',
  },
  keyboardPlaceholder: {
    height: 250,
    backgroundColor: '#2D2D2D',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});
