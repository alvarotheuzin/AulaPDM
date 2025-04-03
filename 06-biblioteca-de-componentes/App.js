import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Text, Button, Divider } from 'react-native-paper'

export default function App() {
  return (

    <PaperProvider>
      <ScrollView contentContainerStyle={{ paddingTop: 50 }} >
        <View style={styles.container}>
          <StatusBar style="auto" />


          <Button mode='contained' onPress={() => alert('Clicou')}>Clica Aqui</Button>
          <Button mode='contained-tonal' onPress={() => alert('Clicou')}>Clica Aqui</Button>
          <Button mode='elevated' onPress={() => alert('Clicou')}>Clica Aqui</Button>
          <Button mode='outlined' onPress={() => alert('Clicou')}>Clica Aqui</Button>
          <Button mode='text' onPress={() => alert('Clicou')}>Clica Aqui</Button>

          <Text variant='bodyLarge'>Um texto qualquer</Text>
          <Divider style={{width: '90%'}} />
          <Text variant='displayLarge'>Um texto qualquer</Text>
          <Divider style={{width: '90%'}} />
          <Text variant='headlineLarge'>Um texto qualquer</Text>
          <Divider style={{width: '90%'}} />
          <Text variant='labelLarge'>Um texto qualquer</Text>
          <Divider style={{width: '90%'}} />
          <Text variant='titleLarge'>Um texto qualquer</Text>
          <Divider style={{width: '90%'}} />


          <Card style={{ margin: 10 }}>
            <Card.Title title="teste"></Card.Title>
            <Card.Content style={{ backgroundColor: 'red' }}>
              <Title>Um titulo qualquer</Title>
              <Paragraph>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </Paragraph>
            </Card.Content>
            <Card.Actions>
              <Text>test</Text>
            </Card.Actions>
          </Card>


          <Card style={{ margin: 10 }}>
            <Card.Content>
              <Title>Um titulo qualquer</Title>
              <Paragraph>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</Paragraph>
            </Card.Content>
          </Card>

          <Card style={{ margin: 10 }}>
            <Card.Content>
              <Title>Um titulo qualquer</Title>
              <Paragraph>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</Paragraph>
            </Card.Content>
          </Card>

        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
