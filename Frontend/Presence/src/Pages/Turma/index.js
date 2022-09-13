import React, { useContext } from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList, Pressable, ImageBackground } from 'react-native';
import PressableBtnBack from '../../components/PressableBtnBack';
import IconP from 'react-native-vector-icons/Ionicons';
import config from "../../config/config.json";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Context } from '../../context/Provider';

const EmptyListMessage = ({item}) => {
  return (
    // Flat List Item
    <View style={{alignItems:'center'}}>
      <Text style={{ fontFamily: "poppinsr", fontSize: 18, textAlign: 'center'}}>
        Ainda não há alunos na sua turma.
      </Text>
      <Text style={{ fontFamily: "poppinsr", fontSize: 12, textAlign: 'center'}}>
        Compartilhe o código da turma para que possam entrar!
      </Text>
    </View>    
  );
};

export default function Turma({ navigation }) {

  // =============================================
  // DECLARAÇÕES DE STATES E CONTEXTOS:

  const {alunosTurma} = useContext(Context);
  const {codTurma} = useContext(Context);
  const {setNome} = useContext(Context);
  const {setCurso} = useContext(Context);
  const {setChamadasFeita} = useContext(Context);
  const {setPorcentagem1} = useContext(Context);

  // =============================================

    // =========================================================
  // FUNÇÃO PARA MOSTRAR AS CHAMADAS REALIZADAS PELO ALUNO NA PRÓXIMA PÁGINA:
  async function ChamadasAluno(aluno){
    let reqs = await fetch(config.urlRootNode+'professor/chamada/aluno', {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        aluno: aluno,
        codigoTurma: codTurma,
      })
    });
    let res= await reqs.json();
    if (res){
      setChamadasFeita(res);
      PorcentagemAluno(aluno);
    }
}
  // =========================================================

      // =========================================================
  // FUNÇÃO PARA ORGANIZAR A PORCENTAGEM DO ALUNO:
  async function PorcentagemAluno(aluno){
    let reqs = await fetch(config.urlRootNode+'professor/porcentagem/aluno', {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        aluno: aluno,
        codigoTurma: codTurma,
      })
    });
    let res= await reqs.json();
    if (res){
      if (res[1] == 0) {
        setPorcentagem1([1,1]);
        navigation.navigate('StatusAlun');
      }
      else {
        setPorcentagem1(res);
        navigation.navigate('StatusAlun');
      }
    }
}
  // ========================================================= 

    // =========================================================
  // FUNÇÃO PARA ENVIAR DADOS PARA A PRÓXIMA PÁGINA:
  function EnvioDados(dado1, dado2, dado3){
    setCurso(dado1);
    setNome(dado2);
    ChamadasAluno(dado3);
    // navigation.navigate('StatusAlun');
  }
  // =========================================================

  return (
    <ImageBackground source={require('../../assets/images/VetorMain.png')} resizeMode="cover">
      <SafeAreaView style={style.container}>
        <View style={style.header}>
              <View>
                  <Text style={{ fontFamily: "poppinsb", fontSize: 18 }}>Alunos</Text>
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
            data={alunosTurma}
            ListEmptyComponent={EmptyListMessage}
            renderItem={({ item }) => (
              <Pressable onPress={() => EnvioDados(item.curso, item.nome, item.idAluno)}>
                <View style={style.alunos}>
                  <View style={{flexDirection: "row", justifyContent:'space-between'}}>
                  <IconP style={{position:'absolute', alignSelf:'center', marginLeft:14, paddingTop:12, color:'#7B6F72'}} name='person-outline' size={18}/>
                  <Text
                    style={{
                      fontFamily: "poppinsm",
                      fontSize: 14,
                      paddingLeft: 38,
                      paddingTop: 18,
                    }}
                  >
                  {item.nome}
                  </Text>
                  </View>
                </View>
              </Pressable>
            )}
          ></FlatList>
        </View>   
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
    voltar: {
      position:"absolute",
      zIndex: 2,
      top: 55,
      left: 20,
    },
    lista: {
      marginTop: 110,
      marginBottom: 15,
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