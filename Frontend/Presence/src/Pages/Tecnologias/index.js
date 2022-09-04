import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import Tecnologia from '../../components/Tecnologia'

export default function Tecnologias({ navigation }) {
  return (
    <ImageBackground source={require('../../assets/images/VetorCad.png')} resizeMode="cover">
      <View style={style.container}>
        <Text style={{ fontFamily: 'poppinsb', fontSize: 20 }}>Quais Tecnologias utilizamos?</Text>
        <View style={{flexDirection:'row'}}>
          <Tecnologia img='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'/>
          <Tecnologia img='/'/>
        </View>
        <View style={{flexDirection:'row'}}>
          <Tecnologia img='/'/>
          <Tecnologia img='/'/>
        </View>
        <View style={{flexDirection:'row'}}>
          <Tecnologia img='/'/>
          <Tecnologia img='/'/>
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