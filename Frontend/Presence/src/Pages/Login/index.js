import React, { useState, useEffect, useContext } from "react";
import { Div } from "./styled";
import config from "../../config/config.json";
import { Text, View, StyleSheet, ImageBackground, Keyboard } from "react-native";
import Inputs from "../../components/inputs";
import Pressables from "../../components/pressables";
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputsS from "../../components/inputsenha";
import { Context } from "../../context/Provider";


export default function Login({ navigation }) {

  // =========================================================
  // DECLARAÇÃO DE STATES:
  const [matricula, setMatricula]= useState(null);
  const [senha,setSenha]= useState(null);
  const [message, setMessage]=useState(null);
  const [matToken, setMatToken]=useState(null);
  const [senhaToken, setSenhaToken]=useState(null);
  const {setDADOS} = useContext(Context);
  // =========================================================

  // =========================================================
  // FUNÇÃO PARA ENVIAR 'LOGIN' AO BACKEND:
  async function envLogin(){
    Keyboard.dismiss();
    let reqs = await fetch(config.urlRootNode+'usuario/logar', {
      method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        matricula: matricula,
        senha: senha,
      })
    });
    let res= await reqs.json();
    if(res === '404'){
      setMessage('Matrícula ou Senha incorreta!');
      setTimeout(() => {
      setMessage(null);
    }, 5000);
      await AsyncStorage.clear();
    }
    else if(res === '403'){
      setMessage('Campo Incorreto');
      setTimeout(() => {
      setMessage(null);
    }, 5000);
      await AsyncStorage.clear();
    }
    else {
      await AsyncStorage.setItem('userData', JSON.stringify(res));
      let response = await AsyncStorage.getItem('userData');
      let json = JSON.parse(response);

        if (json.tipoUsuario === false){
          ObterTurmaAlun();
        }
        else{
          ObterTurma();
      }
    }
  }
        // =========================================================
        // FUNÇÃO PARA REQUISITAR 'MOSTRAR TURMA' DO ALUNO AO BACKEND:
        async function ObterTurmaAlun(){
          let response = await AsyncStorage.getItem('userData');
          let json = JSON.parse(response);
          let reqs = await fetch(config.urlRootNode+'aluno/turma/obter', {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                aluno: json.matricula,
            })
        });
        let res= await reqs.json();
        if (res === '403'){
          setMessage('Erro de Autenticação!');
          setTimeout(() => {
            setMessage(null);
            AsyncStorage.clear();
        }, 2000);
        }
        else if (res){
          setDADOS(res)
          Keyboard.dismiss();
          navigation.navigate('MainAlun');
          }
      };
      // =========================================================
      // =========================================================
        // FUNÇÃO PARA REQUISITAR 'MOSTRAR TURMA' DO PROFESSOR AO BACKEND:
        async function ObterTurma(){
            let response = await AsyncStorage.getItem('userData');
            let json = JSON.parse(response);
            let reqs = await fetch(config.urlRootNode+'professor/turma/obter', {
              method: 'POST',
              headers:{
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  professor: json.matricula,
              })
          });
          let res= await reqs.json();
          if (res === '403'){
            setMessage('Erro de Autenticação!');
            setTimeout(() => {
              setMessage(null);
              AsyncStorage.clear();
          }, 2000);
          }
          else if (res){
            setDADOS(res)
            Keyboard.dismiss();
            navigation.navigate('MainProf');
            }
        };
        // =========================================================

  // =========================================================
  
  // =========================================================
  // FUNÇÃO PARA EFETUAR 'LOGIN AUTOMÁTICO' AO BACKEND: (DESATIVADO)
  async function AutoLogin(){
    let reqs = await fetch(config.urlRootNode+'usuario/autologar', {
      method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        matricula: matToken,
        senha: senhaToken,
      })
    });
    let res= await reqs.json();
    if(res === '404' || res === '204'){
      AsyncStorage.clear();
    }
    else{
      await AsyncStorage.setItem('userData', JSON.stringify(res));
      let response = await AsyncStorage.getItem('userData');
      let json = JSON.parse(response);

      if (json.tipoUsuario === false){
        Keyboard.dismiss();
        await AsyncStorage.setItem('userData', JSON.stringify(res));
        navigation.navigate('MainAlun');
      }
      else {
        Keyboard.dismiss();
        await AsyncStorage.setItem('userData', JSON.stringify(res));
        navigation.navigate('MainProf');
      }
    }
  }
  // =========================================================

  // =========================================================
  // TENTATIVA DE REQUISIÇÃO AUTOMÁTICA AO LOGIN COM O BACKEND:
  // useEffect(() => {
  //   AsyncStorage.getItem('userData').then((userData) => {
  //     if (userData != null){
  //       let json = JSON.parse(userData);
  //       setMatToken(json.matricula);
  //       setSenhaToken(json.senha);
  //       AutoLogin();
  //     }
  //     else {null}
  //   })
  // })
  // =========================================================


// =========================================================
// ARQUITETURA DA SCREEN DA APLICAÇÃO:
return (

<ImageBackground source={require('../../assets/images/VetorLogin.png')} resizeMode="cover">
<Div>

  <Text style={{fontFamily:'poppinsb', fontSize:20}}>Bem vindo</Text>
  <Text style={{fontFamily:'poppinsr', fontSize:16, marginBottom:50}}>ao Presence!</Text>

  {message && (
    <Text>{message}</Text>
  )}

  <Inputs place='Matrícula' iconeF='mail' onChange={(text) => setMatricula(text)}/>
  <InputsS place="Senha" iconeMC='lock-outline' onChange={(text) => setSenha(text)}/>
  <Text style={{marginTop: 90}}> </Text>
  <Pressables iconeM='login' texto='Login' click={envLogin}/>
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:30}}>
    <View style={{flex: 1, height: 1 , marginLeft: 40, backgroundColor: '#DDDADA'}} />

      <View>
        <Text style={{width: 40, fontSize:12, textAlign: 'center', fontFamily: 'poppinsr'}}>Ou</Text>
      </View>


      <View style={{ flex:1, height: 1, marginRight: 40, backgroundColor: '#DDDADA'}} />

      </View>
      <View>
      </View>
      <Text style={{fontFamily:'poppinsr', fontSize: 15, marginTop: 18}}>Não tem uma conta ainda?
      <Text style={{color:'white'}}>.  .</Text>                    
        <Text style={styles.hypertexto} onPress={() => navigation.navigate('Form')}> 
          Registre-se
        </Text> 
      </Text>
</Div>
</ImageBackground>
);
}
// =========================================================

// =========================================================
// ESTILIZAÇÕES:
const styles = StyleSheet.create({
  hypertexto: {
    color: '#0D5354',
  }
})
// =========================================================

