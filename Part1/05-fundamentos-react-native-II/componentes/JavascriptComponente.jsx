import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function JavascriptComponente() {
    // lógica do componente
    const nome = "Gustavo"
    const idade = 18

    function checarMaiorIdade() {
        console.log("Chamou a função checarMaiorIdade")
        if (idade >= 18){
            return "Maior de Idade"
        } else{
            return "Menor de Idade"
        }
    }

    function alerta() {
        alert('Clicou no Botão!')
    }

    // Retorno do JSX
  return (
    <View style={styles.container}>

      <Text style={styles.texto}>JavascriptComponente</Text>
      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>Idade: {idade}</Text>
      <Text style={styles.texto}>Idade+40: {idade + 40}</Text>
      <Text style={styles.texto}>18+: {checarMaiorIdade()}</Text>

      <Button title='Enviar' onPress={alerta}/>

    </View>
  )
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
        fontWeight: 600
    }
})