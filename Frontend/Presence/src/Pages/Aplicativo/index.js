import React from 'react'
import { View, Text, StyleSheet, Image, Pressable, ImageBackground } from 'react-native'
import logo from '../../assets/images/icon.png'
import IconI from 'react-native-vector-icons/Ionicons';
import * as Linking from 'expo-linking';


export default function Aplicativo({ navigation }) {
  return (
    <ImageBackground source={require('../../assets/images/Tabs-02.png')} resizeMode="cover">
      <View style={style.container}>
        <Text style={{fontFamily:'poppinsb', fontSize:20}}>O que é o aplicativo Presence?</Text>
          <Image source={logo} style={{width: 210, height: 210}}></Image>
          <View>
            <IconI name='code-sharp' size={ 20 } style={{color: '#3B8A8C'}}></IconI>
            <Text style={{fontFamily:'poppinsr', fontSize:18, textAlign: 'justify', paddingLeft: 15, paddingRight: 15}}>É um Aplicativo Android que tem como objetivo o controle de presença acadêmica, tanto por parte do professor como por parte do aluno.</Text>
            <IconI name='code-slash' size={ 20 } style={{color: '#3B8A8C'}}></IconI>
          </View>
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
    }
})