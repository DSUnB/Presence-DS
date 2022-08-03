import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Psb, PsbT } from './styled';
import { LinearGradient } from 'expo-linear-gradient';

export default function PressablesModal(props) {
  return (
    <View>
      <Psb onPress={props.click}>
        <LinearGradient
          // Button Linear Gradient
          colors={['#69D498', '#43AC9B']}
          start={[ 0.9, 0.5 ]}
          style={style.button}
          >
          <PsbT style={{fontFamily:'poppinsb', fontSize: 12}}>{props.texto}</PsbT>
        </LinearGradient>
      </Psb>
    </View>
  )
}

const style = StyleSheet.create({
  icone:{
    color: '#FFF',
    fontSize: 25,
    marginRight: 8,
  },

  button:{
    width: 91,
    height: 36,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  }
})