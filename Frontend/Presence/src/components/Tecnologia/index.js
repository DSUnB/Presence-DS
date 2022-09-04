import React from 'react';
import  { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Tecnologia(props) {
    return(
        <View style={style.container}>
            <Text></Text>
            <Image source={{ uri: props.img }} style={style.img}/>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 135,
        height: 135,
        backgroundColor: '#40C7CB',
        alignItems: 'center',
        borderWidth: 7,
        borderColor: '#3B8A8C',
        margin: 10,
    },
    img: {
        height: 80,
        width: 80,
    }
})