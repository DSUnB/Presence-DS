import React from 'react'
import { View, Text, StyleSheet, Image, Pressable, ImageBackground } from 'react-native'
import logo from '../../assets/images/icon.png'
import IconI from 'react-native-vector-icons/Ionicons';
import * as Linking from 'expo-linking';
import IconIo from 'react-native-vector-icons/Ionicons';


export default function Aplicativo({ navigation }) {
  return (
    <ImageBackground source={require('../../assets/images/Tabs-02.png')} resizeMode="cover">
      <View style={style.container}>

        <View style={{position: 'absolute', top: 35, width: '105%', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Pressable style={style.button} onPress={() => navigation.jumpTo('VerdePantano')}>
            <IconIo style={style.icone} name={'chevron-back'} size={23}/>
            </Pressable>

            <Pressable style={style.button} onPress={() => navigation.jumpTo('Tecnologias')}>
            <IconIo style={style.icone} name={'chevron-forward'} size={23}/>
            </Pressable>
        </View>

        <Text style={{fontFamily:'poppinsb', fontSize:20}}>O que é Presence?</Text>
        <Image source={logo} style={{width: 240, height: 240}}></Image>
        <Text style={{fontFamily:'poppinsr', fontSize:18, textAlign: 'justify'}}>É um Aplicativo Android que tem como objetivo o controle de presença acadêmica, tanto por parte do professor como por parte do aluno.</Text>
        <Text style={{fontFamily:'poppinsr', fontSize: 15, textAlign: 'center', color: '#0D5354'}} onPress={()=>Linking.openURL('https://github.com/DSUnB/Presence-DS')}>Clique aqui para acessar o nosso respositório!</Text>

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
        padding: 30
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