import React, { useEffect, useState } from "react";
import { Div } from "./styled";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import config from "../../config/config.json";
import { Checkbox } from 'react-native-paper';
import Inputs from "../../components/inputs";
import Pressables from "../../components/pressables";
import InputsS from "../../components/inputsenha";
import PressableBtnBack from "../../components/PressableBtnBack";


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
  // ==================================================================

  // ==================================================================
  // FUNÇÃO PARA ENVIO DE CADASTRO AO BACKEND:
  async function Registro(){
    if (password === passwordConfirm && name != '' && matricula != '' && email != '' && password != '' && name != null && matricula != null && email != null && password != null){
      let reqs = await fetch(config.urlRootNode+'cad', {
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
      setMessage('Matrícula já existe!');
      setTimeout(() => {
      setMessage(null);
    }, 5000);
    }
    else{
      setMessage("Usuário Criado com Sucesso!");
    setTimeout(() => {
      setMessage(null);
      navigation.navigate('Login');
    }, 2000);
    }
    
    }
    else if (password != passwordConfirm) {
      setMessage('Senhas Diferentes!');
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
    else if (name === null && matricula === null && email === null && password === null) {
      setMessage('Preencha todos os Campos!');
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
    else{
      setMessage('Preencha todos os Campos!');
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }

  }
  // ==================================================================

  // ==================================================================
  // ARQUITETURA DA SCREEN FORM DA APLICAÇÃO:
return (

<ImageBackground source={require('../../assets/images/VetorCad.png')} resizeMode="cover">
  <View>
    <PressableBtnBack click={() => navigation.navigate('Login')}  iconeIo="chevron-back"/>
  </View>
  <Div>

  {message && (
    <Text>{message}</Text>
  )}
  <Text style={{fontFamily:'poppinsr', fontSize:16, marginTop:40}}>Ei!</Text>
  <Text style={{fontFamily:'poppinsb', fontSize:20, marginBottom:20}}>Crie uma conta</Text>
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