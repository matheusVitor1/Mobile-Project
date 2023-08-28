import react from "react";
import { FlatList, SafeAreaView } from "react-native";

import Texto from "../../componentes/Texto";
import Item from './Item';


const produtos =[
    {
        id: 1,
        nome: "Cesta Inverno",
        preco: 79.9,
        descricao: "Cesta de frutas tipicas do inverno!"
    },

    {
        id: 2,
        nome: "Cesta Verao",
        preco: 89.9,
        descricao: "Cesta de frutas tipicas do Verao!"
    },

    {
        id: 3,
        nome: "Cesta Outono",
        preco: 99.9,
        descricao: "Cesta de frutas tipicas do outono!"
    },

    {
        id: 4,
        nome: "Cesta Primavera",
        preco: 110.9,
        descricao: "Cesta de frutas tipicas da primavera!"
    }
];


export default function Produtos(){
    return <SafeAreaView>
        <FlatList
            data={produtos}
            renderItem={({item})=>(<Item {...item}/>)}
            keyExtractor={({id})=>(String(id))}
        />
    </SafeAreaView>
}
