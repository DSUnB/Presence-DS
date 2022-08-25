import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Desenvolvedor from "../../components/Desenvolvedor";

export default function Creditos({ navigation }) {
    return(
        <View style={style.container}>
            <Desenvolvedor nome='Leandro Almeida' cargo='Fullstack, Duque.' img='https://avatars.githubusercontent.com/u/63979948?v=4'/>
            <Desenvolvedor nome='Davi Rodrigues' cargo='Frontend, Viceduque.' img='https://avatars.githubusercontent.com/u/95711861?v=4'/>
            <Desenvolvedor nome='Harleny Angéllica' cargo='Fullstack.' img='https://avatars.githubusercontent.com/u/101184511?v=4'/>
            <Desenvolvedor nome='Danielle Rodrigues' cargo='Frontend.' img='https://avatars.githubusercontent.com/u/101230741?v=4'/>
            <Desenvolvedor nome='Alana Gabriele' cargo='Backend.' img='https://avatars.githubusercontent.com/u/85856457?v=4'/>
            <Desenvolvedor nome='Daniel Rodrigues' cargo='Backend.' img='https://avatars.githubusercontent.com/u/90018065?v=4'/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    }
})