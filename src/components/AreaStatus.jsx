import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function AreaStatus() {
    return (
        <View style={styles.containerStatus}>
            <View style={styles.green}>
                <Text style={styles.text}>0-10</Text>
            </View>
            <View style={styles.orange}>
                <Text style={styles.text}>0-10</Text>
            </View>
            <View style={styles.red}>
                <Text style={styles.text}>0-10</Text>
            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    containerStatus: {
        marginTop: 20,
        marginBottom: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    green: {
        backgroundColor: '#48CFB2',
        width: '33%',
        borderRadius: 3,
    },
    orange: {
        backgroundColor: '#FFCE4B',
        width: '33%',
        borderRadius: 3,
    },
    red: {
        backgroundColor: '#FA6C6C',
        width: '33%',
        borderRadius: 3,
    },
    text:{
        textAlign: 'center',
    }
})