import React from 'react';
import  { View, Text, StyleSheet, Image } from 'react-native';

export default function Desenvolvedor(props) {
    return(
        <View style={style.box}>
            <Image source={{uri: props.img}} style={style.img}/>
            <Text>{props.nome}</Text>
            <Text>{props.cargo}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    box: {
        backgroundColor: 'pink',
        height: 100,
        width: 300,
        margin: 10,
    },
    img: {
        borderRadius: 100,
        height: 85,
        width: 85,
    }
})