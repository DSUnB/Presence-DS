import React, { useState } from "react";
import { Text, View, Modal, StyleSheet } from "react-native";
import Pressables from "../../components/pressables";
import { LinearGradient } from 'expo-linear-gradient';
import { Div } from "./styled";
import Inputs from "../../components/inputs";

export default function Main({ navigation }) {

    const [modalActive, setModalActive] = useState(false)

return (
    <Div>
        <Pressables iconeM='login' texto='Login' click={() => setModalActive(true)}/>

        <Modal visible={modalActive} animationType='fade' transparent={true} onRequestClose={() => setModalActive(false)}>
            <View style={style.fundoModal}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#2C5E7A', '#338995']}
                    start={[ 1.0, 0.5 ]}
                    style={style.modal}
                    >
                    <Text style={{fontFamily:'poppinsb', fontSize:15, color:'white'}}>Crie sua turma</Text>
                    <Inputs place="Matéria" iconeF='book'/>
                    <Inputs place="Turma" iconeO='people'/>
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
        width: 350,
        alignItems: 'center'
    }
})
