import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import Carousel, { PaginationLight } from 'react-native-x-carousel';

import Texto from '../componentes/Texto';

import logo from '../../assets/Maga/logo.png'
import Cesta1 from '../../assets/Maga/prod1.jpeg';
import Cesta2 from '../../assets/Maga/prod2.jpeg';
import Cesta3 from '../../assets/Maga/prod3.jpeg';
import Cesta4 from '../../assets/Maga/prod4.jpeg';
import Cesta5 from '../../assets/Maga/imagem_maga.jpeg';

const { width } = Dimensions.get('window');

const DATA = [
  {
    coverImageUri: Cesta1,
    cornerLabelColor: '#FFD300',
    cornerLabelText: 'Especial',
  },
  {
    coverImageUri: Cesta2,
    cornerLabelColor: '#0080ff',
    cornerLabelText: 'Dia das Mães',
  },
  {
    coverImageUri: Cesta3
  },
  {
    coverImageUri: Cesta4
  },
  {
    coverImageUri: Cesta5
  },
];

const Imagens = () => {
  const renderItem = data => (
    <View key={data.coverImageUri} style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <Image style={styles.card} source={ data.coverImageUri }/>
        <View style={[styles.cornerLabel,{ backgroundColor: data.cornerLabelColor },]}>
          <Texto style={styles.cornerLabelText}>
            { data.cornerLabelText }
          </Texto>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
        <Image source={logo} style={styles.logo}/>
        <Texto style={styles.textoImagens}>Veja abaixo alguns de nossos serviços.</Texto>
      <Carousel
        pagination={PaginationLight}
        renderItem={renderItem}
        data={DATA}
        loop
        autoplay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width,
  },
  cardWrapper: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  card: {
    width: width * 0.9,
    height: width * 1.0,
  },
  cornerLabel: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },
  cornerLabelText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
  textoImagens: {
    paddingBottom: 20,
    fontSize: 18,
  },
  logo: {
    height:"25%",
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 4,
},
});

export default Imagens;