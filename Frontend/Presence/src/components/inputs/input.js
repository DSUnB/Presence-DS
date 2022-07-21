import React from 'react'
import { View } from 'react-native';
import { Botao, Img } from './styles';

function Inputs(props) {
  return (
    <View>
      <Img
      source={{  
        uri: 'Presence\src\assets\favicon.png',
      }}/>
      <Botao placeholder={props.place}></Botao>
    </View>
  )
}

export default Inputs;