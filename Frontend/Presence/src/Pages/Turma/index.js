import React, { useContext, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList, Pressable, ImageBackground, RefreshControl } from 'react-native';
import PressableBtnBack from '../../components/PressableBtnBack';
import IconP from 'react-native-vector-icons/Ionicons';
import config from "../../config/config.json";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Context } from '../../context/Provider';

const EmptyListMessage = ({item}) => {
  return (
    // Flat List Item
    <View style={{alignItems:'center'}}>
      <Text style={{ fontFamily: "poppinsr", fontSize: 18, textAlign: 'center'}}>
        Ainda não há alunos na sua turma.
      </Text>
      <Text style={{ fontFamily: "poppinsr", fontSize: 12, textAlign: 'center'}}>
        Compartilhe o código da turma para que possam entrar!
      </Text>
    </View>    
  );
};

export default function Turma({ navigation }) {

  // =============================================
  // DECLARAÇÕES DE STATES E CONTEXTOS:

  const {alunosTurma} = useContext(Context);

  const [isRefreshing, setResfreshing] = useState(false);
  const [lastSearchParams, setSearchParams] = useState();

  const onRefreshSeach = () => {
    setResfreshing(true);
    console.log('onrefresh');
    setResfreshing(false);
  }

  // =============================================

  return (
    <ImageBackground source={require('../../assets/images/VetorMain.png')} resizeMode="cover">
      <SafeAreaView style={style.container}>
        <View style={style.header}>
              <View>
                  <Text style={{ fontFamily: "poppinsb", fontSize: 18 }}>Alunos</Text>
              </View>
              <View style={style.voltar}>
                  <PressableBtnBack
                      click={() => navigation.navigate("CriarChamada")}
                      iconeIo="chevron-back"
                  />
              </View>
          </View>
          <View style={style.lista}>
          <FlatList
            data={alunosTurma}
            ListEmptyComponent={EmptyListMessage}
            renderItem={({ item }) => (
              <Pressable onPress={() => navigation.navigate('StatusAlun')}>
                <View style={style.alunos}>
                  <View style={{flexDirection: "row", justifyContent:'space-between'}}>
                  <IconP style={{position:'absolute', alignSelf:'center', marginLeft:14, paddingTop:12, color:'#7B6F72'}} name='person-outline' size={18}/>
                  <Text
                    style={{
                      fontFamily: "poppinsm",
                      fontSize: 14,
                      paddingLeft: 38,
                      paddingTop: 18,
                    }}
                  >
                  {item.nome}
                  </Text>
                  </View>
                </View>
              </Pressable>
            )}
            refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefreshSeach} />}
          />
        </View>   
      </SafeAreaView>
    </ImageBackground>
  )
}

const style = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
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
    voltar: {
      position:"absolute",
      zIndex: 2,
      top: 55,
      left: 20,
    },
    lista: {
      marginTop: 110,
      marginBottom: 15,
    },

    alunos: {
      height: 57,
      borderRadius: 16,
      width: 315,
      backgroundColor: "#D5E9E1",
      marginBottom: 10,
      shadowColor: 'rgb(221,221,221)',
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 3.5,
      
    },

})