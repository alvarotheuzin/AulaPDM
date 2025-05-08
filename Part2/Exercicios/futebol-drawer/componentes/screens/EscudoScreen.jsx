import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const EscudoScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card} elevation={5}>
        <Card.Content>
          <Text style={styles.title}>🏆 Escudo do Time</Text>
          <Image
            style={styles.image}
            source={{
              uri: 'https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg',
            }}
          />
          <Text style={styles.subtitle}>Time Azul Real • Fundado em 1920</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    borderRadius: 16,
    backgroundColor: '#1e1e1e',
    width: 300,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 16,
    alignSelf: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#bb86fc',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#cccccc',
    marginTop: 10,
  },
});

export default EscudoScreen;
