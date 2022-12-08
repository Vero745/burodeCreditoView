import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import Nav from "../../components/Nav";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Usuarios() {
  return (
    <SafeAreaView>
      <Nav />
      <Text style={styles.Titulo}>Usuarios</Text>
      <View style={styles.container}>
        <TextInput placeholder="RFC" style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.customBtnText}>Buscar</Text>
        </TouchableOpacity>
      </View>
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
  input: {
    textAlign: "center",
    fontSize: 20,
    width: "80%",
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "#01579B",
    borderRadius: 10,
  },
  customBtnText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
});
