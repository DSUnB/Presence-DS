import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Animated } from 'react-native';
import PressableBtnBack from '../../components/PressableBtnBack';
import PressablesConf from '../../components/pressablesConf';
import ProgressBar from '../../components/ProgressBar';




export default function Chamada(){

  return (
    <SafeAreaView style={style.container}>
        <View style={style.header}>
            <View>
                <Text style={{ fontFamily: "poppinsb", fontSize: 18 }}> Lista de chamada</Text>
            </View>
            <View style={style.voltar}>
                <PressableBtnBack
                    click={() => navigation.navigate("MainProf")}
                    iconeIo="chevron-back"
                />
            </View>
            <View style={style.opcoes}>    
                <PressablesConf
                    iconeSLI="options"
                    click={() => navigation.navigate("MainAlun")}
                />
            </View>
        </View>
      <View style={{width:315, height:63, borderRadius: 16, backgroundColor:'red', padding:15}}>
        <Text style={{fontFamily:'poppinsm', fontSize: 12}}> Presença Geral </Text>
        <ProgressBar/>
      </View>
    </SafeAreaView>
  )}

const style = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      backgroundColor: "#fff",
    },

    header: {
        zIndex: 1,
        position: "absolute",
        top: 0,
        flexDirection: "row",
        width: "100%",
        height: 110,
        paddingTop: 30,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },

    voltar: {
        position:"absolute",
        zIndex: 2,
        top: 55,
        left: 20,
      },

    opcoes: {
        position:"absolute",
        zIndex: 2,
        top: 55,
        right: 20,
      },
    
})