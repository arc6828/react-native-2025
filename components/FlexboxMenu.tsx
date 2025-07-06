import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function FlexboxMenu() {
  return (
    <View style={styles.container}>
      <Link href="/flexbox/ex01" style={styles.link}>
        <Text style={styles.linkText}>1</Text>
      </Link>
      <Link href="/flexbox/ex02" style={styles.link}>
        <Text style={styles.linkText}>2</Text>
      </Link>
      <Link href="/flexbox/ex03" style={styles.link}>
        <Text style={styles.linkText}>3</Text>
      </Link>
      <Link href="/flexbox/ex04" style={styles.link}>
        <Text style={styles.linkText}>4</Text>
      </Link>
      <Link href="/flexbox/ex05" style={styles.link}>
        <Text style={styles.linkText}>5</Text>
      </Link>
      <Link href="/flexbox/ex06" style={styles.link}>
        <Text style={styles.linkText}>6</Text>
      </Link>
      <Link href="/flexbox/ex07" style={styles.link}>
        <Text style={styles.linkText}>7</Text>
      </Link>
      <Link href="/flexbox/ex08" style={styles.link}>
        <Text style={styles.linkText}>8</Text>
      </Link>
      <Link href="/flexbox/ex09" style={styles.link}>
        <Text style={styles.linkText}>9</Text>
      </Link>
      <Link href="/flexbox/ex10" style={styles.link}>
        <Text style={styles.linkText}>10</Text>
      </Link>
      <Link href="/flexbox/ex11" style={styles.link}>
        <Text style={styles.linkText}>11</Text>
      </Link>
      <Link href="/flexbox/ex12" style={styles.link}>
        <Text style={styles.linkText}>12</Text>
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
    margin: 5,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
  linkText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
