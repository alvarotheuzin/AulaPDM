import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';
import Jogador from './Jogador';

export default function Time(props) {
  const { nome, anoFundacao, mascote, imagem, jogadores } = props;

  return (
    <Card style={styles.card}>
      <Card.Title 
        title={nome} 
        subtitle={`Fundado em ${anoFundacao}`} 
        titleStyle={styles.title} 
        subtitleStyle={styles.subtitle}
      />
      <Card.Content>
        <Text style={styles.mascote}>Mascote: {mascote}</Text>
      </Card.Content>
      <Image source={{ uri: imagem }} style={styles.imagemTime} />
      <Card.Actions>
        <Text style={styles.jogadoresTitle}>Jogadores:</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={jogadores}
          keyExtractor={(item) => item.nome}
          renderItem={({ item }) => (
            <Jogador 
              nome={item.nome} 
              numero={item.numero}
              imagem={item.imagem} 
            />
          )}
        />
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 15,
    backgroundColor: '#1e293b',
    borderRadius: 15,
    paddingBottom: 10,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#facc15',
  },
  subtitle: {
    fontSize: 16,
    color: '#cbd5e1',
  },
  mascote: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e2e8f0',
    marginBottom: 10,
  },
  imagemTime: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  jogadoresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#facc15',
    marginLeft: 10,
  }
});
