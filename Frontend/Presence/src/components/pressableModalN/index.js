import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Psb, PsbT } from './styled';
import { LinearGradient } from 'expo-linear-gradient';

export default function PressablesModal2(props) {
  return (
    <View>
      <Psb onPress={props.click}>
        <LinearGradient
          colors={['#DB4E4E', '#D83434']}
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