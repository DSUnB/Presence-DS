import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';

export default function PressableCircle(props) {
  return (
    <Pressable onPress={props.click}>
        <LinearGradient
            colors={['#69D498', '#43AC9B']}
            start={[ 0.9, 1 ]}
            style={style.circle}
        >
            <IconFA5 style={style.icone} name={props.iconeFA5} size={23}/>
        </LinearGradient>
    </Pressable>
  )
}

const style = StyleSheet.create({
    circle: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    icone:{
        color: '#FFF',
        alignSelf: 'center',
        paddingTop: 16,
    },
})

