import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Filmes from './componentes/Filmes';
import Series from './componentes/Series';

export default function App() {

  const listaFilmes = [
    {
      nome: "A Doce Vida",
      ano: 1960,
      diretor: "Federico Fellini",
      tipo: "Drama",
      capa: "https://upload.wikimedia.org/wikipedia/pt/0/04/La_Dolce_Vita.jpg"
    },
    {
      nome: "Psicose",
      ano: 1960,
      diretor: "Alfred Hitchcock",
      tipo: "Terror",
      capa: "https://i.pinimg.com/736x/e4/84/72/e484729535437d2e79882c359111db56.jpg"
    },
    {
      nome: "O Beijo da Mulher Aranha",
      ano: 1985,
      diretor: "Hector Babenco",
      tipo: "Drama",
      capa: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/8b/Kiss_Of_The_Spiderwoman.jpg/250px-Kiss_Of_The_Spiderwoman.jpg"
    },
    {
      nome: "Poltergeist - O Fenômeno",
      ano: 1982,
      diretor: "Tobe Hooper",
      tipo: "Terror",
      capa: "https://i.pinimg.com/736x/e9/93/a7/e993a7d3b8991176e91f007321262c27.jpg"
    }
  ],

    listaSeries = [
      {
        nome: "Buffy, a Caça-Vampiros",
        ano: 1997,
        diretor: "Joss Whedon",
        temporadas: 7,
        capa: "https://i.pinimg.com/736x/da/71/74/da71743ddd8f1cc98fa0565215919275.jpg"
      },
      {
        nome: "Desperate Housewives",
        ano: 2004,
        diretor: "Marc Cherry",
        temporadas: 8,
        capa: "https://i.pinimg.com/736x/15/cc/88/15cc8856eb29f92689dd1268077db45e.jpg"
      },
      {
        nome: "Sons of Anarchy",
        ano: 2008,
        diretor: "Kurt Sutter",
        temporadas: 7,
        capa: "https://upload.wikimedia.org/wikipedia/pt/7/7b/SOATitlecard.jpg"
      }
    ]

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.texto}>Filmes</Text>

        {
          listaFilmes.map(
            filme => {
              return (
                <Filmes
                  nome={filme.nome}
                  ano={filme.ano}
                  diretor={filme.diretor}
                  tipo={filme.tipo}
                  capa={filme.capa}
                />
              )
            }
          )
        }

        <Text style={styles.texto}>Series</Text>

        {
          listaSeries.map(
            series => {
              return (
                <Series
                  nome={series.nome}
                  ano={series.ano}
                  diretor={series.diretor}
                  tipo={series.temporadas}
                  capa={series.capa}
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

  texto: {
    fontSize: 50,
    fontWeight: "600",
    color: "Black",
    marginTop: 10,
    marginBottom: 10,
  },

});
