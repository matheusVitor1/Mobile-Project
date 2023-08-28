import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Texto from './Texto';

export default function bota(){

return <>

    <TouchableOpacity style={estilos.botao}>
    <Texto style={estilos.botaoTexto}>cacete</Texto>
    </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    botao: {
    backgroundColor: "purple",
    marginTop: 16,
    paddingVertical: 12,
    borderRadius: 6,
},
botaoTexto: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 26,
},

});