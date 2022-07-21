import React from "react";
import { Div, Titm, TitM } from "./Styles";
import { Text, Button } from "react-native";
import Inputs from "../../components/inputs/input";

function Login({ navigation }) {
  return (
    <Div>
      <TitM>Bem vindo,</TitM>
      <Titm>Estudante!</Titm>
      <Inputs place='Matrícula' />
      <Inputs place="Senha" />
      <Text>Não tem uma conta ainda?</Text>
      <Button
      title='Registre-se'
      onPress={() => navigation.navigate('Form')}
      ></Button>
    </Div>
  );
}

export default Login;
