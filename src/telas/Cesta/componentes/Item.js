import React from "react";
import { Image, View, StyleSheet } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Item({item:{nome, imagem}}){
    return  <View key={nome} style={estilos.item}>
                        <Image source={imagem} style={estilos.image} onPress={handlePress}/>
                        <Texto style={estilos.nome}>{nome} </Texto>
            </View>
}


const handlePress = () => {
    // Número de telefone ou link do WhatsApp
    const phoneNumber = 'XXXXXXXXXX';
    
    // Verifica se o aplicativo do WhatsApp está instalado no dispositivo
    Linking.canOpenURL(`whatsapp://send?phone=${phoneNumber}`).then(supported => {
      if (supported) {
        // Abre o link no aplicativo do WhatsApp
        return Linking.openURL(`whatsapp://send?phone=${phoneNumber}`);
      } else {
        // Abre o link no navegador padrão
        return Linking.openURL(`https://api.whatsapp.com/send?phone=${phoneNumber}`);
      }
    }).catch(err => console.error('Erro ao abrir o WhatsApp:', err));
};

const estilos = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        padding: 16,
        alignItems: "center",

    },
    nome: {
        fontSize: 16,
        lineHeight: 32,
        marginLeft: 11,
    },
    image: {
        width: 40,
        height: 40,
    }
})