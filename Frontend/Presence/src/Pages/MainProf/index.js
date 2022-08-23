import React, { useState, useEffect, useContext } from "react";
import { Text, View, Modal, StyleSheet, FlatList, SafeAreaView, Pressable, BackHandler, Alert, Image, Keyboard,} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Pressables from "../../components/pressables";
import config from "../../config/config.json";
import PressablesModal from "../../components/pressablesModalS";
import PressablesModal2 from "../../components/pressableModalN";
import PressablesConf from "../../components/pressablesConf";
import Inputs from "../../components/inputs";
import IconX from 'react-native-vector-icons/Ionicons';
import { Context } from '../../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';


const EmptyListMessage = ({item}) => {
  return (
    // Flat List Item
    <Text style={{ fontFamily: "poppinsr", fontSize: 18 }}>
      Para começar, crie uma turma!
    </Text>
  );
};

// =========================================================
// GERAÇÃO DE CÓDIGO TURMA:
function codigo() {
    let codigo = '';
    do {
    codigo =  Math.random().toString(36).substring(2)   
    } while(codigo.length > 6)
    // console.log(codigo.toUpperCase());
    return codigo.toUpperCase();
}
// =========================================================

export default function MainProf({ navigation }) {

    // =========================================================
    // ALERTA PARA FECHAR APLICATIVO:
    useEffect(() => {
        const backAction = () => {
            Alert.alert("", "Deseja mesmo sair do app?", [
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

    // =========================================================

    // =========================================================
    // DECLARAÇÃO DE STATES:
    const [modalActive2, setModalActive2] = useState(false);
    const [modalActive3, setModalActive3] = useState(false);
    const [materia, setMateria] = useState(null);
    const [nomeTurma, setNomeTurma] = useState(null);
    const [message, setMessage]=useState(null);
    const [isLoading, setIsLoading]=useState(false);
    const {DADOS, setDADOS} = useContext(Context);
    // =========================================================

    // =========================================================
    // LÓGICA DE LOG-OUT:
    const handleCloseAndRoute = () => {
        setModalActive3(false);
        AsyncStorage.clear();
        navigation.navigate('Login')

    }
    // =========================================================

    // =========================================================
    // FUNÇÃO PARA ENVIO DE DADOS 'CRIAR TURMA' PARA O BACKEND:
    async function CriarTurma(){
      Keyboard.dismiss();
        setIsLoading(true);
        let response = await AsyncStorage.getItem('userData');
        let json = JSON.parse(response);
        if (materia != '' && nomeTurma != ''){
            let reqs = await fetch(config.urlRootNode+'professor/turma/criar', {
                method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: null,
                    codigoTurma: codigo(),
                    curso: materia,
                    nomeTurma: nomeTurma,
                    professor: json.matricula,
                })
            });
            let res= await reqs.json();
            if(res === '403'){
                setMessage('Preencha os Campos!');
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
                setMessage('Turma Criada!');
                setIsLoading(false);
                setTimeout(() => {
                    setMessage(null);
                    setMateria(null);
                    setNomeTurma(null);
                    setModalActive3(false);
                }, 1000);
                
            }
        }
        else{
            setIsLoading(false);
            setMessage('Preencha os Campos!');
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
      let reqs = await fetch(config.urlRootNode+'professor/turma/obter', {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          professor: json.matricula,
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

      <SafeAreaView style={style.container}>
 
      <View style={style.logout}>
        <PressablesConf iconeLo="logout" click={() => setModalActive2(true)} />
      </View>
 
      <View style={style.header}>
        <Text style={{ fontFamily: "poppinsb", fontSize: 18 }}>
          {" "}
          Turmas Ministradas
        </Text>
      </View>


      <View style={style.lista}>
        <FlatList
          data={DADOS}
          ListEmptyComponent={EmptyListMessage}
          renderItem={({ item }) => (
            <Pressable onPress={() => navigation.navigate('CriarChamada')}>
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
          iconeFA5="users"
          texto="Criar uma turma"
          click={() => setModalActive3(true)}
        />
      </View>

      <Modal visible={modalActive2} animationType="fade" transparent={true}>
        <View style={style.fundoModal}>
          <LinearGradient
            start={[1.0, 0.5]}
            style={style.modal2}
            colors={["#2C5E7A", "#338995"]}
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

      <Modal visible={modalActive3} animationType="fade" transparent={true}>
        <View style={style.fundoModal}>
          <LinearGradient
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
            <View style={{alignItems: 'center'}}>
            <Text
              style={{ fontFamily: "poppinsb", fontSize: 15, color: "white", marginTop:5}}
            >
              Crie sua turma
            </Text>
            {message && (
                        <Text>{message}</Text>
                    )}
              <Inputs place="Matéria" iconeF="book" onChange={(text) => setMateria(text)} />
              <Inputs place="Turma" iconeO="people" onChange={(text) => setNomeTurma(text)} />
              </View>
              <View style={{marginTop:15}}>
                
                {isLoading && (
                  <Image style={style.loading} source={require('../../assets/videos/LoadingApp.gif')}/>
                )}

                {!isLoading && (
                  <PressablesModal
                    texto="Criar"
                    click={CriarTurma}
                  />
                )}
                

              </View>
            
          </LinearGradient>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
// =========================================================

// =========================================================
// ESTILIZAÇÕES:
const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  fundoModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
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
  botao: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 110,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  turma: {
    height: 57,
    borderRadius: 16,
    width: 315,
    backgroundColor: "#D5E9E1",
    marginBottom: 15,
  },
  modal: {
    borderRadius: 22,
    width: 340,
    height: 265,
    alignItems: "center",
    justifyContent: "center",
  },
  close: {
    position: 'absolute',
    right: 20,
    top: 20,
    color: "#ffffff",
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
