import React, { useState } from "react";
import { Div } from "./styled";
import { Text, Button, View, StyleSheet } from "react-native";
import { Checkbox } from 'react-native-paper';
import Inputs from "../../components/inputs";
import {
useFonts,
Poppins_400Regular,
Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import * as Font from 'expo-font';
import { AppLoading } from "expo";

export default function Form({ navigation }) {

  // Criação das States para serem enviadas ao Banco de Dados:
  const [name, setName]=useState(null);
  const [matricula, setMatricula]=useState(null);
  const [email, setEmail]=useState(null);
  const [password, setPassword]=useState(null);
  const [checked, setChecked] = React.useState(false);

  // Criação da função para envio para o Backend:
  async function Registro(){
    let reqs = await fetch('http://192.168.0.10:19000/create', {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        matricula: matricula,
        nome: name,
        emailInstitucional: email,
        senha: password,
        tipoUsuario: 1,
      })
    })
  }

return (
<Div>
  <Text style={{fontFamily:'poppinsr', fontSize:16}}>Ei Estudante!</Text>
  <Text style={{fontFamily:'poppinsb', fontSize:20, marginBottom:20}}>Crie uma conta</Text>
  <Inputs place='Nome' iconeO='person' onChange={(text) => setName(text)}/>
  <Inputs place="Matrícula" iconeMC='smart-card-outline' onChange={(text) => setMatricula(text)}/>
  <Inputs place="Email" iconeF='mail' onChange={(text) => setEmail(text)}/>
  <Inputs place="Senha" iconeMC='lock-outline' onChange={(text) => setPassword(text)}/>
  <Inputs place="Confirmação de Senha" iconeMC='lock-plus-outline'/>
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
    <Button
    title='Registrar'
    onPress={Registro}
    ></Button>
</Div>
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
