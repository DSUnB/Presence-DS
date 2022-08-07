import React from "react";
import { Psb } from "./styled";
import { View, StyleSheet } from "react-native"
import IconIo from 'react-native-vector-icons/Ionicons';

export default function PressableBtnBack(props) {
    return(
        <View>
            <Psb onPress={props.click} style={style.button}>
                <IconIo style={style.icone} name={props.iconeIo} size={23}/>    
            </Psb>
        </View>
    )
}

const style = StyleSheet.create({

    icone:{
        color:"black",
        marginLeft:5,
        marginTop:4,
    },

    button:{
      width: 33,
      height: 33,
      borderRadius: 8,
      position:"absolute",
      zIndex: 2,
      top: 45,
      left: 15,
      backgroundColor:'rgba(247, 248, 248, 1)',
    }
  })