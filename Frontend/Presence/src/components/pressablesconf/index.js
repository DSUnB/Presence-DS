import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Psb, PsbT } from './styled';
import IconLo from 'react-native-vector-icons/AntDesign';

export default function Pressablesconf(props) {
    return (
      <View>
        <Psb onPress={props.click} style={style.button}>
            <IconLo style={style.icone} name={props.iconeLo} size={23}/>    
            <PsbT style={{fontFamily:'poppinsb', fontSize: 17}}>{props.texto}</PsbT>
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
      top:-10,
      right:-100,
      backgroundColor:'#E0E1E1',
    }
  })