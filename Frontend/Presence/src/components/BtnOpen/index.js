import React from "react";
import { Psb, PsbT } from "./styled";
import { View, StyleSheet } from "react-native"
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from "expo-linear-gradient";

export default function BtnOpen(props) {
    return(
        <View>
            <Psb onPress={props.click}>
                <LinearGradient
                // Button Linear Gradient
                colors={['#69D498', '#43AC9B']}
                start={[ 0.9, 0.5 ]}
                style={style.button}
                >
                    <IconMCI style={style.icone} name={props.iconeMCI} size={50}/>
                    <PsbT style={style.texto}>{props.texto}</PsbT>
                </LinearGradient>    
            </Psb>
        </View>
    )
}

const style = StyleSheet.create({

    icone:{
        color:"rgba(15, 4, 4, 0.2)",
        position: 'absolute',
        left:123,
        top:10,
    },

    texto:{
        fontFamily:'poppinsb',
        fontSize: 18,
        alignSelf:"center",
        top:27,
    },

    button:{
      width: 300,
      height: 300,
      borderRadius: 1000,
      position:"absolute",
      zIndex: 2,
      backgroundColor:'rgba(247, 248, 248, 1)',
    }
  })