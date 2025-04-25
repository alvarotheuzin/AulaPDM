import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Card, Avatar, Text } from 'react-native-paper';

export default function Jogador(props) {
  const { nome, numero, imagem } = props;

  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <Avatar.Image source={{ uri: imagem }} size={60} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.nome}>{numero} - {nome}</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#334155',
    borderRadius: 10,
    margin: 10,
    padding: 8,
    elevation: 3,
    width: 200,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textContainer: {
    marginLeft: 12,
    flexShrink: 5,
  },
  nome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f8fafc',
  },
});
