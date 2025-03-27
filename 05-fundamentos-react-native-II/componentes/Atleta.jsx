import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('window');

export default function Atleta(props) {

    const {nome, idade, numero, imagem} = props

  return (

    <View style={styles.container}>

      <Text style={styles.texto}>Atleta</Text>

      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>Idade: {idade}</Text>
      <Text style={styles.texto}>Numero: {numero}</Text>

      <Image
        source={{
            uri: 'https://i.pinimg.com/736x/6d/7a/bc/6d7abc9dbdd3e21201a69a5eec684ffb.jpg'
        }}      
        style={styles.image}
      />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderWidth: 5,
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        borderColor: '#f2f2f4',

        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
    },
    
    texto: {
        fontSize: 20,
        fontWeight: 600
    },

    image: {
        width: width * 0.9,
        height: width * 1.5,
        marginVertical: 10,
        borderRadius: 15,
      },
})