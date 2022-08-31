import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import logo from '../../assets/images/icon.png'
import IconI from 'react-native-vector-icons/Ionicons';

export default function Aplicativo({ navigation }) {
  return (
    <View style={style.container}>
        <Text style={{fontFamily:'poppinsb', fontSize:20}}>Feudo Verde Pântano</Text>
        <Image source={logo} style={{width: 100, height: 100}}></Image>
        <IconI name='code-sharp'></IconI>
        <Text style={{fontFamily:'poppinsr', fontSize:18}}>Aplicativo Android que tem como objetivo o controle de presença acadêmica, tanto por parte do professor como por parte do aluno.</Text>
        <IconI name='code-slash'></IconI>
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