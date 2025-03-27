import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ListaComponentes() {
    const listaCarros = ["Gol", "Palio", "Celta", "Uno", "BYD", "Honda Civic"];

    return (
        <View style={styles.container}>
            {listaCarros.map((carro, index) => (
                <Text key={index} style={styles.texto}>{carro}</Text>
            ))}

            {listaCarros.map((carro, index) => (
                <Text key={`seg-${index}`} style={styles.texto}>{carro}</Text>
            ))}

            {listaCarros.map((carro, index) => (
                <Text key={`ter-${index}`} style={styles.texto}>{carro}</Text>
            ))}

            {listaCarros.map((carro, index) => (
                <View key={`quarto-${index}`} style={styles.containerAmarelo}>
                    <Text style={styles.texto}>{carro}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        borderWidth: 10,
        borderColor: '#f2f2f4',
        borderRadius: 10,
        marginBottom: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
    },
    texto: {
        fontSize: 20,
        fontWeight: '600'
    },
    containerAmarelo: {
        backgroundColor: 'yellow',
        padding: 5,
        marginVertical: 5,
        borderRadius: 5,
    }
});
