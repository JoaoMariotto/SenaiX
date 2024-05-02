import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import MyButton from "../components/MyButton";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  return (
    <View style={style.container}>
      <Text>Sign Up</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 16,
  },

  title: {
    fontSize: 54,
    fontWeight: "700",
    width: 240,
    color: "#3D3D4D",
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#8a8787",
    borderRadius: 4,
    width: "100%",
  },

  input: {
    flex: 1,
    fontSize: 18,
  },
  erro: {
    color: "#DC1637",
    fontWeight: "400",
    textAlign: "center",
    marginVertical: 16,
  },
});
