import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PROJECTS } from "../../utils/mock/projects.mock";

export default function DetailsProjectScreen({ route: { params } }) {
    const { employee:{name:nameEmployee}, project: { startingDate, endDate, name } } = params;
    const descrizioneProgetto = PROJECTS[name.toUpperCase()];

    return (
        <SafeAreaView style={styles.container}>
            <Text>DEVELOPER: {nameEmployee}</Text>
            <Text>PROJECT: {name}</Text>
            {startingDate && <Text>FROM: {startingDate}</Text>}
            {endDate && <Text>TO: {endDate}</Text>}
            {descrizioneProgetto && <><Text>INFO PROJECT:</Text><Text>{descrizioneProgetto}</Text></>}
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
