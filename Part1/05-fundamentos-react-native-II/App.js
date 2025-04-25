import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import JavascriptComponente from './componentes/JavascriptComponente';
import Perfil from './componentes/Perfil';
import ListaComponentes from './componentes/ListaComponentes';
import Atleta from './componentes/Atleta';

export default function App() {

  const listaAtletas = [
    {
      nome: "Messi",
      idade: "37",
      numero: "10",
      imagem: "https://i.pinimg.com/736x/6d/7a/bc/6d7abc9dbdd3e21201a69a5eec684ffb.jpg",
    },
    {
      nome: "Cristiano Ronaldo",
      idade: "39",
      numero: "7",
      imagem: "https://i.pinimg.com/236x/4d/f6/52/4df6522666a2289fd8cb4fcf57e87a97.jpg",
    }
  ]

  return (
    <ScrollView>
      <View style={styles.container}>

        {/* <Perfil 
        nome="Alvaro"
        idade= {21}
        telefone= "(61)986015285"
        email= "alvaro.s@iesb.edu.br"
      />

      <Perfil 
        nome="nome1"
        idade= {60}
        telefone= "(61)90000-0000"
        email= "email@iesb.edu.br"
      />

      <Perfil 
        nome="nome2"
        idade= {19}
        telefone= "(61)90000-0000"
        email= "email@iesb.edu.br"
      /> */}

        {/* <PrimeiroComponente />
        <JavascriptComponente />
        <ListaComponentes /> */}

        {
          listaAtletas.map(
            atleta => {
              return (
                <Atleta
                  nome={atleta.nome}
                  idade={atleta.idade}
                  numero={atleta.numero}
                  imagem={atleta.imagem}
                />
              )
            }
          )
        }

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E2E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
