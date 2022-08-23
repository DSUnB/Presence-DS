import React, { useState, useEffect, useContext } from "react";
import { Text, View, Modal, StyleSheet, FlatList, SafeAreaView, Pressable, BackHandler, Alert, Image, Keyboard,
} from "react-native";
import Pressables from "../../components/pressables";
import config from "../../config/config.json";
import PressablesConf from "../../components/pressablesConf";
import PressablesModal from "../../components/pressablesModalS";
import PressablesModal2 from "../../components/pressableModalN";
import { LinearGradient } from "expo-linear-gradient";
import { Div } from "./styled";
import Inputs from "../../components/inputs";
import IconX from 'react-native-vector-icons/Ionicons';
import { Context } from '../../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IconC from 'react-native-vector-icons/FontAwesome';
import IconA from 'react-native-vector-icons/Feather';

export default function MainAlun({ navigation }) {

    // =========================================================
    // ALERTA PARA FECHAR APLICATIVO:
    useEffect(() => {
        const backAction = () => {
            Alert.alert("Alerta!", "Deseja mesmo sair do app?", [
                {
                    text: "Não",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "Sim", onPress: () => {
                    //navigation.navigate('Login');
                    BackHandler.exitApp();
                    }
                }
            ]);
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
    
        return () => backHandler.remove();
    }, []);

  // =========================================================
  // DECLARAÇÃO DE STATES:
  const [modalActive2, setModalActive2] = useState(false);
  const [modalActive3, setModalActive3] = useState(false);
  const [codigo, setCodigo] = useState(null);
  const [message, setMessage] = useState(null);
  const [message2, setMessage2] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {DADOS, setDADOS} = useContext(Context);

  // =========================================================

  // =========================================================
  // LÓGICA DE LOG-OUT:
  const handleCloseAndRoute = () => {
    setModalActive2(false);
    AsyncStorage.clear();
    navigation.navigate("Login");
  };
  // =========================================================

  // =========================================================
  // FUNÇÃO PARA ENVIO DE DADOS 'ENTRAR TURMA' PARA O BACKEND:
  async function EntrarTurmas(){
    Keyboard.dismiss();
      setIsLoading(true);
        let response = await AsyncStorage.getItem('userData');
        let json = JSON.parse(response);
        if (codigo != '' ){
          let reqs = await fetch(config.urlRootNode+'aluno/turma/entrar', {
              method: 'POST',
              headers:{
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  aluno: json.matricula,
                  codigoTurma: codigo.toUpperCase(),
              })                 
          });
          let res= await reqs.json();
          if(res === '403'){
              setMessage('Turma já existente!');
              setIsLoading(false);
              setTimeout(() => {
                  setMessage(null);
              }, 2000);
          }
          else if(res === '404'){
            setMessage('Erro de Autenticação!');
            setIsLoading(false);
            setTimeout(() => {
                setMessage(null);
                AsyncStorage.clear();
                navigation.navigate('Login')
            }, 2000);
          }
          else{
            AtualizarTurma()
            setMessage2('Turma Encontrada!');
            setIsLoading(false);
            setTimeout(() => {
                setMessage2(null);
                setModalActive3(false);
            }, 1000);
              
          }
        }
        else{
            setIsLoading(false);
            setMessage('Preencha o Campo!');
                setTimeout(() => {
                    setMessage(null);
                }, 2000);
        }
  }
  // =========================================================
  
  // =========================================================
    // FUNÇÃO PARA ATUALIZAR A LISTA DE TURMAS:
    async function AtualizarTurma(){
      let response = await AsyncStorage.getItem('userData');
      let json = JSON.parse(response);
      let reqs = await fetch(config.urlRootNode+'aluno/turma/obter', {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          aluno: json.matricula,
        })
      });
      let res= await reqs.json();
      if(res === '403'){
        null
      }
      else{
        setDADOS(res)
      }
    }
  // =========================================================
  // =========================================================
  // ARQUITETURA DA SCREEN DA APLICAÇÃO:
  return (
    <Div>
      <View style={style.logout}>
        <PressablesConf iconeLo="logout" click={() => setModalActive2(true)} />
      </View>

      <View style={style.header}>
        <Text style={{ fontFamily: "poppinsb", fontSize: 18 }}>
          Turmas Inscritas
        </Text>
      </View>

      <View style={style.lista}>
        <FlatList
          data={DADOS}
          renderItem={({ item }) => (
            <Pressable onPress={() => navigation.navigate('ValidarChamada')}>
              <View style={style.turma}>
                <Text
                  style={{
                    fontFamily: "poppinsm",
                    fontSize: 14,
                    paddingLeft: 20,
                    paddingTop: 18,
                  }}
                >
                  {item.curso} - {item.nomeTurma}
                </Text>
              </View>
            </Pressable>
          )}
        ></FlatList>
      </View>

      <View style={style.botao}>
        <Pressables
          iconeM="login"
          texto="Entrar em uma turma"
          click={() => setModalActive3(true)}
        />
      </View>
      <Modal visible={modalActive3} animationType="fade" transparent={true}>
        <View style={style.fundoModal}>
          <LinearGradient
            // Button Linear Gradient
            colors={["#2C5E7A", "#338995"]}
            start={[1.0, 0.5]}
            style={style.modal}
          >
            <IconX
              style={style.close}
              name="close-circle"
              size={30}
              onPress={() => setModalActive3(false)}
            />
            <Text
              style={{ fontFamily: "poppinsb", fontSize: 15, color: "white" }}
            >
              Insira o código da turma
            </Text>
            {message && (
                <View style={{display:'flex' , flexDirection:'row'}}>
                <IconA name='alert-triangle' size={20} style={{marginRight:10, color:'#fff'}}/>
                <Text style={{fontFamily:'poppinsr', fontSize:15, color:'#fff'}}>{message}</Text>
                </View>
                    )}

            {message2 && (
              <View style={{display:'flex' , flexDirection:'row'}}>
              <IconC name='check-circle-o' size={20} style={{marginRight:10, color:'#fff'}}/>
              <Text style={{fontFamily:'poppinsr', fontSize:15, color:'#fff'}}>{message2}</Text>
              </View>
                    )}
            <Inputs place="Código" iconeF="book" onChange={(text) => setCodigo(text)}/>
            
            {isLoading && (
              <Image style={style.loading} source={require('../../assets/videos/LoadingApp.gif')}/>
            )}

            {!isLoading && (
              <PressablesModal
                texto="Entrar"
                click={EntrarTurmas}
              />
            )}  
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
              style={{ fontFamily: "poppinsb", fontSize: 15, color: "white", paddingBottom: 50 }}
            >
              Deseja mesmo sair?
            </Text>
            <View style={style.alinhamento}>
              <PressablesModal
                texto="Sim"
                click={() => handleCloseAndRoute()}
              />
              <PressablesModal2
                texto="Não"
                click={() => setModalActive2(false)}
              />
            </View>
          </LinearGradient>
        </View>
      </Modal>
    </Div>
  );
}

const style = StyleSheet.create({
  fundoModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
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

  botao:{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 110,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},

turma:{
    height:57,
    borderRadius:16,
    width:315,
    backgroundColor:'#D5E9E1',
    marginBottom:15,

},

  modal: {
    borderRadius: 22,
    padding: 35,
    width: 335,
    height: 220,
    alignItems: "center",
    justifyContent: "space-around",
  },
  close: {
    color: "#ffffff",
    position: "absolute",
    right: 20,
    top: 20,
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
  lista: {
    marginTop: 110,
    marginBottom: 110,
  },
  logout:{
    position:"absolute",
      zIndex: 2,
      top: 55,
      right: 20,
  },
  loading:{
    height: 30,
    width: 140,
  }
});
