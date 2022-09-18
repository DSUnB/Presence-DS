import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Feather';

export default function PressableCircle(props) {
  return (
    <Pressable onPress={props.click}>
        <LinearGradient
            colors={['#DB4E4E', '#D83434']}
            start={[ 0.9, 1 ]}
            style={style.circle}
        >
            <IconMCI style={style.icone} name={props.iconeMCI} size={27}/>
            <IconFA5 style={style.icone} name={props.iconeFA5} size={23}/>
            <IconF style={style.icone} name={props.iconeF} size={23}/>
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
        position: 'absolute',
        alignSelf: 'center',
        paddingTop: 16,
    },
})

