import React, { useState } from "react";
import { Text, View, Modal, StyleSheet, ProgressViewIOSComponent } from "react-native";
import Pressables from "../../components/pressables";
import PressablesModal from "../../components/pressablesModal";
import { LinearGradient } from 'expo-linear-gradient';
import { Div } from "./styled";
import Inputs from "../../components/inputs";
import IconX from 'react-native-vector-icons/Ionicons';

export default function Main({ navigation }) {

    const [modalActive, setModalActive] = useState(false)

return (
    <Div> 
        <Pressables iconeFA5='users' texto='Criar uma turma' click={() => setModalActive(true)}/>

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
        height: 315,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    close:{
        color:"#ffffff",
        position: "absolute",
        right: 20,
        top: 20,
    }
})
