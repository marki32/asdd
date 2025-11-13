import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('NOTES');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'NOTES' && styles.activeTab]}
        onPress={() => setActiveTab('NOTES')}
      >
        <Text style={[styles.tabText, activeTab === 'NOTES' && styles.activeTabText]}>NOTES</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'IMPORTANT' && styles.activeTab]}
        onPress={() => setActiveTab('IMPORTANT')}
      >
        <Text style={[styles.tabText, activeTab === 'IMPORTANT' && styles.activeTabText]}>IMPORTANT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F3F4F6',
    borderRadius: 999,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 999,
  },
  activeTab: {
    backgroundColor: '#D4FE72',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9CA3AF',
  },
  activeTabText: {
    color: '#1C1C1E',
  },
});

export default Tabs;
