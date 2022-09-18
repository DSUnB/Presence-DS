import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, Pressable } from 'react-native';
import logo from '../../assets/images/VerdePantano.png';
import * as Linking from 'expo-linking';
import IconIo from 'react-native-vector-icons/Ionicons';


export default function VerdePantano({ navigation }) {
  return (
    <ImageBackground source={require('../../assets/images/Tabs-01.png')} resizeMode="cover">
      <View style={style.container}>

        <View style={{position: 'absolute', top: 35, width: '105%', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Pressable style={style.button} onPress={() => navigation.navigate('Login')}>
          <IconIo style={style.icone} name={'chevron-back'} size={23}/>
          </Pressable>

          <Pressable style={style.button} onPress={() => navigation.jumpTo('Aplicativo')}>
          <IconIo style={style.icone} name={'chevron-forward'} size={23}/>
          </Pressable>
        </View>

        <Text style={{fontFamily:'poppinsb', fontSize:25}}>Verde Pântano</Text>
          <Image source={logo} style={{width: 250, height: 250}}></Image>
            <View>
                <Text  style={{fontFamily:'poppinsr', fontSize:18, textAlign: 'justify'}}>     Nós, que somos Verde Pântano, temos orgulho de fazer parte desse feudo.{"\n"}   Tudo quanto é coisa que seja <Text style={{color: '#4CB49E', fontWeight: 'bold'}}>verde</Text> e que seja <Text style={{color: '#4CB49E', fontWeight: 'bold'}}>pântano</Text> queremos sempre que seja <Text style={{fontWeight: 'bold'}}>excepcional</Text>.
                E de tal forma, assim tentamos construir esse App. Demos o nosso máximo.{"\n"}      Esperemos que goste!</Text>
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
        padding: 30,
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
