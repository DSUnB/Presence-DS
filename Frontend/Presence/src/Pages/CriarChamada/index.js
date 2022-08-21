import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Modal, Pressable } from "react-native";
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
import CalendarStrip from 'react-native-calendar-strip';
import IconLu from 'react-native-vector-icons/SimpleLineIcons';
import CalendarPicker from 'react-native-calendar-picker';

export default function CriarChamada({ navigation }) {
  const [modalActive1, setModalActive1] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  const [modalActive3, setModalActive3] = useState(false);

  const handleCloseAndRoute = () => {
    setModalActive2(false);
    navigation.navigate('MainProf')
  }

  const [codigo, setCodigo] = useState('Dani123');

  const Example = () => (
    <View style={style.calendar}>
    <CalendarStrip
      scrollable
      style={{height: 150, width: 400, paddingTop: 30, paddingBottom: 10, paddingLeft: 10, paddingRight: 10}}
      calendarColor={'rgba(0,0,0,0)'}
      calendarHeaderStyle={{color: 'black', fontFamily:"poppinsr", fontSize:18, }}
      dateNumberStyle={{color: 'black', fontFamily:"poppinsr" , fontSize:15}}
      dateNameStyle={{color: 'black', fontFamily:"poppinsr" , fontSize:12}}
      iconContainer={{flex: 0.1}}
      daySelectionAnimation={{type:"border", duration:2, borderWidth:1.5, borderHighlightColor:"#338995"}}
    />
  </View>
);

  return (
    <SafeAreaView style={style.container}>
        <View style={style.header}>
            <View>
                <Text style={{ fontFamily: "poppinsb", fontSize: 18 }}>Cálculo 2 - B</Text>
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

        <View style={style.code}>
          <View style={{width: 55,height: 55, borderRadius: 100, backgroundColor: 'white', position: 'absolute', top: 6, left: 6}}>
            <IconO style={{alignSelf:'center', marginTop: 10}} name='key' size={30}/>
          </View>
          <Text style={{ fontFamily: "poppinsb", fontSize: 24, textAlign: 'center', paddingLeft: 15, marginTop: 14 }}>{codigo}</Text>
        </View>

          <Pressable onPress={() => setModalActive3(true)} >
              <View style={style.search}>
                <IconLu style={{marginTop:15, marginBottom:15, marginLeft:15, color:'#ADA4A5'}}name='magnifier' size={20}/>
                <Text style={{fontFamily:'poppinsr' , fontSize:16, textAlign:'center', color:"#ADA4A5" , marginTop:13,}}> Procure uma data </Text>
              </View>
          </Pressable>

        <View style={style.calendario}>
          <Example></Example>
        </View>

        <View style={{position:"relative", zIndex: 4, top:-200, }}>
          <Pressables
            texto='Criar Chamada'
            click={() => navigation.navigate("Chamada")}
          />
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
              <PressablesModal
                texto="Editar"
                onPress={() => setModalActive1(false)}
              />
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
    position: 'absolute',
    top: 130,
  },
  footer:{
    zIndex: 2,
    position: "absolute",
    flexDirection: "row",
    bottom: 0,
    width: 450,
    height: 70,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 11,
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
  calendar: {
    flex: 1,
  },
  calendario: {
    postion: 'absolute',
    top: 320,
  }, 

  search:{
    height:50,
    borderRadius:16,
    width:315,
    backgroundColor:'white',
    position:"absolute",
    zIndex:4,
    top:230,
    left:-160,
    borderColor:"#2F7286",
    borderWidth:1,
    flexDirection: "row",
    marginTop:52,
  },
  
});
