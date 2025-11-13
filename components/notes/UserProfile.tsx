import { View, Text, Image, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';

export default function UserProfile() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSBf9BkGrE4sTV37n2DCjBrmrCif9_aIDP5aRb1BO8_PiilGautOEGykBcnzkF3b4pLbXH1D3fW4gMuqhl5mtl0eThFJIMaQHmshmj_Xzatt01EyGb2-nGCF3j_0xeX5xHfzBLrKKKFCh8BctwxOWE_DJ8zc2uSbGtL1Ue8qjRrWdknLeiCRU_X7ZSipV8vpal26YTDidPRH1cTtluIlWTtHxVQK8AIadVyGEnrt5KovXNAm53P1Jk9jobW3K04R0MTYMGdaAuVTk' }}
        style={styles.avatar}
      />
      <View>
        <ThemedText style={styles.greeting}>Hi, Good Morning</ThemedText>
        <ThemedText style={styles.name}>Jacobe</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  greeting: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
