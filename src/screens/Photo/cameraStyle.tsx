import { StyleSheet } from "react-native";

export const cameraStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  viewContainer: { flex: 1, padding: 20, justifyContent: "center" },
  camera: {
    flex: 1,
    borderRadius: 10
  },
  shutterContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  shutterBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 80
  },
  shutterBtnInner: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: "white"
  }
});
