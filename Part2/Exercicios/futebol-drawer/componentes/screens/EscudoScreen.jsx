import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const EscudoScreen = () => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Text style={styles.title}>Escudo do Time</Text>
          <Image
            style={styles.image}
            source={{ uri: 'https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg' }}
          />
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default EscudoScreen;
