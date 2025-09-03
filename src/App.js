import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { homePageStyle } from "./screens/styles/homePageStyle";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/Home/HomeScreen";
import ProfileScreen from "./screens/Profile/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  const getTabMenuIcon = (route, focused, color, size) => {
    let iconName;

    if (route.name === "Home") {
      iconName = focused ? "home" : "home-outline";
    }

    return (
      <Ionicons
        name={iconName}
        size={size}
        color={color}
      />
    );
  };

  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <SafeAreaView style={homePageStyle.topSafeArea} />
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) =>
                getTabMenuIcon(route, focused, color, size),
              tabBarStyle: homePageStyle.tabBar,
              tabBarLabelStyle: homePageStyle.tabLabel,
              tabBarActiveTintColor: "#0077b3",
              tabBarInactiveTintColor: "#999999",
              headerShown: false
            })}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
            />
            <Tab.Screen
              name="Dipendenti"
              component={ProfileScreen}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
