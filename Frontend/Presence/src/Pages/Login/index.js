import React from "react";
import { Div } from "./Styles";
import { Text, Button } from "react-native";
import Inputs from "../../components/inputs";
import {
useFonts,
Poppins_400Regular,
Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import * as Font from 'expo-font'
import { AppLoading } from "expo";

function Login({ navigation }) {

return (
<Div>
  <Text style={{fontFamily:'poppinsb', fontSize:20}}>Bem vindo,</Text>
  <Text style={{fontFamily:'poppinsr', fontSize:16}}>Estudante!</Text>
  <Inputs place='Matrícula' iconeF='mail' />
  <Inputs place="Senha" iconeMC='lock-outline'/>
  <Text style={{fontFamily:'poppinsr', fontSize:12, marginTop:40}}>Não tem uma conta ainda?</Text>
    <Button
    title='Registre-se'
    onPress={() => navigation.navigate('Form')}
    ></Button>
  
</Div>
);
}

export default Login;
