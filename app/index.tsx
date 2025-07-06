import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

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

      {/* <Text>Flexbox Menu</Text>  
      <FlexboxMenu /> */}

      <Link href="/test-components" style={styles.link}>
        <Text style={styles.linkText}>Test Components</Text>
      </Link>


    </View>
  );
}

const styles = StyleSheet.create({
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
