import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.gridIcon}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
      <Text style={styles.title}>Today's Reminders</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  gridIcon: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 12,
    height: 12,
    marginRight: 8,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'black',
    margin: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
