import {
  StyleSheet,
  SafeAreaView,
  Platform,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React from "react";
import Nav from "../components/Nav";
import { useNavigation } from "@react-navigation/native";

export default function Admin() {
  const navigation = useNavigation();
  const mover = (pagina) => {
    navigation.navigate(pagina);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Nav />
      <Text style={styles.etiqueta}> Pago</Text>
      <ScrollView style={styles.containerBody}>
        <TouchableWithoutFeedback onPress={() => mover("BuscarUsuarios")}>
          <View style={styles.menuUno}>
            <Text style={styles.etiqueta}> Usuarios</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => mover("AdminTarjetas")}>
          <View style={styles.menuUno}>
            <Text style={styles.etiqueta}> Tarjetas</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => mover("Estadisticas")}>
          <View style={styles.menuUno}>
            <Text style={styles.etiqueta}> Estadisticas</Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  containerBody: {
    marginHorizontal: 20,
    paddingHorizontal: 10,
    height: "100%",
    backgroundColor: "#fff",
  },
  menuUno: {
    width: "100%",
    height: 150,
    marginVertical: 10,
    backgroundColor: "#004BAB",
    borderRadius: 10,
    color: "#fffff",
    elevation: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  etiqueta: {
    color: "#ffffff",
    fontSize: 20,
  },
});
