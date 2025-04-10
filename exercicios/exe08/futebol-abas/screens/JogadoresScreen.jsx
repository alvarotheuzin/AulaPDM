import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Card, Avatar, Text } from 'react-native-paper';

const jogadores = [
  {
    nome: "Gabriel Barbosa",
    numero: 9,
    imagem: "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg"
  },
  {
    nome: "Arrascaeta",
    numero: 14,
    imagem: "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg"
  },
  {
    nome: "Everton Ribeiro",
    numero: 7,
    imagem: "https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg"
  },
  {
    nome: "David Luiz",
    numero: 23,
    imagem: "https://i.pinimg.com/474x/98/79/9b/98799b86107a87b79dc9b15cf778fa4a.jpg"
  },
  {
    nome: "Pedro",
    numero: 21,
    imagem: "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg"
  },
];

export default function JogadoresScreen() {
  return (
    <FlatList
      data={jogadores}
      contentContainerStyle={{ padding: 10 }}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <View style={styles.container}>
            <Avatar.Image source={{ uri: item.imagem }} size={60} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.nome}> {item.numero} - {item.nome}</Text>
            </View>
          </View>
        </Card>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#334155',
    borderRadius: 10,
    marginBottom: 10,
    padding: 8,
    elevation: 3,
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
