import React from "react";
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
  
  const [checked, setChecked] = React.useState(false);

return (
<Div>
  <Text style={{fontFamily:'poppinsr', fontSize:16}}>Ei Estudante!</Text>
  <Text style={{fontFamily:'poppinsb', fontSize:20, marginBottom:20}}>Crie uma conta</Text>
  <Inputs place='Nome' iconeO='person' />
  <Inputs place="Matrícula" iconeMC='smart-card-outline'/>
  <Inputs place="Email" iconeF='mail'/>
  <Inputs place="Senha" iconeMC='lock-outline'/>
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
    title='Registre-se'
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

