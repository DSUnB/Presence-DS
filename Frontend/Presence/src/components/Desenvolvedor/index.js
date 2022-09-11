import React from 'react';
import  { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import * as Linking from 'expo-linking';

export default function Desenvolvedor(props) {
    return(
        <View>
            <Pressable style={style.box}  onPress={()=>Linking.openURL(props.link)}>
                <Image source={{ uri: props.img }} style={style.img}/>
                    <View style={{ marginLeft: 15, justifyContent: 'center' }}>
                        <Text style={{ fontFamily: 'poppinsb', fontSize: 18 }} onPress={()=>Linking.openURL('https://github.com/LeanArs')}>{props.nome}</Text>
                        <Text style={{ fontFamily: 'poppinsr', fontSize: 13 }}>{props.cargo}</Text>
                        <Text style={{ fontFamily: 'poppinsr', fontSize: 10 }}>{props.titulo}</Text>
                    </View>
            </Pressable>
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
        alignItems: 'center'
    },
    img: {
        borderRadius: 100,
        height: 65,
        width: 65,
        marginLeft: 5,
    }
})