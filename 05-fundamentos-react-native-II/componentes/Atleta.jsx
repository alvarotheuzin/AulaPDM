import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';

export default function Atleta(props) {
  const { nome, idade, numero, imagem } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>Idade: {idade}</Text>
      <Text style={styles.texto}>Número: {numero}</Text>

      <Image
        source={{ uri: imagem }}
        style={styles.imagem}
      />
    </View>
  );
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
    fontWeight: "600",
  },

  imagem: {
    width: 200,
    height: 300,
    margin: 15,
    borderRadius: 15,
  },
});
