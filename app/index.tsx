import FlexboxMenu from "@/components.tsx/FlexboxMenu";
import { Link, router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

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

      <Text>Flexbox Menu</Text>  
      <FlexboxMenu />

      <Link href="/flexbox/ex01" style={styles.link}>
        <Text style={styles.linkText}>1</Text>
      </Link>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 24,
  },
  link: {
    margin: 16,
    padding: 16,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
  linkText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
