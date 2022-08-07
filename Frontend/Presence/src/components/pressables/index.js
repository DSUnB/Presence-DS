import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Psb, PsbT } from './styled';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';

export default function Pressables(props) {
  return (
    <View>
      <Psb onPress={props.click}>
        <LinearGradient
          // Button Linear Gradient
          colors={['#46B297', '#9DCEFF']}
          start={[ 0.9, 0.5 ]}
          style={style.button}
          >
          <IconM style={style.icone} name={props.iconeM} size={23}/>
          <IconFA5 style={style.icone} name={props.iconeFA5} size={23}/>
          <PsbT style={{fontFamily:'poppinsb', fontSize: 17}}>{props.texto}</PsbT>
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
    width: 315,
    height: 60,
    borderRadius: 99,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position:"relative",
  }
})