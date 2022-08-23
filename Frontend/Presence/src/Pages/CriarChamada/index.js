import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Modal, Pressable, FlatList, TouchableOpacity } from "react-native";
import PressablesConf from "../../components/pressablesConf";
import PressableBtnBack from "../../components/PressableBtnBack";
import PressableCircle from "../../components/pressableCircle";
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Feather';
import IconO from 'react-native-vector-icons/Octicons';
import IconX from 'react-native-vector-icons/Ionicons';
import Pressables from "../../components/pressables";
import PressablesModal from "../../components/pressablesModalS";
import PressablesModal2 from "../../components/pressableModalN";
import { LinearGradient } from "expo-linear-gradient";
import Inputs from "../../components/inputs";
import IconLu from 'react-native-vector-icons/SimpleLineIcons';
import Calendar from '../../components/Calendar';
import DatePicker from 'react-native-modern-datepicker';

export default function CriarChamada({ navigation }) {

  const DATA = [
    {
      dia: 'Ter',
      data: '12',
    },
    {
      dia: 'Qua',
      data: '13',
    },
    {
      dia: 'Qui',
      data: '14',
    },
    {
      dia: 'Sex',
      data: '15',
    },
    {
      dia: 'Sab',
      data: '16',
    },
    {
      dia: 'Dom',
      data: '17',
    },
  ]

 
  const [date, setDate] = useState('');



  //Const's criados para o aparecimento e desaparecimento dos modais

  const [modalActive1, setModalActive1] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  const [modalActive3, setModalActive3] = useState(false);


  //Const para fechar modal e mudar de página
  const handleCloseAndRoute = () => {
    setModalActive2(false);
    navigation.navigate('MainProf')
  }

  // Const's criados para a mudança do título e código da turma

  const [codigo, setCodigo] = useState('83H5RY');
  const [turma, setTurma] = useState('Cálculo 2 - B');

  // Início da criação da página

  return (
    <SafeAreaView style={style.container}>
        <View style={style.header}>
            <View>
                <Text style={{ fontFamily: "poppinsb", fontSize: 18 }}>{turma}</Text>
            </View>
            <View style={style.voltar}>
                <PressableBtnBack
                    click={() => navigation.navigate("MainProf")}
                    iconeIo="chevron-back"
                />
            </View>
            <View style={style.opcoes}>    
                <PressablesConf
                    iconeSLI="options"
                    click={() => navigation.navigate("MainAlun")}
                />
            </View>
        </View>

      <View style={{marginTop: 90, marginBottom: 75, height:'70%', justifyContent: "space-around", alignItems: 'center',}}>
        <View style={style.code}>
          <View style={{width: 55,height: 55, borderRadius: 100, backgroundColor: 'white', position: 'absolute', top: 6, left: 6}}>
            <IconO style={{alignSelf:'center', marginTop: 10}} name='key' size={30}/>
          </View>
          <Text style={{ fontFamily: "poppinsb", fontSize: 24, textAlign: 'center', paddingLeft: 15, marginTop: 14 }}>{codigo}</Text>
        </View>

      
        <Pressable onPress={() => setModalActive3(true)}>
            <View style={style.search}>
              <IconLu style={{marginTop:15, marginBottom:15, marginLeft:15, color:'#ADA4A5'}}name='magnifier' size={20}/>
              <Text style={{fontFamily:'poppinsr' , fontSize:16, textAlign:'center', color:"#ADA4A5" , marginTop:13,}}> Procure por um mês </Text>
            </View>
        </Pressable>

        <View style={{height: 130}}>
          <Text style={{ fontFamily: "poppinsr", color: '#ADA4A5', textAlign:'center', fontSize: 17}}>{date}</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={DATA}
              renderItem={({ item }) => (
                <TouchableOpacity style={style.chamada} underlayColor="#46B297" onPress={() => navigation.navigate('Chamada')}
                >
                  
                    <View style={{alignSelf: 'center',  justifyContent: 'center', top: '25%'}}>
                      <Text style={{ fontFamily: "poppinsr", fontSize: 15, textAlign: 'center', marginBottom: 3 }}>{item.dia}</Text>
                      <Text style={{ fontFamily: "poppinsr", fontSize: 17, textAlign: 'center', marginTop: 3 }}>{item.data}</Text>
                    </View>
                  
                </TouchableOpacity>
              )}
            >
            </FlatList>
        </View>


        <View style={{zIndex: 4}}>
          <Pressables
            texto='Criar Chamada'
            click={() => navigation.navigate("Chamada")}
          />
        </View>
      </View>

        <View style={style.footer}>
          <View style={{width: 24, height: 24,}}>
            <IconF style={{alignSelf: 'center', color: '#ADA4A5'}} name='edit' size={23.5} onPress={() => setModalActive1(true)}/>
          </View>
          <View style={{paddingBottom: 35}}>
            <PressableCircle
              click={() => navigation.navigate("Turma")}
              iconeFA5="users"
            >
            </PressableCircle>
          </View>
          <View style={{width: 24, height: 24}}>
            <IconMCI style={{alignSelf: 'center', color: '#DB4E4E'}} name='delete' size={27} onPress={() => setModalActive2(true)}/>
          </View>
        </View>



        {/* Modais */}
        {/* Modal Edit */}
        <Modal visible={modalActive1} animationType="fade" transparent={true}>
          <View style={style.fundoModal}>
            <LinearGradient
              colors={["#2C5E7A", "#338995"]}
              start={[1.0, 0.5]}
              style={style.modal1}
            >
              <IconX
                style={style.close}
                name="close-circle"
                size={30}
                onPress={() => setModalActive1(false)}
              />
              <View style={{alignItems: 'center'}}>
                <Text style={{ fontFamily: "poppinsb", fontSize: 15, color: "white", marginTop:5}}>
                  Editar sua turma
                </Text>
                <Inputs place="Nova Matéria" iconeF="book"/>
                <Inputs place="Nova Turma" iconeO="people"/>
              </View>
              <View style={{marginTop:15}}>
                <PressablesModal
                  texto="Editar"
                  click={() => setModalActive1(false)}
                />
              </View>
            </LinearGradient>
          </View>
        </Modal>

        {/* Modal Delete */}
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
              Deseja deletar essa turma?
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

      {/* Modal Calendário */}
      <Modal visible={modalActive3} animationType="fade" transparent={true}>
          <View style={style.fundoModal}>
            <LinearGradient
              colors={["#2C5E7A", "#338995"]}
              start={[1.0, 1.0]}
              style={style.modal3}
            >
              <IconX
                style={style.close}
                name="close-circle"
                size={30}
                onPress={() => setModalActive3(false)}
              />
              <DatePicker
                options={{
                  backgroundColor: 'rgba(44,94,122,0)',
                  textHeaderColor: 'white',
                  textDefaultColor: 'white',
                  selectedTextColor: 'black',
                  mainColor: '#69D498',
                  textSecondaryColor: '#9DCEFF',
                  borderColor: 'rgba(122, 146, 165, 0.6)',
                  defaultFont: 'poppinsr',
                  headerFont: 'poppinsb',
                }}
                mode="monthYear"

                onMonthYearChange={selectedDate => setDate(selectedDate)}
                style={{ borderRadius: 10, marginTop: 5 }}
              />
              <View style={{height: 36, width: 91, position: 'absolute', bottom: 38}}>
                <PressablesModal
                    texto="Ok"
                    click={() => setModalActive3(false)}
                  />
              </View>
            </LinearGradient>
          </View>
        </Modal>

    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
  },
  header: {
    zIndex: 2,
    position: "absolute",
    top: 0,
    width: "100%",
    height: 110,
    paddingTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
  code: {
    width: 319,
    height: 68,
    borderRadius: 20,
    backgroundColor: '#DFF5EB',
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
  fundoModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  modal1: {
    borderRadius: 22,
    width: 340,
    height: 265,
    alignItems: "center",
    justifyContent: "center",
  },
  modal3: {
    borderRadius: 22,
    width: 340,
    height: 460,
    alignItems: "center",
    justifyContent: "center",
  },
  close: {
    position: 'absolute',
    right: 20,
    top: 20,
    color: "#ffffff",
    zIndex: 2,
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
  search:{
    height:50,
    borderRadius:16,
    width:315,
    backgroundColor:'white',
    
    zIndex:4,
    
    borderBottomColor:"#2F7286",
    borderWidth:1,
    flexDirection: "row",
  },
  chamada:{
    width: 73,
    height: 98,
    borderRadius: 12,
    backgroundColor: '#F7F8F8',
    marginLeft: 2,
    marginRight: 2,
    borderColor: 'black',
  },
});