import React from 'react';
import  { View, Text, StyleSheet, Image } from 'react-native';

export default function Desenvolvedor(props) {
    return(
        <View style={style.box}>
            <Image source={{ uri: props.img }} style={style.img}/>
            <View style={{ marginLeft: 15 }}>
                <Text style={{ fontFamily: 'poppinsb', fontSize: 18 }}>{props.nome}</Text>
                <Text style={{ fontFamily: 'poppinsr', fontSize: 15 }}>{props.cargo}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    box: {
        backgroundColor: '#DCF0EC',
        height: 75,
        width: 300,
        margin: 10,
        borderRadius: 15,
        flexDirection: 'row',
        
    },
    img: {
        borderRadius: 100,
        height: 65,
        width: 65,
        marginLeft: 5,
    }
})