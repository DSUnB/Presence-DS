import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import logo from '../../assets/images/VerdePantano.png'
import * as Linking from 'expo-linking';


export default function VerdePantano() {
  return (
    <ImageBackground source={require('../../assets/images/Tabs-01.png')} resizeMode="cover">
      <View style={style.container}>
        <Text style={{fontFamily:'poppinsb', fontSize:25}}>Verde Pântano</Text>
          <Image source={logo} style={{width: 250, height: 250}}></Image>
            <View>
                <Text  style={{fontFamily:'poppinsr', fontSize:18, textAlign: 'justify'}}>     Nós, que somos Verde Pântano, temos orgulho de fazer parte desse feudo.{"\n"}   Tudo quanto é coisa que seja <Text style={{color: '#4CB49E', fontWeight: 'bold'}}>verde</Text> e que seja <Text style={{color: '#4CB49E', fontWeight: 'bold'}}>pântano</Text> queremos sempre que seja <Text style={{fontWeight: 'bold'}}>maior e melhor</Text>.
                E de tal forma, assim foi construído esse App. Demos o nosso máximo.{"\n"}      Esperemos que goste!</Text>
            </View>
        <Text style={{fontFamily:'poppinsr', fontSize: 15, textAlign: 'center', color: '#0D5354'}} onPress={()=>Linking.openURL('https://docs.google.com/document/d/1iXombpTWFqV1MTyfAIdKEdCc9vWqVsNbGtNeQIv-liw/edit?usp=sharing')}>Leia a carta que escrevemos.</Text>
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
