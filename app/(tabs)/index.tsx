import React from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import Header from '@/components/notes/Header';
import UserProfile from '@/components/notes/UserProfile';
import Tabs from '@/components/notes/Tabs';
import NoteCard from '@/components/notes/NoteCard';
import useNoteStore from '@/store/noteStore';

export default function HomeScreen() {
  const notes = useNoteStore((state) => state.notes);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <UserProfile />
      <Tabs />
      <FlatList
        data={notes}
        renderItem={({ item }) => <NoteCard note={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  list: {
    paddingHorizontal: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
});
