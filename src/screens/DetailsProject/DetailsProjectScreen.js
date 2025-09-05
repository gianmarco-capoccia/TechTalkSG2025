import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PROJECTS } from "../../utils/mock/projects.mock";

export default function DetailsProjectScreen({ route: { params }, navigation }) {
  const {
    project: { name: projectName },
  } = params;

  const descrizioneProgetto = PROJECTS[projectName.toUpperCase()];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.projectTitle}>{projectName.toUpperCase()}</Text>
        <View style={styles.card}>
          {descrizioneProgetto && (
            <View style={styles.infoRow}>
              <Text style={styles.value}>{descrizioneProgetto}</Text>
            </View>
          )}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>INDIETRO</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContent: {
    padding: 20,
    alignItems: "center",
    paddingBottom: 120,
  },
  projectTitle: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    color: "#222",
    textAlign: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 25,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 20,
  },
  infoRow: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#666",
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
  },
  backButton: {
    position: "absolute",
    bottom: 20,
    left: "5%",
    width: "90%",
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: "#8B8B8B",
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
