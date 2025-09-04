import React from "react";
import { FlatList, StyleSheet, Button,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PAGES } from "../../utils/utils.data";

const Item = ({project,employee, navigation}) =>{
  const {name} = project;
  return (
    <Button
      title={name}
      onPress={() => navigation.navigate(PAGES.DETTAGLI_PROGETTO,{employee, project})}
    />
  )};

export default function ProjectsScreen({ route, navigation }) {
  const { employee } = route.params;
  const { name, projects } = employee;

  return (
    <SafeAreaView style={styles.container}>
      <Text>DIPENDENTE : {name}</Text>
      <Text>PROGETTI : </Text>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={({ item }) => (
          <Item project={item} employee={employee} navigation={navigation} />
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
