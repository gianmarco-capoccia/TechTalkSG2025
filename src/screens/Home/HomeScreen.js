import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import {USERS} from "../../mock/users.mock" 
import { SafeAreaView } from "react-native-safe-area-context";

const Item = ({ id, name, navigation }) => (
  // <View style={styles.item}>
  //   <Text style={styles.name}>{name}</Text>
  // </View>

    <Button
        title={name}
        onPress={() => navigation.navigate("Profile", { employeeName: name })}
      />
);

export default function HomeScreen({ navigation }) {
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

    // <View style={styles.container}>
    //   <Text style={styles.text}>Dipendenti Reply : </Text>
    
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  name: {
    fontSize: 16,
  },
});
