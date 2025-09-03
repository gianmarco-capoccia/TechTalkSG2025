import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen({ route }) {
  const { employeeName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profilo Utente</Text>
      <Text style={styles.text}>Nome utente: {employeeName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});
