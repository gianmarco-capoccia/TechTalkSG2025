import React, { useState } from "react";
import { Modal, View, Text, Image, Pressable, Button } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { cameraStyle } from "./cameraStyle";

export default function PhotoScreen() {
  const [isCameraVisible, setIsCameraVisible] = useState(true);
  const [permission, requestPermission] = useCameraPermissions();
  const [imagesList, setImagesList] = useState([]);
  const [mode, setMode] = useState("picture");
  const [facing, setFacing] = useState("back");
  const [recording, setRecording] = useState(false);
  const [uri, setUri] = useState(null);
  const cameraRef = React.useRef(null);

  if (!permission) {
    return null;
  }

  if (!permission.granted) {
    return (
      <View style={cameraStyle.container}>
        <Text style={{ textAlign: "center" }}>
          E' necessario fornire i permessi per accedere alla fotocamera
        </Text>
        <Button
          onPress={requestPermission}
          title="Autorizzazioni"
        />
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setUri(photo?.uri);
      handleCapture(photo?.uri);
      handleClose();
    }
  };

  const recordVideo = async () => {
    if (cameraRef.current) {
      if (recording) {
        setRecording(false);
        const video = await cameraRef.current.stopRecording();
        handleCapture(video?.uri);
        handleClose();
      } else {
        setRecording(true);
        await cameraRef.current.startRecording();
      }
    }
  };

  const toggleMode = () => {
    setMode(prevMode => (prevMode === "picture" ? "video" : "picture"));
  };

  const toggleFacing = () => {
    setFacing(prevFacing => (prevFacing === "back" ? "front" : "back"));
  };

  const handleCapture = uri => {
    let prevImages = imagesList;
    setImagesList(() => [...prevImages, uri]);
  };

  const handleClose = () => {
    setIsCameraVisible(false);
  };

  return (
    <View style={cameraStyle.viewContainer}>
      <>
        {imagesList && imagesList.length > 0 && (
          <View>
            {imagesList.map((uri, index) => (
              <Image
                key={index}
                source={{ uri }}
                style={{ width: 350, height: 550 }}
              />
            ))}
          </View>
        )}
      </>

      {isCameraVisible && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={true}
          onRequestClose={() => {}}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)"
            }}
          >
            <View
              style={{
                width: "90%",
                height: "70%",
                backgroundColor: "black",
                borderRadius: 10,
                padding: 10
              }}
            >
              <CameraView
                style={cameraStyle.camera}
                ref={cameraRef}
                mode={mode}
                facing={facing}
                mute={false}
                responsiveOrientationWhenOrientationLocked
              >
                <View style={cameraStyle.shutterContainer}>
                  <Pressable onPress={toggleMode}>
                    {mode === "picture" ? (
                      <AntDesign
                        name="picture"
                        size={32}
                        color="white"
                      />
                    ) : (
                      <Feather
                        name="video"
                        size={32}
                        color="white"
                      />
                    )}
                  </Pressable>

                  <Pressable
                    onPress={mode === "picture" ? takePicture : recordVideo}
                  >
                    {({ pressed }) => (
                      <View
                        style={[
                          cameraStyle.shutterBtn,
                          { opacity: pressed ? 0.5 : 1 }
                        ]}
                      >
                        <View
                          style={[
                            cameraStyle.shutterBtnInner,
                            {
                              backgroundColor:
                                mode === "picture" ? "white" : "red"
                            }
                          ]}
                        />
                      </View>
                    )}
                  </Pressable>

                  <Pressable onPress={toggleFacing}>
                    <FontAwesome6
                      name="rotate-left"
                      size={32}
                      color="white"
                    />
                  </Pressable>
                </View>
              </CameraView>
            </View>

            <Pressable
              onPress={handleClose}
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                backgroundColor: "white",
                padding: 10,
                borderRadius: 50
              }}
            >
              <Text style={{ fontSize: 18, color: "black" }}>X</Text>
            </Pressable>
          </View>
        </Modal>
      )}
    </View>
  );
}
