import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import logo from '../../assets/images/icon.png'
import IconI from 'react-native-vector-icons/Ionicons';
import * as Linking from 'expo-linking';


export default function Aplicativo({ navigation }) {
  return (
    <View style={style.container}>
      <Text style={{fontFamily:'poppinsb', fontSize:20}}>O que é o aplicativo Presence?</Text>
        <Image source={logo} style={{width: 210, height: 210}}></Image>
        <View>
          <IconI name='code-sharp' size={ 20 }></IconI>
          <Text style={{fontFamily:'poppinsr', fontSize:18, textAlign: 'justify'}}>É um Aplicativo Android que tem como objetivo o controle de presença acadêmica, tanto por parte do professor como por parte do aluno.</Text>
          <IconI name='code-slash' size={ 20 }></IconI>
        </View>
      <Text style={{fontFamily:'poppinsr', fontSize: 15, textAlign: 'center'}} onPress={()=>Linking.openURL('https://github.com/DSUnB/Presence-DS')}>Clique aqui para acessar o nosso respoitório!</Text>
    </View>
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