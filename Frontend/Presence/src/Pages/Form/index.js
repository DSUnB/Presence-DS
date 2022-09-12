import React, { useEffect, useState } from "react";
import { Div } from "./styled";
import { Text, View, StyleSheet, ImageBackground, Keyboard } from "react-native";
import config from "../../config/config.json";
import { Checkbox } from 'react-native-paper';
import Inputs from "../../components/inputs";
import Pressables from "../../components/pressables";
import InputsS from "../../components/inputsenha";
import PressableBtnBack from "../../components/PressableBtnBack";
import IconA from 'react-native-vector-icons/Feather';
import IconC from 'react-native-vector-icons/FontAwesome';
import { Context } from "../../context/Provider";


export default function Form({ navigation }) {

  // ==================================================================
  // CRIAÇÃO DE STATES:
  const [name, setName]=useState(null);
  const [matricula, setMatricula]=useState(null);
  const [email, setEmail]=useState(null);
  const [password, setPassword]=useState(null);
  const [passwordConfirm, setPasswordConfirm]=useState(null);
  const [checked, setChecked]=useState(false);
  const [message, setMessage]=useState(null);
  const [message2, setMessage2]=useState(null);
  // ==================================================================

  // ==================================================================
  // FUNÇÃO PARA ENVIO DE CADASTRO AO BACKEND:
  async function Registro(){
    Keyboard.dismiss();
    if (name === null && matricula === null && email === null && password === null) {
      setMessage(null);
      setMessage('Preencha todos os Campos!');
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
    else if (name === '' && matricula === '' && email === '' && password === '') {
      setMessage(null);
      setMessage('Preencha todos os Campos!');
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
    else if (checked == false && matricula.length > 9){
      setMessage(null);
      setMessage('Insira matrícula de 9 dígitos!');
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
    else if (checked == true && matricula.length != 11){
      setMessage(null);
      setMessage('Insira matrícula de 11 dígitos!');
        setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
    else if (checked == true && matricula.length == 11 && email.indexOf('@unb.br') == -1){
      setMessage(null);
      setMessage('Insira o email institucional de professor!');
        setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
    else if (checked == false && matricula.length == 9 && email.indexOf('@aluno.unb.br') == -1){
      setMessage(null);
      setMessage('Insira o email institucional de aluno!');
        setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
    else if (password === passwordConfirm && name != '' && matricula != '' && email != '' && password != '' && name != null && matricula != null && email != null && password != null && matricula.length >= 9 && name.length > 10){
      let reqs = await fetch(config.urlRootNode+'usuario/cadastrar', {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: null,
        matricula: matricula,
        nome: name,
        emailInstitucional: email,
        senha: password,
        tipoUsuario: checked,
      })
    });
    let res= await reqs.json();
    if (res === '403'){
      setMessage(null);
      setMessage('Matrícula já existe!');
      setTimeout(() => {
      setMessage(null);
    }, 3000);
    }
    else{
      setMessage(null);
      setMessage2("Usuário Criado com Sucesso!");
    setTimeout(() => {
      setMessage2(null);
      navigation.navigate('Login');
    }, 2000);
    }
    
    }
    else if (password != passwordConfirm) {
      setMessage(null);
      setMessage('Senhas Diferentes!');
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
    else if(matricula.length < 9){
      setMessage(null);
      setMessage('Insira a sua matrícula!');
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
    else if(name.length <= 10){
      setMessage(null);
      setMessage('Insira o nome e sobrenome!');
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
  }
  // ==================================================================

  // ==================================================================
  // ARQUITETURA DA SCREEN FORM DA APLICAÇÃO:
return (

<ImageBackground source={require('../../assets/images/VetorCad.png')} resizeMode="cover">
  <View style={{top: 45, left: 15}}>
    <PressableBtnBack click={() => navigation.navigate('Login')}  iconeIo="chevron-back"/>
  </View>
  <Div>

  <Text style={{fontFamily:'poppinsr', fontSize:16, marginTop:40}}>Ei!</Text>
  <Text style={{fontFamily:'poppinsb', fontSize:20, marginBottom:20}}>Crie uma conta</Text>
  {message && (
    <View style={{display:'flex' , flexDirection:'row'}}  >
      <IconA name='alert-triangle' size={25} style={{marginRight:10, color:'#900020'}}/>
      <Text style={{fontFamily:'poppinsr', fontSize:17, color:'#900020'}}>{message}</Text> 
    </View>
  )}

  {message2 && (
    <View style={{display:'flex' , flexDirection:'row'}}  >
    <IconC name='check-circle-o' size={25} style={{marginRight:10, color:'#42D742'}}/>
    <Text style={{fontFamily:'poppinsr', fontSize:17, color:'#42D742'}}>{message2}</Text> 
    </View>
  )}
  
  <Inputs place='Nome' iconeO='person' onChange={(text) => setName(text)}/>
  <Inputs place="Matrícula" iconeMC='smart-card-outline' onChange={(text) => setMatricula(text)}/>
  <Inputs place="Email" iconeF='mail' onChange={(text) => setEmail(text)}/>
  <InputsS place="Senha" senha={true} iconeMC='lock-outline' onChange={(text) => setPassword(text)}/>
  <Inputs place="Confirmação de Senha" senha={true} iconeMC='lock-plus-outline' onChange={(text) => setPasswordConfirm(text)}/>
  <View style={styles.container}>
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    <Text style={{fontFamily:'poppinsr', fontSize:16}}>Sou professor</Text>
  </View>

  
  <Text style={{marginTop:30}}></Text>

    <Pressables texto='Registre-se' click={Registro}>

      <Text>Registre-se</Text>
    </Pressables>
</Div>
</ImageBackground>
);
}
// ==================================================================

// ==================================================================
// ESTILIZAÇÕES:
const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    flexDirection: "row",
    alignItems: 'center',
    position: 'relative',
    right: 85,
  },
  IconBack:{
    position: "absolute",
  }
})
// ==================================================================