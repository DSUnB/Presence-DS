import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Psb } from './styled';
import IconLo from 'react-native-vector-icons/MaterialIcons';
import IconSLI from 'react-native-vector-icons/SimpleLineIcons';

export default function PressablesConf(props) {
    return (
      <View>
        <Psb onPress={props.click} style={style.button}>
          <IconLo style={style.icone} name={props.iconeLo} size={23}/>
          <IconSLI style={style.iconeSLI} name={props.iconeSLI} size={15}/>
        </Psb>
      </View>
    )
  }
  
  const style = StyleSheet.create({

    icone:{
        color:"black",
        marginLeft: 5,
        marginTop: 4,
    },
    iconeSLI:{
      color:"black",
      position: 'absolute',
      top: 8,
      left: 9.5
  },
    button:{
      width: 33,
      height: 33,
      borderRadius: 8,
      backgroundColor:'rgba(247, 248, 248, 1)',
    },
  })