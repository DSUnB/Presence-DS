import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import Tecnologia from '../../components/Tecnologia'
import JS from '../../assets/images/javascript.png'
import EXPO from '../../assets/images/Expo.png'
import RN from '../../assets/images/ReactNative.png'
import MYSQL from '../../assets/images/MySQL.png'
import NODEJS from '../../assets/images/NodeJS.png'
import SEQUELIZE from '../../assets/images/Sequelize.png'


export default function Tecnologias({ navigation }) {
  return (
    <ImageBackground source={require('../../assets/images/Tabs-03.png')} resizeMode="cover">
      <View style={style.container}>
        <View>
        <Text style={{ fontFamily: 'poppinsb', fontSize: 20}}>Quais tecnologias utilizamos?</Text>
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