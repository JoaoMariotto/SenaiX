import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#DC1637",
        tabBarInactiveTintColor: "#AEAEB3",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={40}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="cars"
        component={Home}
        options={{
          title: "cars",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="car-outline"
              size={40}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="calendar"
        component={Home}
        options={{
          title: "cars",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="calendar-outline"
              size={40}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Home}
        options={{
          title: "profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-outline"
              size={40}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
