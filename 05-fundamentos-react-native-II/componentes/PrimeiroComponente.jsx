import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PrimeiroComponente() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>PrimeiroComponente</Text>
    </View>
  )
}

const styles = StyleSheet.create({ 
    container: {
        backgroundColor: 'white',
        padding: 20,
        borderWidth: 10,
        borderColor: '#f2f2f4',
        borderRadius: 10,
        marginBottom: 20,
        
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
    },
    texto: {
        fontSize: 20,
        fontWeight: 600
    }
})