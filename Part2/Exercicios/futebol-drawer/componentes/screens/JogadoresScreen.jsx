import React from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';

const jogadores = [
  { nome: 'Gabriel Barbosa', numero: 9, imagem: 'https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg' },
  { nome: 'Arrascaeta', numero: 14, imagem: 'https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg' },
  { nome: 'Everton Ribeiro', numero: 7, imagem: 'https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg' },
  { nome: 'David Luiz', numero: 23, imagem: 'https://i.pinimg.com/474x/98/79/9b/98799b86107a87b79dc9b15cf778fa4a.jpg' },
  { nome: 'Pedro', numero: 21, imagem: 'https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg' },
];

const JogadoresScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <View style={styles.playerCard}>
            <Image style={styles.image} source={{ uri: item.imagem }} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.nome}</Text>
              <Text style={styles.number}>Número: {item.numero}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 10,
  },
  playerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#bb86fc',
  },
  info: {
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  number: {
    fontSize: 14,
    color: '#cccccc',
  },
});

export default JogadoresScreen;
