import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { USERS } from "../../utils/mock/users.mock";
import { PAGES } from "../../utils/utils.data";

const Item = ({ employee, navigation }) => {
  const { name, role } = employee;
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate(PAGES.PROGETTI, { employee })}
    >
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemRole}>{role}</Text>
    </TouchableOpacity>
  )
};

export default function EmployeesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lista Dipendenti</Text>
      <FlatList
        data={USERS}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={({ item }) => <Item employee={item} navigation={navigation} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 15,
    color: "#333",
    textAlign: "center",
  },
  listContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
  },
  itemRole: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});
