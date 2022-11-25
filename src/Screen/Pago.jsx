import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const URL_METODO_PAGO_API = "http://192.168.0.117:3000/metodos/";
const IconMercadoP = <Icon name="cc-mastercard" color="#ffffff" size={100} />;
const IconPayPal = <Icon name="cc-paypal" color="#ffffff" size={100} />;
const IconCard = <Icon name="credit-card" color="#ffffff" size={100} />;

export default function Pago() {
  const [listaMetodosPago, setListaMetodosPago] = useState([]);

  useEffect(() => {
    //se ejecuta solo al renderizar por primera vez
    (async () => {
      const dataRow = await fetch(URL_METODO_PAGO_API);
      const datos = await dataRow.json();
      setListaMetodosPago(datos);
    })();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Elige como ingresar tu dinero</Text>
      <View>
        {listaMetodosPago
          ? listaMetodosPago.map((metodo, index) => {
              return (
                <TouchableWithoutFeedback>
                  <View style={styles.boton}>
                    {IconMercadoP}
                    <Text style={styles.etiqueta}> {metodo.nombrePago}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })
          : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 55,
    paddingStart: 40,
  },
  titulo: {
    fontSize: 29,
    textAlign: "center",
  },
  boton: {
    backgroundColor: "#004BAB",
    width: "100%",
    height: 150,
    marginVertical: 8,
    borderRadios: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
  },
  etiqueta: {
    color: "#ffffff",
    fontSize: 20,
  },
});
