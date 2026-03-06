// App.js
import React from "react";
import { View, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

import HomeScreen from "./screens/HomeScreen";
import AddCosplayScreen from "./screens/AddCosplayScreen";
import EditCosplayScreen from "./screens/EditCosplayScreen";
import AddEventScreen from "./screens/AddEventScreen";

const Stack = createStackNavigator();

function AppNavigator() {
  const { theme } = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Cosplay Tracker"
        screenOptions={{
          headerStyle: { backgroundColor: theme.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerRight: () => <ThemeToggle />,
          headerRightContainerStyle: { paddingRight: 16 },
        }}
      >
        <Stack.Screen
          name="Cosplay Tracker"
          component={HomeScreen}
          options={{ title: "🧵 Cosplay Expenditure Tracker" }}
        />
        <Stack.Screen
          name="Add Cosplay"
          component={AddCosplayScreen}
          options={{ title: "Add New Cosplay" }}
        />
        <Stack.Screen
          name="Edit Cosplay"
          component={EditCosplayScreen}
          options={{ title: "Edit Cosplay" }}
        />
        <Stack.Screen
          name="Add Event"
          component={AddEventScreen}
          options={{ title: "Add Upcoming Event" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  React.useEffect(() => {
    if (Platform.OS === "web") {
      document.body.style.overflow = "auto";
    }
  }, []);

  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}