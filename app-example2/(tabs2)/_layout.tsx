import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(home)" />
      <Tabs.Screen name="ant" />
      <Tabs.Screen name="bird" />
      <Tabs.Screen name="cat" />
    </Tabs>
  );
}
