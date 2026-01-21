// app/_layout.tsx
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      {/* คุณสามารถตั้งค่าเฉพาะหน้าได้ที่นี่ */}
      <Stack.Screen name="index" options={{ title: 'หน้าหลัก' }} />
      <Stack.Screen name="profile/[id]" options={{ title: 'โปรไฟล์' }} />
    </Stack>
  );
}

