import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { homePageStyle } from "./screens/Home/Home.Style";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Screens
import HomeScreen from "./screens/Home/HomeScreen";
import EmployeesScreen from "./screens/Employees/EmployeesScreen";
import EmployeeProjectsScreen from "./screens/EmployeeProjects/EmployeeProjectsScreen";
import PhotoScreen from "./screens/Photo/PhotoScreen";
import { PAGES, TITLES } from "./utils/utils.data";
import DetailsProjectScreen from "./screens/DetailsProject/DetailsProjectScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  const getTabMenuIcon = (route, focused, color, size) => {
    let iconName;

    if (route.name === PAGES.HOME) {
      iconName = focused ? "home" : "home-outline";
    }

    if (route.name === PAGES.DIPENDENTI) {
      iconName = focused ? "people" : "people-outline";
    }

    if (route.name === PAGES.PHOTO) {
      iconName = focused ? "camera" : "camera-outline";
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
        name={PAGES.HOME}
        component={HomeScreen}
        options={{ title: TITLES.HOME }}
      />
      <Tab.Screen
        name={PAGES.DIPENDENTI}
        component={EmployeesScreen}
        options={{ title: TITLES.DIPENDENTI }}
      />
      <Tab.Screen
        name={PAGES.PHOTO}
        component={PhotoScreen}
        options={{ title: TITLES.PHOTO }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={homePageStyle.topSafeArea} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="MainTabs"
            component={MainTabs}
          />
          <Stack.Screen
            name={PAGES.PROGETTI}
            component={EmployeeProjectsScreen}
            options={{ title: TITLES.PROGETTI }}
          />
          <Stack.Screen
            name={PAGES.DETTAGLI_PROGETTO}
            component={DetailsProjectScreen}
            options={{ title: TITLES.DETTAGLI_PROGETTO }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
