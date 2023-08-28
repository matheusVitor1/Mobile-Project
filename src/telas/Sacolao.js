import React from "react";
import { Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

import logo from '../../assets/Maga/logo.png';
import Texto from '../componentes/Texto';
import imgMaga from '../../assets/Maga/imagem_maga.jpeg'

const width = Dimensions.get('screen').width;

export default function Sacolao(){
    return <ScrollView style={estilos.sacolao}>
        <Image source={logo} style={estilos.logo}/>
        <Texto style={estilos.textoSacolao}>
        Bem-vindo(a) ao Studio Maga! Somos um salão acolhedor e encantador, dedicado a realçar sua beleza natural. 
        </Texto>
        <Texto style={estilos.textoSacolao}>
        Nossa equipe de profissionais apaixonados oferece tratamentos personalizado unhas e estética.
        </Texto><Texto style={estilos.textoSacolao}>
        Utilizamos os melhores produtos e técnicas para garantir resultados incríveis.
        </Texto>
        <Texto style={estilos.textoSacolao}>
        Visite-nos e desfrute de um ambiente relaxante, atendimento amigável e uma ampla gama de serviços que vão te deixar confiante e radiante.
        </Texto>
        <Texto style={estilos.textoSacolao}>
        Agende agora mesmo e deixe-nos cuidar de você!
        </Texto>
        <Image source={imgMaga} style={estilos.imgMaga}/>
    </ScrollView>;
}

const estilos = StyleSheet.create({
    logo: {
        width: "100%", 
        height:"10%",       
    },
    imgMaga: {
        width: "100%",
        height: 600/250 * width,
    },
    sacolao: {
        backgroundColor: "#fff",
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    textoSacolao: {
        fontSize: 16,
        lineHeight: 26,
        marginBottom: 10,
    }
})