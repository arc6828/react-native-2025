import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function Profile() {
  const { id } = useLocalSearchParams(); // ดึงค่า id จาก URL

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>User ID คือ: {id}</Text>
    </View>
  );
}