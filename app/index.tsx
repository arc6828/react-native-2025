import FlexboxMenu from "@/components/FlexboxMenu";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>

      <Text>Flexbox Menu</Text>
      <FlexboxMenu />

      <Link href="/test-components" style={styles.link}>
        <Text style={styles.linkText}>Test Components</Text>
      </Link>
      <Link href="/test-greeting" style={styles.link}>
        <Text style={styles.linkText}>Test Greeting</Text>
      </Link>
      <Link href="/travel" style={styles.link}>
        <Text style={styles.linkText}>Travel</Text>
      </Link>
      <Link href="/your-health" style={styles.link}>
        <Text style={styles.linkText}>Your Health</Text>
      </Link>
      <Link href="/todolist" style={styles.link}>
        <Text style={styles.linkText}>Todo List</Text>
      </Link>
      <Link href="/location" style={styles.link}>
        <Text style={styles.linkText}>Location</Text>
      </Link>
      <Link href="/book" style={styles.link}>
        <Text style={styles.linkText}>Book</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    margin: 10,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
