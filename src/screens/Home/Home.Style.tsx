import { StyleSheet } from "react-native";

export const homePageStyle = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333"
  },
  tabBar: {
    backgroundColor: "#fff",
    height: 70,
    bottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingBottom: 20
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: "600"
  }
});
