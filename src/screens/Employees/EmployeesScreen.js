import React from "react";
import { FlatList, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { USERS } from "../../utils/mock/users.mock"
import { PAGES } from "../../utils/utils.data";


const Item = ({ employee, navigation }) => (
    <Button
      title={employee.name}
      onPress={() => navigation.navigate(PAGES.PROGETTI,{ employee })}
    />
  );

export default function EmployeesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={USERS}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={({ item }) => (
          <Item employee={item} navigation={navigation} />
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
