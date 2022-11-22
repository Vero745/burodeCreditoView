import { ScrollView, Text, StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function Pago() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Elige como ingresar tu dinero</Text>
      <View>
        <TouchableWithoutFeedback> 
          <View style={styles.boton}>
          {/* <Image/>  */}
          <Text> Mercado</Text>
          
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback> 
          <View style={styles.boton}>
          {/* <Image/>  */}
          <Text> Mercado</Text>
          
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback> 
          <View style={styles.boton}>
          {/* <Image/>  */}
          <Text> Mercado</Text>
          
          </View>
        </TouchableWithoutFeedback>

      </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
container:{
  paddingTop: 55,
  paddingStart:40,
 
},
titulo:{
fontSize: 29,
textAlign: 'center',
}, 
boton:{
backgroundColor:"#004BAB",
width:"100%",
height:50,
marginVertical:7,

}


})