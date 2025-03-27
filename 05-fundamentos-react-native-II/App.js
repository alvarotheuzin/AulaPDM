import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import JavascriptComponente from './componentes/JavascriptComponente';
import Perfil from './componentes/Perfil';
import ListaComponentes from './componentes/ListaComponentes';

export default function App() {
  return (
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

      <PrimeiroComponente />
      
      <JavascriptComponente />

      <ListaComponentes />

      <StatusBar style="auto" />
    </View>
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
