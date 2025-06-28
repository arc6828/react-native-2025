import { Link, router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title="Go to Next Page" onPress={() => router.push("/page2")} />
      <Link
        href="/page2"
      >
        <Text >Go to Next Page</Text>
      </Link>
    </View>
  );
}
