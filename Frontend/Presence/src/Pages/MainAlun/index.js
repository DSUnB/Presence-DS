import React, { useState } from "react";
import { Text, View, Modal, StyleSheet, FlatList, Pressable } from "react-native";
import Pressables from "../../components/pressables";
import PressablesConf from "../../components/pressablesconf copy";
import PressablesModal from "../../components/pressablesModalS";
import PressablesModal2 from "../../components/pressableModalN";
import { LinearGradient } from "expo-linear-gradient";
import { Div } from "./styled";
import Inputs from "../../components/inputs";
import IconX from "react-native-vector-icons/Ionicons";

export default function MainAlun({ navigation }) {
    const DADOS = [
        { key: "Fisica 1", turm: "A" },
        { key: "Fisica 2", turm: "B" },
        { key: "Fisica 3", turm: "C" },
        { key: "Fisica 4", turm: "D" },
        { key: "Fisica 5", turm: "E" },
        { key: "Fisica 6", turm: "F" },
        { key: "Fisica 7", turm: "G" },
        { key: "Fisica 8", turm: "H" },
        { key: "Fisica 9", turm: "I" },
        { key: "Fisica 10", turm: "J" },
        { key: "Fisica 11", turm: "K" },
        { key: "Fisica 12", turm: "L" },
        { key: "Fisica 13", turm: "M" },
      ];


  const [modalActive2, setModalActive2] = useState(false);
  const [modalActive3, setModalActive3] = useState(false);

  const handleCloseAndRoute = () => {
    setModalActive2(false);
    navigation.navigate("Login");
  };

  return (
    <Div>
      <View style={style.logout}>
        <PressablesConf iconeLo="logout" click={() => setModalActive2(true)} />
      </View>

      <View style={style.header}>
        <Text style={{ fontFamily: "poppinsb", fontSize: 18 }}>
          Turmas Inscritas
        </Text>
      </View>

      <View style={style.lista}>
        <FlatList
          data={DADOS}
          renderItem={({ item }) => (
            <Pressable>
              <View style={style.turma}>
                <Text
                  style={{
                    fontFamily: "poppinsm",
                    fontSize: 14,
                    paddingLeft: 20,
                    paddingTop: 18,
                  }}
                >
                  {item.key} - {item.turm}
                </Text>
              </View>
            </Pressable>
          )}
        ></FlatList>
      </View>

      <View style={style.botao}>
        <Pressables
          iconeM="login"
          texto="Entrar em uma turma"
          click={() => setModalActive3(true)}
        />
      </View>
      <Modal visible={modalActive3} animationType="fade" transparent={true}>
        <View style={style.fundoModal}>
          <LinearGradient
            // Button Linear Gradient
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
            <Text
              style={{ fontFamily: "poppinsb", fontSize: 15, color: "white" }}
            >
              Insira o código da turma
            </Text>
            <Inputs place="Código" iconeF="book" />

            <PressablesModal
              texto="Entrar"
              click={() => setModalActive3(false)}
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
    </Div>
  );
}

const style = StyleSheet.create({
  fundoModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
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

  modal: {
    borderRadius: 22,
    padding: 35,
    width: 335,
    height: 220,
    alignItems: "center",
    justifyContent: "space-around",
  },
  close: {
    color: "#ffffff",
    position: "absolute",
    right: 20,
    top: 20,
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
  }
});
