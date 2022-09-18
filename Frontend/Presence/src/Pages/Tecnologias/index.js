import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import Tecnologia from '../../components/Tecnologia'
import JS from '../../assets/images/JavaScript.png'
import EXPO from '../../assets/images/Expo.png'
import RN from '../../assets/images/ReactNative.png'
import MYSQL from '../../assets/images/MySQL.png'
import NODEJS from '../../assets/images/NodeJS.png'
import SEQUELIZE from '../../assets/images/Sequelize.png'
import IconIo from 'react-native-vector-icons/Ionicons';


export default function Tecnologias({ navigation }) {
  return (
    <ImageBackground source={require('../../assets/images/Tabs-03.png')} resizeMode="cover">
      <View style={style.container}>

        <View style={{position: 'absolute', top: 35, width: '105%', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Pressable style={style.button} onPress={() => navigation.jumpTo('Aplicativo')}>
            <IconIo style={style.icone} name={'chevron-back'} size={23}/>
            </Pressable>

            <Pressable style={style.button} onPress={() => navigation.jumpTo('Desenvolvedores')}>
            <IconIo style={style.icone} name={'chevron-forward'} size={23}/>
            </Pressable>
        </View>

       
        <Text style={{ fontFamily: 'poppinsb', fontSize: 20, textAlign: 'center'}}>Tecnologias</Text>
        <Text style={{fontFamily:'poppinsr', fontSize:18, textAlign: 'justify'}}>No início, foram escolhidas sendo pensadas na familiaridade que os membros possuiam com as mesmas.</Text>
          <View style={{flexDirection:'row'}}>
            <Tecnologia img={JS} texto='JavaScript'/>
            <Tecnologia img={EXPO} texto='Expo'/>
          </View>
          <View style={{flexDirection:'row'}}>
            <Tecnologia img={RN} texto='React Native'/>
            <Tecnologia img={MYSQL} texto='MySQL'/>
          </View>
          <View style={{flexDirection:'row'}}>
            <Tecnologia img={NODEJS} texto='NodeJS'/>
            <Tecnologia img={SEQUELIZE} texto='Sequelize'/>
          </View>
          <Text style={{fontFamily:'poppinsr', fontSize:18, textAlign: 'justify'}}>No entanto, mudanças ocorreram ao longo do projeto, e no final essas foram as principais tecnologias que utilizamos. </Text>

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