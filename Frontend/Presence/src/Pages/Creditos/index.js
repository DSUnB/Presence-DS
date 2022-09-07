import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Desenvolvedor from "../../components/Desenvolvedor";

export default function Creditos({ navigation }) {
    return(
        <ImageBackground source={require('../../assets/images/Tabs-04.png')} resizeMode="cover">
            <View style={style.container}>
                <Text style={{fontFamily:'poppinsb', fontSize:20}}>Duques e Cavaleiros</Text>
                <Text  style={{fontFamily:'poppinsr', fontSize:16, padding: 10}}>Clique e acesse o nosso perfil no Github!</Text>
                <View>
                    <Desenvolvedor nome='Leandro Almeida' cargo='Duque - Fullstack' titulo='Deliberador das Adversidades' img='https://avatars.githubusercontent.com/u/63979948?v=4' link='https://github.com/LeanArs'/>
                    <Desenvolvedor nome='Davi Rodrigues' cargo='Viceduque - Frontend' titulo='Submisso das Patacas' img='https://avatars.githubusercontent.com/u/95711861?v=4' link='https://github.com/DaviRogs'/>
                    <Desenvolvedor nome='Harleny Angéllica' cargo='Marquesa - Fullstack.' titulo='Aprendiz de Governante' img='https://avatars.githubusercontent.com/u/101184511?v=4' link='https://github.com/Angelicahaas'/>
                    <Desenvolvedor nome='Danielle Rodrigues' cargo='Condessa - Frontend.' titulo='Florescedora do Pântano' img='https://avatars.githubusercontent.com/u/101230741?v=4' link='https://github.com/DanielleRodriguesilv'/>
                    <Desenvolvedor nome='Alana Gabriele' cargo='Condessa - Backend.' titulo='Dizimadora de Bugs' img='https://avatars.githubusercontent.com/u/85856457?v=4' link='https://github.com/alanagabriele'/>
                    <Desenvolvedor nome='Daniel Rodrigues' cargo='Conde - Backend' titulo='Detentor da Sabedoria Oculta' img='https://avatars.githubusercontent.com/u/90018065?v=4' link='https://github.com/DanielRogs'/>
                </View>
            </View>
        </ImageBackground>
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