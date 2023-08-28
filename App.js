import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { StatusBar, SafeAreaView, View, StyleSheet } from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import Cesta from './src/telas/Cesta';
import Sacolao from './src/telas/Sacolao';
import Imagens from './src/telas/Imagens';
import Produtos from './src/telas/Produtos';
import mock from './src/mocks/cesta';


function MenuCesta(){
  return <SafeAreaView>
            <Cesta {...mock}/>
            <StatusBar/>
         </SafeAreaView>;
}

const Tab = createBottomTabNavigator();

function TabsMenu(){
  return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Tela Inicial') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Sobre') {
              iconName = focused 
                ? 'help' 
                : 'help-outline';
            } else if (route.name === 'Contato') {
              iconName = focused 
                ? 'call' 
                : 'call-outline';
            } else if (route.name === 'Produtos') {
              iconName = focused 
                ? 'list' 
                : 'list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Tela Inicial" component={Imagens}  /> 
        <Tab.Screen name="Sobre" component={Sacolao} />
        <Tab.Screen name="Contato" component={MenuCesta} />
        <Tab.Screen name="Produtos" component={Produtos}/> 
      </Tab.Navigator>
  );
}

const estilos = StyleSheet.create({
  logo: {
      backgroundColor: "pink",      
  },

})

export default function App() {

//Fonte utilizada para o projeto
const [ fonteCarregada ] = useFonts({
  "MontSerratRegular" : Montserrat_400Regular,
  "MontSerratBold" : Montserrat_700Bold,
});

  //Checa se as fontes já foram carregadas antes de exibir no APP
  if(!fonteCarregada) {
    return <View />;
  }

  return (
    <NavigationContainer>
      <TabsMenu/>
    </NavigationContainer>
  );
}
