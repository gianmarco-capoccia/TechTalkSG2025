import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PAGES } from "../../utils/utils.data";

const ProjectItem = ({ project, employee, navigation }) => {
  const { name, startingDate, endDate } = project;
  return (
    <TouchableOpacity
      style={styles.projectCard}
      onPress={() =>
        navigation.navigate(PAGES.DETTAGLI_PROGETTO, { employee, project })
      }
    >
      <Text style={styles.projectName}>{name.toUpperCase()}</Text>
      {startingDate && (
        <Text style={styles.projectDates}>
          da: {startingDate} {endDate ? `→ al: ${endDate}` : ""}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default function ProjectsScreen({ route, navigation }) {
  const { employee } = route.params;
  const { name, role, email, projects } = employee;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.employeeTitle}>{name.toUpperCase()}</Text>
      <View style={styles.employeeCard}>
        {role && (
          <View style={styles.infoRow}>
            <Text style={styles.label}>ROLE:</Text>
            <Text style={styles.value}>{role}</Text>
          </View>
        )}
        {email && (
          <View style={styles.infoRow}>
            <Text style={styles.label}>EMAIL:</Text>
            <Text style={styles.value}>{email}</Text>
          </View>
        )}
      </View>
      <Text style={styles.projectsTitle}>PROGETTI</Text>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={({ item }) => (
          <ProjectItem project={item} employee={employee} navigation={navigation} />
        )}
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      />
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
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  employeeTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#222",
    marginBottom: 15,
    textAlign: "center",
  },
  employeeCard: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    alignSelf: "center",
    marginBottom: 20,
  },
  infoRow: {
    marginBottom: 15,
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
  projectsTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
    marginBottom: 12,
    textAlign: "center",
  },
  projectCard: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  projectName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    marginBottom: 6,
  },
  projectDates: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
  },
  backButton: {
    position: "absolute",
    bottom: 20,
    left: "5%",
    width: "100%",
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
