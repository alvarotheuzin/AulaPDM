import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Filmes(props) {

  const { nome, ano, diretor,tipo, capa } = props
  
  return (
    <View style={styles.container}>


      <Text style={styles.texto2}>Filmes</Text>

      <Image
        source={{
          uri: capa
        }}
        style={styles.imagem}

      />
      <Text style={styles.texto}>NOME: {nome}</Text>
      <Text style={styles.texto}>Ano: {ano}</Text>
      <Text style={styles.texto}>Diretor: {diretor}</Text>
      <Text style={styles.texto}>Tipo: {tipo}</Text>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    borderWidth: 5,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: 'yellow',

    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },

  texto: {
    fontSize: 15,
    fontWeight: "600",
    color: "white",
  },

  texto2: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    marginBottom: 10,
},

  imagem: {
    width: 200,
    height: 200,
    marginBottom: 10, 
    borderRadius: 20,
  },
})