import React, { useState } from "react";
import { Div } from "./styled";
import { Text, View, StyleSheet } from "react-native";
import Inputs from "../../components/inputs";
import Pressables from "../../components/pressables";
import InputsS from '../../components/inputsenha/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {

  // Criação das States para serem enviadas ao Banco de Dados:
  const [matricula, setMatricula]= useState(null);
  const [senha,setSenha]= useState(null);
  const [message, setMessage]=useState(null);

  async function envLogin(){
    let reqs = await fetch('http://192.168.0.10:3000/log', {
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
    let json= await reqs.json();
    if(json === 'error'){
      setMessage('Matrícula ou Senha incorreta!');
      setTimeout(() => {
      setMessage(null);
    }, 5000);
      await AsyncStorage.clear();
    }
    else{
      await AsyncStorage.setItem('userData', JSON.stringify(json));
      navigation.navigate('Main');
    }
  }

return (
<Div>
  <Text style={{fontFamily:'poppinsb', fontSize:20}}>Bem vindo,</Text>
  <Text style={{fontFamily:'poppinsr', fontSize:16, marginBottom:40}}>Estudante!</Text>

  {message && (
    <Text>{message}</Text>
  )}

  <Inputs place='Matrícula' iconeF='mail' onChange={(text) => setMatricula(text)}/>
  <InputsS place="Senha" iconeMC='lock-outline' onChange={(text) => setSenha(text)}/>
  <Text style={{marginTop: 70}}> </Text>
  <Pressables iconeM='login' texto='Login' click={envLogin}/>
  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:18}}>
    <View style={{flex: 1, height: 1 ,backgroundColor: '#DDDADA'}} />
      <View>
        <Text style={{width: 40, fontSize:12, textAlign: 'center', fontFamily:'poppinsr'}}>Ou</Text>
      </View>
      <View style={{flex: 1, height: 1, backgroundColor: '#DDDADA'}} />
      </View>
      <View>
      </View>
      <Text style={{fontFamily:'poppinsr', fontSize:15, marginTop:18}}>Não tem uma conta ainda?
      <Text style={{color:'white'}}>.  .</Text>                    
        <Text style={styles.hypertexto} onPress={() => navigation.navigate('Form')}> 
          Registre-se 
        </Text> 
      </Text>
      
  
</Div>
);
}

const styles = StyleSheet.create({
  hypertexto: {
    color: '#0D5354',
  }
})

