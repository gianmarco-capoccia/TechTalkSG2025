import React from "react";
import { FlatList, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { USERS } from "../../utils/mock/users.mock"


const Item = ({ id, name, navigation }) => (
    <Button
      title={name}
      onPress={() => navigation.navigate("Progetti", { employeeName: name })}
    />
  );

export default function EmployeesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={USERS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item name={item.name} navigation={navigation} />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
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
