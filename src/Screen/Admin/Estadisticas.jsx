import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "../../components/Nav";

export default function Estadisticas() {
  return (
    <SafeAreaView>
      <Nav />
      <Text>Estadisticas</Text>
    </SafeAreaView>
  );
}
