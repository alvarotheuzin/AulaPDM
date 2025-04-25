import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text, Card, title, Paragraph, Title} from 'react-native-paper'

export default function HomeScreen() {
  return (

    <ScrollView>
    <View style={styles.container}>

      <Text variant='headlineSmall' style={{ fontWeight: 'bold'}}>Inicio</Text>

      <Card>
        <Card.Content>
          <Title>Um Titulo</Title>
          <Paragraph>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700'}}></Card.Cover>
      </Card>

      <Card>
        <Card.Content>
          <Title>Um Titulo</Title>
          <Paragraph>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700'}}></Card.Cover>
      </Card>

      <Card>
        <Card.Content>
          <Title>Um Titulo</Title>
          <Paragraph>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700'}}></Card.Cover>
      </Card>
    
    </View>
  </ScrollView>
  )
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'fff',
    alignItems: 'center',
    paddingTop: 10
  }
})