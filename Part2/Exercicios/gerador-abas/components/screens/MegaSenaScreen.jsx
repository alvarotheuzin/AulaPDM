import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button, Text, Card, Title, Divider } from 'react-native-paper';

function gerarJogo() {
  const dezenas = new Set();
  while (dezenas.size < 6) {
    dezenas.add(Math.floor(Math.random() * 60) + 1);
  }
  return Array.from(dezenas).sort((a, b) => a - b);
}

export default function MegaSenaScreen() {
  const [jogos, setJogos] = useState([]);

  const handleGerar = () => {
    const novoJogo = gerarJogo();
    setJogos((prevJogos) => [novoJogo, ...prevJogos]);
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Gerador Mega-Sena</Title>
      <Button
        mode="contained"
        onPress={handleGerar}
        style={styles.button}
        icon="dice-multiple"
      >
        Gerar Jogo
      </Button>

      <Divider style={{ marginVertical: 12 }} />

      <FlatList
        data={jogos}
        renderItem={({ item, index }) => (
          <Card style={styles.card}>
            <Card.Title title={`Jogo #${jogos.length - index}`} />
            <Card.Content>
              <Text style={styles.dezenas}>
                {item.map(n => n.toString().padStart(2, '0')).join('  -  ')}
              </Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
},
  title: { 
    textAlign: 'center', 
    marginBottom: 8 
},
  button: { 
    marginBottom: 12 
},
  card: {
    marginBottom: 10,
    elevation: 2,  
},
  dezenas: {
    fontSize: 18,
    letterSpacing: 1,
    marginTop: 8,
    textAlign: 'center',
    color: '#2e7d32',
    fontWeight: 'bold',
  },
});
