import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Texto, Imagem} from './style';

export default function App() {
  return (
    <Container>
      <Texto>
        Teste de Customização!
      </Texto>
      <Imagem source={{ uri: 'https://i.dailymail.co.uk/1s/2020/01/29/21/24053262-7944405-image-m-18_1580333930708.jpg' }} style={styles.logo} />
  

      <TouchableOpacity
        onPress={() => alert('MO?NO?BO?LA?')}
        style={{ backgroundColor: 'papayawhip'}}>
        <Texto id='teste'>Siles, Não Click!</Texto>
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 400,
    height: 200,
    marginBottom: 20,
  },

});