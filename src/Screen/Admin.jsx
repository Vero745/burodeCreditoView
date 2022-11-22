import { StyleSheet, SafeAreaView, Platform, Text, View } from 'react-native'
import React from 'react'
import Nav from '../components/Nav'



export default function Admin() {
  return (
    <SafeAreaView style={styles.container}>
      <Nav />
      <View style={styles.containerBody}>
      <Text>Admin</Text>
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  containerBody:{
    marginHorizontal: 20,
    paddingHorizontal:10,
    backgroundColor:"#fff",    
  }
})