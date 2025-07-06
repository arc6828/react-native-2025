import Card from "@/components/week3/Card";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function Travel() {
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingTop: 50 }}>
        <Text>Text of Week 3 </Text>
        <Card />        
      </View>
    </ScrollView>
  );
}
