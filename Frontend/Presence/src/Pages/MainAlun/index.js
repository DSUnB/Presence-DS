import React, { useState } from "react";
import { Text, View, Modal, StyleSheet } from "react-native";
import Pressables from "../../components/pressables";
import PressablesModal from "../../components/pressablesModalS";
import PressablesModal2 from "../../components/pressableModalN";
import { LinearGradient } from 'expo-linear-gradient';
import { Div } from "./styled";
import Inputs from "../../components/inputs";
import IconX from 'react-native-vector-icons/Ionicons';
//import PressablesConf from "../../components/pressablesConf";

export default function MainAlun({ navigation }) {

    const [modalActive2, setModalActive2] = useState(false)
    const [modalActive3, setModalActive3] = useState(false)

    const handleCloseAndRoute = () => {
        setModalActive2(false)
        navigation.navigate('Login')
    }   

return (
    <Div> 
        
        <View style={style.header}>
            {/* <PressablesConf iconeLo='logout' click={() => setModalActive2(true)}/> */}
            <Text style={{fontFamily:'poppinsb', fontSize: 18}}> Turmas Inscritas</Text>
             </View>
        
        <View></View>

        <View style={style.botao}>
            <Pressables iconeM='login' texto='Entrar em uma turma' click={() => setModalActive3(true)} />
        </View>
        <Modal visible={modalActive3} animationType='fade' transparent={true} >
            <View style={style.fundoModal}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#2C5E7A', '#338995']}
                    start={[ 1.0, 0.5 ]}
                    style={style.modal}
                >
                    <IconX style={style.close} name='close-circle' size={30} onPress={() => setModalActive3(false)}/>
                    <Text style={{fontFamily:'poppinsb', fontSize:15, color:'white' }}>Insira o código da turma</Text>
                        <Inputs place="Código" iconeF='book' />

                        <PressablesModal texto='Entrar' click={() => setModalActive3(false)}/>
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
                    <View style={style.alinhamento}>
                        <PressablesModal texto='Sim' click={() =>  handleCloseAndRoute()}/>
                        <PressablesModal2 texto='Não' click={() => setModalActive2(false)}/>
                    </View>
                  </LinearGradient>
            </View>
        </Modal>
    </Div>
);
}

const style = StyleSheet.create({
    fundoModal:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    header:{
        position:"absolute",
        top: 75,
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
    alinhamento:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})
