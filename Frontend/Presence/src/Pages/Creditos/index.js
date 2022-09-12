import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, Pressable } from "react-native";
import Desenvolvedor from "../../components/Desenvolvedor";
import UNB from '../../assets/images/UNB.png'
import FGA from '../../assets/images/FGA.png'
import IconIo from 'react-native-vector-icons/Ionicons';

export default function Creditos({ navigation }) {
    return(
        <ImageBackground source={require('../../assets/images/Tabs-04.png')} resizeMode="cover">
            <View style={style.container}>

            <View style={{position: 'absolute', top: 35, width: '105%', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Pressable style={style.button} onPress={() => navigation.jumpTo('Tecnologias')}>
                <IconIo style={style.icone} name={'chevron-back'} size={23}/>
                </Pressable>

                <Pressable style={style.button} onPress={() => navigation.navigate('Login')}>
                <IconIo style={style.icone} name={'close'} size={23}/>
                </Pressable>
            </View>

                <Text style={{fontFamily:'poppinsb', fontSize:20}}>Duques e Cavaleiros</Text>
                <Text  style={{fontFamily:'poppinsr', fontSize:16, padding: 5}}>Clique e acesse o nosso perfil no Github!</Text>
                
                <Desenvolvedor nome='Leandro Almeida' cargo='Duque - Fullstack' titulo='Deliberador das Adversidades' img='https://avatars.githubusercontent.com/u/63979948?v=4' link='https://github.com/LeanArs'/>
                <Desenvolvedor nome='Davi Rodrigues' cargo='Viceduque - Frontend' titulo='Submisso das Patacas' img='https://avatars.githubusercontent.com/u/95711861?v=4' link='https://github.com/DaviRogs'/>
                <Desenvolvedor nome='Harleny Angéllica' cargo='Marquesa - Fullstack.' titulo='Aprendiz de Governante' img='https://avatars.githubusercontent.com/u/101184511?v=4' link='https://github.com/Angelicahaas'/>
                <Desenvolvedor nome='Danielle Rodrigues' cargo='Condessa - Frontend.' titulo='Florescedora do Pântano' img='https://avatars.githubusercontent.com/u/101230741?v=4' link='https://github.com/DanielleRodriguesilv'/>
                <Desenvolvedor nome='Alana Gabriele' cargo='Condessa - Backend.' titulo='Dizimadora de Bugs' img='https://avatars.githubusercontent.com/u/85856457?v=4' link='https://github.com/alanagabriele'/>
                <Desenvolvedor nome='Daniel Rodrigues' cargo='Conde - Backend' titulo='Detentor da Sabedoria Oculta' img='https://avatars.githubusercontent.com/u/90018065?v=4' link='https://github.com/DanielRogs'/>
                
                <View style={{flexDirection:'row'}}>
                    <Image source={UNB} style={style.img}></Image>
                    <Image source={FGA} style={style.img}></Image>
                </View>
            </View>
        </ImageBackground>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: 30,
    },
    img: {
        width: 40,
        height: 40,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    button:{
        width: 33,
        height: 33,
        borderRadius: 8,
        zIndex: 2,
        backgroundColor:'rgba(247, 248, 248, 1)',
      },
      icone:{
        color:"black",
        position: 'absolute',
        left:5,
        top:4,
    },
})