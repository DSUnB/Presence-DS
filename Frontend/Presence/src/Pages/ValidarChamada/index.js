import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import PressablesConf from "../../components/pressablesConf";
import PressableBtnBack from "../../components/PressableBtnBack";
import PressableCircle from "../../components/pressableCircle";
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconO from 'react-native-vector-icons/Octicons';
import IconLo from 'react-native-vector-icons/MaterialIcons';


export default function ValidarChamada({ navigation }) {
  return (
    <SafeAreaView style={style.container}>
        <View style={style.header}>
            <View>
                <Text style={{ fontFamily: "poppinsb", fontSize: 18 }}>Física 1 - A</Text>
            </View>
            <View style={style.voltar}>
                <PressableBtnBack
                    click={() => navigation.navigate("MainAlun")}
                    iconeIo="chevron-back"
                />
            </View>
            <View style={style.opcoes}>    
                <PressablesConf
                    iconeSLI="options"
                    click={() => navigation.navigate("MainProf")}
                />
            </View>
        </View>


        <View style={style.footer}>
          <View style={{width: 24, height: 24,}}>
            <IconO style={{alignSelf: 'center', color: 'black'}} name='megaphone' size={23.5}/>
          </View>
          <View style={{paddingBottom: 20}}>
            <PressableCircle
              click={() => navigation.navigate("MainProf")}
              iconeMCI="calendar-multiple-check"
            >
            </PressableCircle>
          </View>
          <View style={{width: 27, height: 27}}>
            <IconLo style={{alignSelf: 'center', color: '#DB4E4E'}} name='logout' size={27}/>
          </View>
        </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
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
    width: "100%",
    height: 80,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  }
});
