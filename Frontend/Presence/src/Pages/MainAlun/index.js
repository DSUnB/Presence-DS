import React, { useState } from "react";
import { Text, View, Modal, StyleSheet } from "react-native";
import Pressables from "../../components/pressables";
import PressablesModal from "../../components/pressablesModal";
import { LinearGradient } from 'expo-linear-gradient';
import { Div } from "./styled";
import Inputs from "../../components/inputs";
import IconX from 'react-native-vector-icons/Ionicons';

export default function MainAlun({ navigation }) {


    const [modalActive, setModalActive] = useState(false)

return (
    <Div> 
        
        <View style={style.header}> 
            <Text style={{fontFamily:'poppinsb', fontSize: 18}}> Turmas Inscritas</Text>
             </View>
        
        <View></View>

        <View style={style.botao}>
            <Pressables iconeM='login' texto='Entrar em uma turma' click={() => setModalActive(true)} />
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
                    <Text style={{fontFamily:'poppinsb', fontSize:15, color:'white' }}>Insira o código da turma</Text>
                        <Inputs place="Código" iconeF='book' />

                        <PressablesModal texto='Entrar' click={() => setModalActive(false)}/>
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
    modal:{
        borderRadius: 30,
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

    header:{
        position:"absolute",
        top: 26,

    },

    botao:{
        position:"absolute",
        bottom: 92,


    },

})
