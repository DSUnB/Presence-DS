import React from 'react';
import  { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Tecnologia(props) {
    return(
        <View style={style.container}>
            <Image source={props.img} style={style.img}/>
            <Text style={{ fontFamily: "poppinsb", fontSize: 15, color:"white" }}>{props.texto}</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        width: 125,
        height: 125,
        backgroundColor: '#40C7CB',
        borderWidth: 7,
        borderColor: '#3B8A8C',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: 70,
        width: 70,
        borderRadius: 15,
        marginTop: 10
    }
})