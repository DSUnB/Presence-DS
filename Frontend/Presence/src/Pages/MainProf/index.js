import React, { useState, useEffect } from "react";
import { Text, View, Modal, StyleSheet, BackHandler, Alert } from "react-native";
import Pressables from "../../components/pressables";
import PressablesModal from "../../components/pressablesModalS";
import PressablesModal2 from "../../components/pressableModalN";
import { LinearGradient } from 'expo-linear-gradient';
import { Div } from "./styled";
import Inputs from "../../components/inputs";
import IconX from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

    // =========================================================
    // DECLARAÇÃO DE STATES:
    const [modalActive, setModalActive] = useState(false)
    const [modalActive2, setModalActive2] = useState(false)
    const [materia, setMateria] = useState(null)
    const [nomeTurma, setNomeTurma] = useState(null)
    const [message, setMessage]=useState(null);
    // =========================================================

    // =========================================================
    // LÓGICA DE LOG-OUT:
    const handleCloseAndRoute = () => {
        setModalActive2(false)
        navigation.navigate('Login')

    }
    // =========================================================

    // =========================================================
    // FUNÇÃO PARA ENVIO DE DADOS 'CRIAR TURMA' PARA O BACKEND:
    async function CriarTurma(){
        let response = await AsyncStorage.getItem('userData');
        let json = JSON.parse(response);
        if (materia != '' || nomeTurma != ''){
            let reqs = await fetch('http://192.168.0.10:3000/turmac', {
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
            if(res === 'error'){
                setMessage('Preencha os Campos!');
                setTimeout(() => {
                    setMessage(null);
                }, 2000);
            }
            else{
                setMessage('Turma Criada!');
                setTimeout(() => {
                    setMessage(null);
                    setMateria(null);
                    setNomeTurma(null);
                }, 4000);
                setModalActive(false);
            }
        }
        else{
            setMessage('Preencha os Campos!');
                setTimeout(() => {
                    setMessage(null);
                }, 2000);
        }
    }
    // =========================================================

// =========================================================
// ARQUITETURA DA SCREEN DA APLICAÇÃO:
return (
    <Div> 
        <View style={style.header}> 
        {/* <PressablesConf iconeLo='logout' click={() => setModalActive2(true)}/>  */}
        <Text style={{fontFamily:'poppinsb', fontSize: 18}}> Turmas Ministradas</Text>
        </View>
        
        <View style={style.botao}>
        <Pressables iconeFA5='users' texto='Criar uma turma' click={() => setModalActive(true)}/>
        </View>

        <Modal visible={modalActive} animationType='fade' transparent={true} >
            <View style={style.fundoModal}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#2C5E7A', '#338995']}
                    start={[ 1.0, 0.5 ]}
                    style={style.modal}
                >
                    <IconX style={style.close} name='close-circle' size={30} onPress={() => setModalActive(false)}/>
                    <Text style={{fontFamily:'poppinsb', fontSize:15, color:'white' }}>Crie sua turma</Text>
                    {message && (
                        <Text>{message}</Text>
                    )}
                        <Inputs place="Matéria" iconeF='book' onChange={(text) => setMateria(text)}/>
                        <Inputs place="Turma" iconeO='people'onChange={(text) => setNomeTurma(text)}/>
                        <PressablesModal texto='Criar' click={CriarTurma}/>
                </LinearGradient>
            </View>
        </Modal>
        <Modal visible={modalActive2} animationType='fade' transparent={true} >
            <View style={style.fundoModal}>
                <LinearGradient
                  colors={['#2C5E7A', '#338995']}
                  start={[ 1.0, 0.5 ]}
                  style={style.modal2}>
                    
                    <Text style={{fontFamily:'poppinsb', fontSize:15, color:'white' }}>Deseja mesmo sair?</Text>
                    <View>
                    <PressablesModal texto='Sim' click={() =>  handleCloseAndRoute()}/>
                    <PressablesModal2 texto='Não' click={() => setModalActive2(false)}/>
                    </View>
                  </LinearGradient>
            </View>
        </Modal>
    </Div>
);
}
// =========================================================

// =========================================================
// ESTILIZAÇÕES:
const style = StyleSheet.create({
    fundoModal:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    header:{
        position:"absolute",
        top: 26,
    },    
    botao:{
            position:"absolute",
            bottom: 92,
    },
    modal:{
        borderRadius: 22,
        padding: 35,
        width: 335,
        height: 220,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    close:{
        color:"#ffffff",
        position: "absolute",
        right: 20,
        top: 20,
    },
    modal2:{
        width:275,
        height:173,
        borderRadius:22,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
})
// =========================================================

