import React, { useContext, useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, Animated, Modal, FlatList, Pressable, ImageBackground } from 'react-native';
import PressableBtnBack from '../../components/PressableBtnBack';
import ProgressBar from '../../components/ProgressBar';
import IconO from 'react-native-vector-icons/Octicons';
import Pressablesee from '../../components/pressablesee';
import { LinearGradient } from "expo-linear-gradient";
import IconX from 'react-native-vector-icons/Ionicons';
import BtnClose from "../../components/BtnClose";
import BtnOpen from "../../components/BtnOpen";
import PressablesModal from "../../components/pressablesModalS";
import PressablesModal2 from "../../components/pressableModalN";
import { Context } from "../../context/Provider";

export default function Chamada({navigation}){

  const [modalActive1, setModalActive1] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  const [modalActive3, setModalActive3] = useState(false);

  const [codigoc, setCodigoc] = useState('AU427');
  const [dia, setdia] = useState('14 Julho');

  const {situation} = useContext(Context);

  const DADOS = [
    {AlunoP: 'Leandro Almeida'},
    {AlunoP: 'Alana Gabriele'},
    {AlunoP: 'Rafaela Lopes'},
    {AlunoP: 'Doan FIlho'},
    {AlunoP: 'Harleny Angelica'},
    {AlunoP: 'Daniel Rodrigues'},
    {AlunoP: 'Danielle Rodrigues'},
    {AlunoP: 'Davi Rodrigues'},
    {AlunoP: 'Renan Araújo'},
    {AlunoP: 'Felipe de Sousa'},
    {AlunoP: 'Dara Cristina'},
    {AlunoP: 'Rafaela Lopes'},

  ];


  function Porcent(Alunosp,Alunosi){
    return (Alunosp/Alunosi)*100;
  }
  
  let P = Math.round(Porcent (100,100))

  return (
    <ImageBackground source={require('../../assets/images/VetorLogin.png')} resizeMode="cover">
      <SafeAreaView style={style.container}>
          <View style={style.header}>
              <View>
                  <Text style={{ fontFamily: "poppinsb", fontSize: 18 }}> Lista de chamada</Text>
                  <Text style={{ fontFamily:'poppinsr', fontSize:14, color:'#ADA4A5' , alignSelf:'center' }}>{dia}</Text>
              </View>
              <View style={style.voltar}>
                  <PressableBtnBack
                      click={() => navigation.navigate("CriarChamada")}
                      iconeIo="chevron-back"
                  />
              </View>
          </View>
          <View style={style.lista}>
          <FlatList
            data={DADOS}
            renderItem={({ item }) => (
              <Pressable onPress={() => navigation.navigate('CriarChamada')}>
                <View style={style.alunos}>
                  <View style={{flexDirection: "row", justifyContent:'space-between'}}>
                  <IconX style={{position:'absolute', alignSelf:'center', marginLeft:14, paddingTop:12, color:'#7B6F72'}} name='person-outline' size={18}/>
                  <Text
                    style={{
                      fontFamily: "poppinsm",
                      fontSize: 14,
                      paddingLeft: 38,
                      paddingTop: 18,
                    }}
                  >
                  {item.AlunoP}
                  </Text>
                  </View>
                </View>
              </Pressable>
            )}
          ></FlatList>
        </View>

        <View style={style.seecode}>
          <View style={style.circulo}>
            <IconO style={{alignSelf:'center', marginTop: 10}} name='key' size={30}/>
          </View>
        <Text style={{fontFamily:'poppinsm', fontSize:14, alignSelf:'center', marginTop:8}}>Código da chamada</Text>
        <Pressablesee click={() => setModalActive1(true)}></Pressablesee>
        </View>  
        <View style={style.progress}>
          <ProgressBar texto={P} titulo='Presença Geral'/>
        </View>

        <View style={style.closeturma}>
          {situation && (
            <BtnClose iconeMCI="sort-variant-lock" texto="Fechar chamada" click={() => setModalActive2(true)}/>
          )}
          {!situation && (
            <BtnOpen iconeMCI="sort-variant-lock-open" texto="Reabrir Chamada" click={() => setModalActive3(true)} />
          )}
        </View>
        


        {/* Modais */}

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

        <Modal visible={modalActive2} animationType="fade" transparent={true}>
          <View style={style.fundoModal}>
            <LinearGradient
              colors={["#2C5E7A", "#338995"]}
              start={[1.0, 0.5]}
              style={style.modal2}
            >
              <Text
                style={{ fontFamily: "poppinsb", fontSize: 15, color: "white", paddingBottom: 5}}
              >
                Deseja fechar a chamada?
              </Text>
              <Text
                style={{ fontFamily: "poppinsr", fontSize: 8.7, color: "#FEF5F5", paddingBottom: 60 }}
              >
                (Isso impedirá o aluno de efetuar a presença desta chamada)
              </Text>
              <View style={style.alinhamento}>
                <PressablesModal
                  texto="Sim"
                  click={() => setModalActive2(false)}
                />
                <PressablesModal2
                  texto="Não"
                  click={() => setModalActive2(false)}
                />
              </View>
            </LinearGradient>
          </View>
        </Modal>

        <Modal visible={modalActive3} animationType="fade" transparent={true}>
          <View style={style.fundoModal}>
            <LinearGradient
              colors={["#2C5E7A", "#338995"]}
              start={[1.0, 0.5]}
              style={style.modal2}
            >
              <Text
                style={{ fontFamily: "poppinsb", fontSize: 15, color: "white", paddingBottom: 5}}
              >
                Deseja reabrir a chamada?
              </Text>
              <Text
                style={{ fontFamily: "poppinsr", fontSize: 8.7, color: "#FEF5F5", paddingBottom: 60 }}
              >
                (Isso permitirá ao aluno efetuar a presença desta chamada)
              </Text>
              <View style={style.alinhamento}>
                <PressablesModal
                  texto="Sim"
                  click={() => setModalActive3(false)}
                />
                <PressablesModal2
                  texto="Não"
                  click={() => setModalActive3(false)}
                />
              </View>
            </LinearGradient>
          </View>
        </Modal>
      </SafeAreaView>
    </ImageBackground>
  )
}

const style = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
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
      justifyContent: "center",
      },

      alinhamento: {
        position: 'absolute',
        bottom: 40,
        flexDirection: "row",
        justifyContent: "space-between",
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

    closeturma:{
      position:"absolute",
      display: "flex",
      zIndex: 2,
      bottom: 65,
      left: 50,
    },

    opcoes: {
        position:"absolute",
        zIndex: 2,
        top: 55,
        right: 20,
      },
    
      progress:{
        width: 315, 
        height: 63, 
        borderRadius: 16, 
        backgroundColor:'#fff', 
        padding: 15, 
        position:'absolute', 
        bottom: 95,
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
        bottom:175,
      },

      circulo:{
        alignSelf:'center',
        marginTop:13,
        backgroundColor:'#fff',
        width:55,
        height:55,
        borderRadius:100,
      },

      lista: {
        marginTop: 123,
        marginBottom: 345,
      },

      alunos: {
        height: 57,
        borderRadius: 16,
        width: 315,
        backgroundColor: "#D5E9E1",
        marginBottom: 10,
        shadowColor: 'rgb(221,221,221)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 3.5,
      },

})