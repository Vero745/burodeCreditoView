import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "../components/Nav";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native'
import Admin from "./Admin";
import Alert from "../components/Alert";


const iconPago = <Icon name="payments" color="#ffffff" size={100} />;
const iconConsulta = (
  <IconMaterial name="newspaper-plus" color="#ffffff" size={100} />
);
const iconHistorial = <IconEntypo name="archive" color="#ffffff" size={100} />;






export default function User() {
const navigation = useNavigation(); 
const mover = (pagina) => {
  navigation.navigate(pagina);
};
 const alertConsulta = () => {
  

 };



return (
    <SafeAreaView style={styles.container}>
      <Nav />
      <ScrollView style={styles.containerBody}>
        <TouchableWithoutFeedback onPress={() => mover("Pago")}> 
          <View style={styles.menuUno} >
            {iconPago}
            <Text style={styles.etiqueta}> Pago</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => alert()}> 
        <View style={styles.menuUno}>
          {iconConsulta}
          <Text style={styles.etiqueta}> Nueva Consulta </Text>
        </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => mover("Historial")}> 
        <View style={styles.menuUno}>
          {iconHistorial}
          <Text style={styles.etiqueta}> Historial </Text>
        </View>
        </TouchableWithoutFeedback>
        <Alert/>


      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
    height: "100%",
  },
  containerBody: {
    marginHorizontal: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    height: "100%",
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
