import React, { useContext, useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, Modal, FlatList, Pressable, ImageBackground, RefreshControl } from 'react-native';
import PressableBtnBack from '../../components/PressableBtnBack';
import ProgressBar from '../../components/ProgressBar';
import IconO from 'react-native-vector-icons/Octicons';
import Pressablesee from '../../components/pressablesee';
import { LinearGradient } from "expo-linear-gradient";
import IconX from 'react-native-vector-icons/Ionicons';
import config from "../../config/config.json";
import BtnClose from "../../components/BtnClose";
import BtnOpen from "../../components/BtnOpen";
import PressablesModal from "../../components/pressablesModalS";
import PressablesModal2 from "../../components/pressableModalN";
import { Context } from "../../context/Provider";
import moment from 'moment';
import 'moment/locale/pt-br';
import PressableCircle from "../../components/pressableCircle";
import PressableCircleRed from "../../components/pressableCircleRed";

// =========================================================
// GERAÇÃO DA DATA EM PORTUGUES:
moment().format();
moment.locale('pt-br');
// =========================================================

const EmptyListMessage = ({item}) => {
  return (
    // Flat List Item
    <View>
      <Text style={{ fontFamily: "poppinsr", fontSize: 18, textAlign: 'center',}}>
        Nenhum aluno respondeu ainda
      </Text>
      <Text style={{ fontFamily: "poppinsr", fontSize: 13, textAlign: 'center'}}>
        Tente atualizar a página!
      </Text>
    </View>   
  );
};

export default function Chamada({navigation}){

  const [modalActive1, setModalActive1] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  const [modalActive3, setModalActive3] = useState(false);
  const [message, setMessage] = useState(null);
  const [isRefreshing, setResfreshing] = useState(false);
  const {codChamada} = useContext(Context);
  const {situation, setSituation} = useContext(Context);
  const {codTurma} = useContext(Context);
  const {setChamadas} = useContext(Context);
  const {diaChamada, setDiaChamada} = useContext(Context);
  const {mesNominalChamada, setMesNominalChamada} = useContext(Context);
  const {respostaChamada, setRespostaChamada} = useContext(Context);
  const {setPorcentagem1} = useContext(Context);
  const {setAlunosTurma} = useContext(Context);

  // =========================================================
  // FUNÇÃO PARA ALTERAR ESTADO PARA DESATIVAR CHAMADA:
  async function DesativarChamada(method){
    if (method == 1){
      let reqs = await fetch(config.urlRootNode+'professor/chamada/situacao', {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            codigoChamada: codChamada,
            situation: false,
        })
      });
      let res= await reqs.json();
        if(res == '403'){
          setMessage('Algo inesperado ocorreu!');
          setTimeout(() => {
            setModalActive2(false)
            setMessage(null);
          }, 1000);
        }
        else {
          setMessage('Turma Fechada!');
          setSituation(false);
          setTimeout(() => {
            setModalActive2(false)
            setMessage(null);
          }, 1000);
        }
    }
    else if(method == 2){
      let reqs = await fetch(config.urlRootNode+'professor/chamada/situacao', {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            codigoChamada: codChamada,
            situation: true,
        })
      });
      let res= await reqs.json();
        if(res == '403'){
          setMessage('Algo inesperado ocorreu!');
          setTimeout(() => {
            setModalActive3(false)
            setMessage(null);
          }, 1000);
        }
        else {
          setMessage('Turma Reaberta!');
          setSituation(true);
          setTimeout(() => {
            setModalActive3(false)
            setMessage(null);
          }, 1000);
        }
    }
  }
  // =========================================================

  // =========================================================
  // FUNÇÃO PARA PESQUISAR REGISTRO DAS CHAMADAS:
  async function PesquisaChamadas(){
    let reqs = await fetch(config.urlRootNode+'professor/chamada/obter', {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        codigoTurma: codTurma,
        mes: moment().format('MM'),
        ano: moment().format('YYYY'),
      })
    });
    let res= await reqs.json();
    if (res){
      setRespostaChamada(null);
      setMesNominalChamada(null);
      setDiaChamada(null);
      setChamadas(res);
      navigation.navigate('CriarChamada');
    }
  }
  // =========================================================

  // =========================================================
  // FUNÇÃO PARA PESQUISAR SE ALGUM ALUNO RESPONDEU A CHAMADA:
  async function PesquisarRespostas(){
    let reqs = await fetch(config.urlRootNode+'professor/chamada/resposta', {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        codigoChamada: codChamada,
      })
    });
    let res= await reqs.json();
    if (res){
      if (res == '403'){
        null;
      }
      else if (res){
        setRespostaChamada(res);
        PorcentagemPresenca();
      }
    }
}
// =========================================================

// =========================================================
  // FUNÇÃO PARA AJUSTAR A PORCENTAGEM DA CHAMADA:
  async function PorcentagemPresenca(){
    let reqs = await fetch(config.urlRootNode+'professor/porcentagem/chamada', {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        codigoTurma: codTurma,
        codigoChamada: codChamada,
      })
    });
    let res= await reqs.json();
    if (res) {
      if (res[1] == 0){
        setAlunosTurma([1,0]);
      }
      else {
        setPorcentagem1(res);
      }
    }
}
// =========================================================
  
  // =========================================================
  const onRefreshSeach = () => {
    setResfreshing(true);
    PesquisarRespostas();
    setResfreshing(false);
  }
  // =========================================================

  // =========================================================
  return (
  <ImageBackground source={require('../../assets/images/VetorChamada2.png')} resizeMode="cover">
    <SafeAreaView style={style.container}>
        <View style={style.header}>
            <View>
                <Text style={{ fontFamily: "poppinsb", fontSize: 18 }}> Lista de chamada</Text>
                <Text style={{ fontFamily:'poppinsr', fontSize:14, color:'#ADA4A5' , alignSelf:'center' }}>{diaChamada} {mesNominalChamada}</Text>
            </View>
        </View>
        <View style={style.lista}>
          <FlatList
            ListEmptyComponent={EmptyListMessage}
            data={respostaChamada}
            renderItem={({ item }) => (
                <Pressable>
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
                        {item.aluno}
                      </Text>
                    </View>
                  </View>
                </Pressable>
            )}
            refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefreshSeach} />}
          />
        </View>

        <View style={style.voltar}>
            <PressableBtnBack
                click={() => PesquisaChamadas()}
                iconeIo="chevron-back"
            />
        </View>

        <View style={style.seecode}>
          <View style={style.circulo}>
            <IconO style={{alignSelf:'center', marginTop: 10}} name='key' size={30}/>
          </View>
        <Text style={{fontFamily:'poppinsm', fontSize:14, alignSelf:'center', marginTop:8}}>Código da chamada</Text>
        <Pressablesee click={() => setModalActive1(true)}></Pressablesee>
        </View>  
        <View style={style.progress}>
          <ProgressBar titulo='Presença Geral'/>
        </View>

        <View style={style.footer}>
          <View style={{paddingBottom: 35}}>
          {situation && (
            <PressableCircle
              iconeF="unlock"
              click={() => setModalActive2(true)}
            />
          )}
          {!situation && (
            <PressableCircleRed
            iconeF="lock"
            click={() => setModalActive3(true)}
          />
          )}
          </View>
        </View>

        {/* Modais */}

        {/* Modal Código Chamada */}
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
          <View style={{alignItems: 'center'}}>  
            <Text style={{fontFamily: "poppinsb", fontSize: 16, color: "white"}}>
              Código da chamada
            </Text>
            <View style={{backgroundColor:'#fff', width:200, height:39, borderRadius:14, marginTop: 5}}>
              <Text style={{fontFamily:'poppinsr', fontSize:24, alignSelf:'center', marginTop: 3 }}>{codChamada}</Text>
            </View>
          </View>  
          </LinearGradient>
      </View>
      </Modal>

      {/* Modal fechar chamada */}
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
              (Isso irá bloquear a realização desta chamada)
            </Text>
            <View style={style.alinhamento}>
              <PressablesModal
                texto="Sim"
                click={() => DesativarChamada(1)}
              />
              <PressablesModal2
                texto="Não"
                click={() => setModalActive2(false)}
              />
            </View>
          </LinearGradient>
        </View>
      </Modal>

      {/* Modal Reabrir chamada */}
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
              (Isso irá desbloquar a realização desta chamada)
            </Text>
            <View style={style.alinhamento}>
              <PressablesModal
                texto="Sim"
                click={() => DesativarChamada(2)}
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
      right: 15,
      top: 15,
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
})