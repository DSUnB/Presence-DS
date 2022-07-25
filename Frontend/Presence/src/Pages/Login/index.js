import React from "react";
import { Div } from "./styled";
import { Text, Button } from "react-native";
import Inputs from "../../components/inputs";
import Pressables from "../../components/pressables";

function Login({ navigation }) {

return (
<Div>
  <Text style={{fontFamily:'poppinsb', fontSize:20}}>Bem vindo,</Text>
  <Text style={{fontFamily:'poppinsr', fontSize:16}}>Estudante!</Text>
  <Inputs place='Matrícula' iconeF='mail' />
  <Inputs place="Senha" iconeMC='lock-outline'/>
  <Pressables iconeM='login' click={() => navigation.navigate('Main')}/>
  <Text style={{fontFamily:'poppinsr', fontSize:12, marginTop:40}}>Não tem uma conta ainda?</Text>
    <Button
    title='Registre-se'
    onPress={() => navigation.navigate('Form')}
    ></Button>
  
</Div>
);
}

export default Login;

