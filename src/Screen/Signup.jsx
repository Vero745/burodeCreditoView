import {
  StyleSheet, View, Text, ScrollView, TextInput, Button, TouchableOpacity, Image
} from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Nav from '../components/Nav';

import { useNavigation } from '@react-navigation/native'

const url = 'http://192.168.1.70:3000/user/signup'
const icon = (<Icon name='user-alt' color='#6c6c6c' size={130} />)


export default function Signup() {
  const [nombre, setNombre] = useState();
  const [ap1, setAp1] = useState();
  const [ap2, setAp2] = useState();
  const [rfc, setRFC] = useState();
  const [direccion, setDireccion] = useState();
  const [ciudad, setCiudad] = useState();
  const [cp, setCp] = useState();
  const [estado, setEstado] = useState();
  const [region, setRegion] = useState();
  const [colonia, setColonia] = useState();
  const [correo, setCorreo] = useState();
  const [usuario, setUsuario] = useState();
  const [contrasenia, setContrasenia] = useState();
  const navigation = useNavigation();



  const agregar = () => {
    const obj = {
      name: nombre,
      ap1: ap1,
      ap2: ap2,
      rfc: rfc,
      direction: direccion,
      city: ciudad,
      postalCode: cp,
      state: estado,
      region: region,
      suburb: colonia,
      user: usuario,
      password: contrasenia,
      email: correo
    }

    const dataFetch = {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    }
    fetch(url, dataFetch)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        if (response.error){
          alert('El usuario ya existe ')
        }else{
          navigation.navigate('Login')
        }

      })
      .catch(error=>console.error(error))
  }

  return (
    <ScrollView style={styles.container}>


      <Nav />


      <View style={styles.forms}>

        <View style={styles.backUser}>
          {icon}
        </View>


        <Text style={styles.Title}>Registrarse</Text>


        <TextInput
          onChangeText={setNombre}
          style={styles.input}
          placeholder='Nombre(s)'
        />
        <TextInput
          onChangeText={setAp1}
          style={styles.input}
          placeholder='Primer Apellido '
        />
        <TextInput
          onChangeText={setAp2}
          style={styles.input}
          placeholder='Segundo Apellido'
        />
        <TextInput
          onChangeText={setRFC}
          style={styles.input}
          placeholder='RFC'
        />
        <TextInput
          onChangeText={setDireccion}
          style={styles.input}
          placeholder='Dirección'
        />
        <TextInput
          onChangeText={setCiudad}
          style={styles.input}
          placeholder='Ciudad'
        />
        <TextInput
          onChangeText={setCp}
          style={styles.input}
          placeholder='Codigo Postal'
        />

        <TextInput
          onChangeText={setEstado}
          style={styles.input}
          placeholder='Estado'
        />
        <TextInput
          onChangeText={setRegion}
          style={styles.input}
          placeholder='Region'
        />
        <TextInput
          onChangeText={setColonia}
          style={styles.input}
          placeholder='Colonia'
        />
        <TextInput
          onChangeText={setCorreo}
          style={styles.input}
          placeholder='Correo'
        />
        <TextInput
          onChangeText={setUsuario}
          style={styles.input}
          placeholder='Usuario'
        />
        <TextInput
          onChangeText={setContrasenia}
          style={styles.input}
          placeholder='Contraseña'
        />
        <TouchableOpacity
          style={styles.button}
          onPress={agregar}
        >
          <Text style={styles.customBtnText}>
            Registrarse
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
    paddingTop: 30,
    paddingBottom: 30,
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
    margin: 12,

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