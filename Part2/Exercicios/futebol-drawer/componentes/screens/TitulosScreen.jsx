import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const titulos = [
  { nome: 'Campeonato Brasileiro', anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020] },
  { nome: 'Copa Libertadores da América', anos: [1981, 2019, 2022] },
  { nome: 'Copa do Brasil', anos: [1990, 2006, 2013, 2022, 2024] },
  { nome: 'Supercopa do Brasil', anos: [2020, 2021, 2025] },
];

const TitulosScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={titulos}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <View style={styles.titleCard}>
            <Text style={styles.title}>{item.nome}</Text>
            <Text style={styles.years}>Anos: {item.anos.join(', ')}</Text>
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
  titleCard: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#bb86fc',
    marginBottom: 4,
  },
  years: {
    fontSize: 14,
    color: '#cccccc',
  },
});

export default TitulosScreen;
