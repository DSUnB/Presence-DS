import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Psb, PsbT } from './styled';
import { LinearGradient } from 'expo-linear-gradient';

export default function PressablesModal(props) {
  return (
    <View style={{alignSelf:'center'}}>
      <Psb onPress={props.click}>
        <LinearGradient
          // Button Linear Gradient
          colors={['#46B297', '#9DCEFF']}
          start={[ 0.9, 0.5 ]}
          style={style.button}
          >
          <Text style={{color:'#fff'}}>Ver</Text>
        </LinearGradient>
      </Psb>
    </View>
  )
}

const style = StyleSheet.create({

  button:{
    width: 70.4,
    height: 24.32,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  }
})