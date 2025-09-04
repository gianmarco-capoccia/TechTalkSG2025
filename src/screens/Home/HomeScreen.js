import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { INFO_OPEN_REPLY } from "../../utils/utils.data";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../../assets/images/open_reply.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.description}>{INFO_OPEN_REPLY}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 28,
    width: "90%",
    alignItems: "center", 
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  logo: {
    width: 200, 
    height: 100, 
    marginBottom: 0,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#4B5563",
    textAlign: "center",
  },
});
