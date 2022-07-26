import React, { useState, useContext } from "react";
import { SafeAreaView, View, Text, StyleSheet, Pressable, FlatList, ImageBackground} from "react-native";
import PressableBtnBack from "../../components/PressableBtnBack";
import { LinearGradient } from "expo-linear-gradient";
import ProgressBarIP2 from "../../components/ProgressBarlP2";
import config from "../../config/config.json";
import IconCa from 'react-native-vector-icons/MaterialCommunityIcons';
import { Context } from '../../context/Provider';

const EmptyListMessage = ({item}) => {
  return (
    // Flat List Item
    <View>
      <Text style={{ fontFamily: "poppinsr", fontSize: 18, textAlign: 'center',}}>
        O aluno não marcou presença este mês
      </Text>
      <Text style={{ fontFamily: "poppinsr", fontSize: 13, textAlign: 'center'}}>
        Tente filtrar o mês ou mande os códigos de suas chamadas
      </Text>
    </View>   
  );
};

export default function StatusAlun({ navigation }) {

  const {curso} = useContext(Context);
  const {nome} = useContext(Context);
  const {idAlun} = useContext(Context);
  const {codTurma} = useContext(Context);
  const {chamadasFeita, setChamadasFeita} = useContext(Context);
  
    // =========================================================
  // FUNÇÃO PARA FILTRAR CHAMADAS RESPONDIDAS PELO ALUNO:
  async function FiltrarChamada(mes){
    let reqs = await fetch(config.urlRootNode+'professor/filtrar/chamada', {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        aluno: idAlun,
        codigoTurma: codTurma,
        mesNominal: mes,
      })
    });
    let res= await reqs.json();
    if (res) {
        setChamadasFeita(res);
    }
}
  // ===============================================================

  const options = [
    { label: 'Janeiro'},
    { label: 'Fevereiro'},
    { label: 'Março'},
    { label: 'Abril'},
    { label: 'Maio'},
    { label: 'Junho'},
    { label: 'Julho'},
    { label: 'Agosto'},
    { label: 'Setembro'},
    { label: 'Outubro'},
    { label: 'Novembro'},
    { label: 'Dezembro'},
];

  return (
    <ImageBackground source={require('../../assets/images/VetorPAlun.png')} resizeMode="cover">
      <SafeAreaView style={style.container}>

        {/* Header */}
        <View style={style.header}>
          <View>
            <Text style={{ fontFamily: "poppinsb", fontSize: 18 }}>Perfil Aluno</Text>
          </View>
          <View style={style.voltar}>
            <PressableBtnBack
              click={() => navigation.navigate("Turma")}
              iconeIo="chevron-back"
            />
          </View>
        </View>

        {/* Aluno(a) Selecionado */}
        <View style={{ position: "absolute", top:115, width:"90%", flex:1, flexDirection:"row", alignItems: "center"}}>
          <View style={{backgroundColor:"#dff1f1", borderRadius: 70, width:70, height:70}}>
            <IconCa style={{ alignSelf:"center", padding:17 }} name='school-outline' size={35}/>
          </View>
            <View style={{flex:1, flexDirection:"column", alignContent:"center", left:15}}>
              <Text style={{ fontFamily: "poppinsm", fontSize: 16, color:'black'}}>
              {nome}
            </Text>
            <Text style={{ fontFamily: "poppinsm", fontSize: 14, paddingTop: 5, color:'#7B6F72'}}>
              Registro de {curso}
            </Text>
          </View>
        </View>

        {/* Barra de progresso */}
        <View style={style.progress}>
            <ProgressBarIP2 titulo='Índice de Presença'/>
        </View>
        
        {/* FlatList dos meses */}
        <View  style={{marginTop: 100, marginBottom: 75, width:'100%' ,height:'100%', justifyContent: "space-around", alignItems: 'center'}}>
          <View style={{backgroundColor:'#F7F8F8', zIndex:2 , width:315, height:60, borderRadius:30, position:'absolute', marginTop:296, shadowColor: 'black',
                      shadowOpacity: 1,
                      shadowRadius: 4,
                      elevation: 2.0 }}>
            <View style={{width:286, display:"flex", justifyContent:'center', marginTop:10, marginLeft:15 }}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={options}
                horizontal
                renderItem={({item}) =>(
                <Pressable style={{ paddingRight:24 }} onPress={() => FiltrarChamada(item.label.toLowerCase())}>
                  <View>
                    <LinearGradient
                      colors = {['#2C5E7A' , '#338995']}
                      start = {[1.0 , 0.5]}
                      style={{width:130, height:40, borderRadius:30,}}>
                      <View style={{flexDirection: "row", justifyContent:'center'}}>
                        <Text
                          style={{
                          fontFamily: "poppinsm",
                          fontSize: 14,
                          paddingTop: 10,
                          color:'#fff'
                        }}>
                          {item.label}
                        </Text>
                      </View>
                    </LinearGradient>
                  </View>
                </Pressable> )}>
              </FlatList>
            </View>
          </View>
          
          {/* FlatList das chamadas realizadas */}
          <View style={style.lista}> 
            <FlatList
              data={chamadasFeita}
              ListEmptyComponent={EmptyListMessage}
              renderItem={({ item }) => (
                <Pressable>
                  <View style={style.alunos}>
                    <View style={{flexDirection: "row", justifyContent:'space-between'}}>
                      <IconCa style={{position:'absolute', alignSelf:'center', marginLeft:14, paddingTop:12, }} name='calendar-range-outline' size={18}/>
                      <Text
                        style={{
                          fontFamily: "poppinsm",
                          fontSize: 14,
                          paddingLeft: 38,
                          paddingTop: 18,
                        }}>
                          {item.dia} de {item.mesNominal[0].toUpperCase() + item.mesNominal.substring(1)}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              )}>
            </FlatList>
          </View>
        </View>

      </SafeAreaView>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  header: {
    zIndex: 2,
    position: "absolute",
    top: 0,
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
  code: {
    width: 319,
    height: 68,
    borderRadius: 20,
    backgroundColor: '#DFF5EB',
    position: 'absolute',
    top: 130,
  },
  footer:{
    zIndex: 2,
    position: "absolute",
    flexDirection: "row",
    bottom: 0,
    width: 450,
    height: 65,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 0,
    borderRadius: 2,
    borderColor: 'rgba(221,221,221)',
    borderTopWidth: 0.2,
    shadowColor: 'rgb(221,221,221)',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 0.3,
  },
  fundoModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },  
  modal1: {
    width: 148,
    height: 183,
    borderRadius: 22,
    alignItems: "center",
  },  
  modal2: {
    width: 275,
    height: 173,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "space-around", 
  },
  alinhamento: {
    position: 'absolute',
    bottom: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  close: {
    position: 'absolute',
    right: 15,
    top: 15,
    color: "#ffffff",
  },
  modal: {
    borderRadius: 22,
    padding: 35,
    width: 335,
    height: 220,
    alignItems: "center",
    justifyContent: "space-around",
  },
  progress:{
    width:345,
    position:'absolute',
    top:215,
  },
  alunos: {
    height: 57,
    borderRadius: 16,
    width: 315,
    backgroundColor: "#dff1f1",
    marginBottom: 15,
    shadowColor: 'rgb(221,221,221)',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3.5, 
  },
  lista: {
    marginTop: 390,
    marginBottom: 40,
  },
});