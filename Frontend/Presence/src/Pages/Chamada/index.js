import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, Animated, Modal } from 'react-native';
import PressableBtnBack from '../../components/PressableBtnBack';
import PressablesConf from '../../components/pressablesConf';
import ProgressBar from '../../components/ProgressBar';
import IconO from 'react-native-vector-icons/Octicons';
import Pressablesee from '../../components/pressablesee';
import { LinearGradient } from "expo-linear-gradient";
import IconX from 'react-native-vector-icons/Ionicons';


export default function Chamada({navigation}){

  const [modalActive1, setModalActive1] = useState(false);

  const [codigoc, setCodigoc] = useState('AU427');
  const [dia, setdia] = useState('14 Julho');

  return (
    <SafeAreaView style={style.container}>
        <View style={style.header}>
            <View>
                <Text style={{ fontFamily: "poppinsb", fontSize: 18 }}> Lista de chamada</Text>
                <Text style={{ fontFamily:'poppinsr', fontSize:14, color:'#ADA4A5' , alignSelf:'center' }}>{dia}</Text>
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
      <View style={style.seecode}>
        <View style={style.circulo}>
          <IconO style={{alignSelf:'center', marginTop: 10}} name='key' size={30}/>
        </View>
      <Text style={{fontFamily:'poppinsm', fontSize:14, alignSelf:'center', marginTop:8}}>Código da chamada</Text>
      <Pressablesee click={() => setModalActive1(true)}></Pressablesee>
      </View>  
      <View style={style.progress}>
        <ProgressBar/>
      </View>

      <Modal visible={modalActive1} animationType="fade" transparent={true}>
      <View style={style.fundoModal}>
          <LinearGradient
            colors={["#2C5E7A", "#338995"]}
            start={[1.0, 0.5]}
            style={style.modal2}
          >
          <IconX
                style={style.close}
                name="close-circle"
                size={30}
                onPress={() => setModalActive1(false)}
              />  
          <Text style={{ fontFamily: "poppinsb", fontSize: 16, color: "white" , paddingTop: 50}}>
            Código da chamada
          </Text>
          <View style={{backgroundColor:'#fff', width:258, height:39, borderRadius:14, marginBottom:20 }}>
            <Text style={{fontFamily:'poppinsr', fontSize:24, marginTop:3, alignSelf:'center' }}>{codigoc}</Text>
          </View>  
          </LinearGradient>
      </View>
      </Modal>
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

    fundoModal: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.2)",
      },  

    modal2: {
      width: 275,
      height: 173,
      borderRadius: 22,
      alignItems: "center",
      justifyContent: "space-around", //
      },
    
    close: {
      position: 'absolute',
      right: 20,
      top: 20,
      color: "#ffffff",
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
    
      progress:{
        width:315, 
        height:63, 
        borderRadius: 16, 
        backgroundColor:'#fff', 
        padding:15, 
        position:'absolute', 
        bottom:101,
        shadowColor: 'rgb(221,221,221)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 3.5,
      },

      seecode:{
        width:128,
        height:153,
        borderRadius:20,
        backgroundColor:'#C5E2D6',
        position:'absolute',
        bottom:197,

      },

      circulo:{
        alignSelf:'center',
        marginTop:13,
        backgroundColor:'#fff',
        width:55,
        height:55,
        borderRadius:100,

      },
})