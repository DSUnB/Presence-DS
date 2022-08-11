import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import PressablesConf from "../../components/pressablesConf";
import PressableBtnBack from "../../components/PressableBtnBack";
import PressableCircle from "../../components/pressableCircle";
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Feather';


export default function CriarChamada({ navigation }) {
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
            
          </View>
          <Text style={{ fontFamily: "poppinsb", fontSize: 24, textAlign: 'center', paddingLeft: 15, marginTop: 14 }}>AU42ZY</Text>
        </View>

        <View style={style.footer}>
          <View style={{width: 24, height: 24,}}>
            <IconF style={{alignSelf: 'center', color: 'black'}} name='edit' size={23.5}/>
          </View>
          <View style={{paddingBottom: 20}}>
            <PressableCircle
              click={() => navigation.navigate("MainProf")}
              iconeFA5="users"
            >
            </PressableCircle>
          </View>
          <View style={{width: 24, height: 24}}>
            <IconMCI style={{alignSelf: 'center', color: '#DB4E4E'}} name='delete' size={27}/>
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
