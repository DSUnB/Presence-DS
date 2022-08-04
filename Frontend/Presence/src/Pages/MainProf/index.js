import React, { useState } from "react";
import { Text, View, Modal, StyleSheet, FlatList, SafeAreaView, Pressable, ScrollView } from "react-native";
import Pressables from "../../components/pressables";
import PressablesModal from "../../components/pressablesModalS";
import PressablesModal2 from "../../components/pressableModalN";
import { LinearGradient } from 'expo-linear-gradient';
import Inputs from "../../components/inputs";
import IconX from 'react-native-vector-icons/Ionicons';
import PressablesConf from "../../components/pressablesConf/index";

export default function Main({ navigation }) {
    const DADOS = [
        {key: 'Fisica 1', turm: 'A'},
        {key: 'Fisica 2', turm: 'B'},
        {key: 'Fisica 3', turm: 'C'},
        {key: 'Fisica 4', turm: 'D'},
        {key: 'Fisica 5', turm: 'E'},
        {key: 'Fisica 6', turm: 'F'},
        {key: 'Fisica 7', turm: 'G'},
        {key: 'Fisica 8', turm: 'H'},
        {key: 'Fisica 9', turm: 'I'},
        {key: 'Fisica 10', turm: 'J'},
        {key: 'Fisica 11', turm: 'K'},
        {key: 'Fisica 12', turm: 'L'},
        {key: 'Fisica 13', turm: 'M'},
    ];


    const [modalActive2, setModalActive2] = useState(false)
    const [modalActive3, setModalActive3] = useState(false)

    const handleCloseAndRoute = () => {
        setModalActive2(false)
        navigation.navigate('Login')
    }  


return (
    <SafeAreaView style={style.container}>
        <View style={style.header}> 
            <Text style={{fontFamily:'poppinsb', fontSize: 18}}> Turmas Ministradas</Text>
            <PressablesConf iconeLo='logout' click={() => setModalActive2(true)}/>
        </View>

        <View style={style.lista}>
            <FlatList 
                data={DADOS}
                renderItem={({item}) =>
                    <Pressable>
                        <View style={style.turma}>
                        <Text style={{fontFamily:'poppinsm', fontSize: 14, paddingLeft: 20, paddingTop:18, }}>{item.key} - {item.turm}</Text>
                        </View>
                    </Pressable>
                }>
                
            </FlatList>
        </View>


        <View style={style.botao}>
            <Pressables iconeFA5='users' texto='Criar uma turma' click={() => setModalActive3(true)}/>
        </View>


        <Modal visible={modalActive2} animationType='fade' transparent={true}>
            <View style={style.fundoModal}>
                <LinearGradient
                  start={[ 1.0, 0.5 ]}
                  style={style.modal2}
                  colors={['#2C5E7A', '#338995']}
                >
                    
                    <Text style={{fontFamily:'poppinsb', fontSize:15, color:'white' }}>Deseja mesmo sair?</Text>
                    <View style={style.alinhamento}>
                        <PressablesModal texto='Sim' click={() =>  handleCloseAndRoute()}/>
                        <PressablesModal2 texto='Não' click={() => setModalActive2(false)}/>
                    </View>
                  </LinearGradient>
            </View>
        </Modal>

        <Modal visible={modalActive3} animationType='fade' transparent={true} >
            <View style={style.fundoModal}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#2C5E7A', '#338995']}
                    start={[ 1.0, 0.5 ]}
                    style={style.modal}
                >
                    <IconX style={style.close} name='close-circle' size={30} onPress={() => setModalActive3(false)}/>
                    <Text style={{fontFamily:'poppinsb', fontSize:15, color:'white' }}>Crie sua turma</Text>
                        <Inputs place="Matéria" iconeF='book' />
                        <Inputs place="Turma" iconeO='people'/>
                        <PressablesModal texto='Criar' click={() => setModalActive3(false)}/>
                </LinearGradient>
            </View>
        </Modal>
    
    </SafeAreaView>
); 
}

const style = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    fundoModal:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    header:{
        zIndex: 1,
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        width: '100%',
        height: 110,
        paddingTop: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
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
    },
    lista:{
        marginTop: 110,
        marginBottom: 110,
    }
})
