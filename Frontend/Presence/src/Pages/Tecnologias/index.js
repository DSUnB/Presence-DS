import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Tecnologias({ navigation }) {
  return (
    <View style={style.container}>
        <Text>Tecnologias</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    }
})