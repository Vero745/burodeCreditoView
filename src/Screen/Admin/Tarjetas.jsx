import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "../../components/Nav";

export default function Tarjetas() {
  return (
    <SafeAreaView>
      <Nav />
      <Text style={styles.Titulo}>Tarjetas</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginHorizontal: 10,
    marginVertical: 10,
    fontSize: 30,
    alignItems: "center",
  },
  Titulo: {
    width: "100%",
    textAlign: "center",
    fontSize: 30,
    marginBottom: 30,
  },
});
