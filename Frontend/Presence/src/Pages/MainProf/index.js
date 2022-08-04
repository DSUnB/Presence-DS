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

export default function MainProf({ navigation }) {

    const [modalActive, setModalActive] = useState(false)
    const [modalActive2, setModalActive2] = useState(false)

    const handleCloseAndRoute = () => {
        setModalActive2(false)
        navigation.navigate('Login')

    }

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
                        <Inputs place="Matéria" iconeF='book' />
                        <Inputs place="Turma" iconeO='people'/>
                        <PressablesModal texto='Criar' click={() => setModalActive(false)}/>
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
