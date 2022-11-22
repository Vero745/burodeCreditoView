import { View ,StyleSheet, Text, Image } from 'react-native'
import React from 'react'

export default function Nav() {
  return (
    <View style={styles.backHeader}>
        <Image source={require('../assets/icon.png')} style={styles.imgHeader} />
        <Text style={styles.textHeader}>Consulta de buro de credito</Text>
      </View>
  )
}



const styles = StyleSheet.create({
    backHeader: {
        backgroundColor: '#004BAB',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        height: 60,
      },
      imgHeader: {
        width: '15%',
        height: '100%',
      },
      textHeader: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
        width:'75%',
      },
})