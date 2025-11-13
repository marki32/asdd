import { View, Text, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.header}>
      <MaterialIcons name="widgets" size={24} color="black" />
      <ThemedText type="title">My Notes</ThemedText>
      <MaterialIcons name="refresh" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
});
