import React, { useState } from "react";
import { Div } from "./styled";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Checkbox } from 'react-native-paper';
import Inputs from "../../components/inputs";
import Pressables from "../../components/pressables";
import InputsS from "../../components/inputsenha";

export default function Form({ navigation }) {

  // Criação das States para serem enviadas ao Banco de Dados:
  const [name, setName]=useState(null);
  const [matricula, setMatricula]=useState(null);
  const [email, setEmail]=useState(null);
  const [password, setPassword]=useState(null);
  const [checked, setChecked]=useState(false);
  const [message, setMessage]=useState(null);

  // Criação da função para envio para o Backend:
  async function Registro(){
    let reqs = await fetch('http://192.168.0.10:3000/create', {
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
    setMessage(res)
  }

return (
<ImageBackground source={require('../../assets/images/VetorCad.png')} resizeMode="cover">
<Div>
  {message && (
    <Text>{message}</Text>
  )}
  <Text style={{fontFamily:'poppinsr', fontSize:16}}>Ei!</Text>
  <Text style={{fontFamily:'poppinsb', fontSize:20, marginBottom:20}}>Crie uma conta</Text>
  <Inputs place='Nome' iconeO='person' onChange={(text) => setName(text)}/>
  <Inputs place="Matrícula" iconeMC='smart-card-outline' onChange={(text) => setMatricula(text)}/>
  <Inputs place="Email" iconeF='mail' onChange={(text) => setEmail(text)}/>
  <InputsS place="Senha" senha={true} iconeMC='lock-outline' onChange={(text) => setPassword(text)}/>
  <Inputs place="Confirmação de Senha" senha={true} iconeMC='lock-plus-outline'/>
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
    <Pressables texto='Registre-se' click={() => navigation.navigate('Main')}>
      <Text>Registre-se</Text>
    </Pressables>
</Div>
</ImageBackground>
);
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    flexDirection: "row",
    alignItems: 'center',
    position: 'relative',
    right: 85,
  }
})

