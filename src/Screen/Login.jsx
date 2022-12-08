import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import Nav from '../components/Nav'
import { API_URL } from "../utils/constants";

const url = `${API_URL}/user/login`;
const icon = <Icon name="user-alt" color="#6c6c6c" size={130} />;



export default function Login() {

  const [usuario, setUsuario] = useState();
  const [contrasenia, setContrasenia] = useState();
  const navigation = useNavigation();
  


  const agregar = async () => {
    const obj = {
      user: usuario,
      password: contrasenia
    }
    // console.log(obj)



    const data = {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    }
    fetch(url, data).then(response => response.json())
      .then(dataJson => {


        if (dataJson[0].idRol === "2") {
          // console.log(`usuario normal, id: '${dataJson[0].idPersona}'`)
          navigation.navigate('User', { idUser: dataJson[0].idRol })
        } else if (dataJson[0].idRol === "1") {
          // console.log(`usuario Administrador, id: '${dataJson[0].idPersona}'`)
          navigation.navigate('Admin', { idUser: dataJson[0].idRol })
        }
        // alert(`fin`)
      })
      .catch(function (err) {
        throw err
      })

  }




  return (
    <ScrollView style={styles.container}>

      <Nav />


      <View style={styles.forms}>

        <View style={styles.backUser}>
          {icon}
        </View>


        


        <Text style={styles.Title}>Iniciar Sesión</Text>

        <TextInput
          onChangeText={setUsuario}
          style={styles.input}
          placeholder='Usuario'
        // placeholderTextColor="#fff"
        />

        <TextInput
          onChangeText={setContrasenia}
          style={styles.input}
          placeholder='Contraseña'
          secureTextEntry={true}
        // placeholderTextColor="#fff"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={agregar}
        >
          <Text style={styles.customBtnText}>
            Ingresar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}




const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  forms: {
    margin: 40,
    alignItems: 'center',
    backgroundColor: '#acacac',
    paddingVertical: 30,
    borderRadius: 13,
  },
  backUser: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 150,
  },
  Title: {
    fontSize: 30,
    paddingTop: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    textAlign: 'center',
    color: '#7e7e7e',
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  button: {
    width: '80%',
    justifyContent: 'center',
    backgroundColor: '#01579B',
    borderRadius: 15,
  },
  customBtnText: {

    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    padding: 10,
  },
})