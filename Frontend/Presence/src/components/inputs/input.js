import React from 'react';
import { Input, Div } from './styles';
import IconF from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';

export default function Inputs(props) {
return (
<Div>
<IconF style={style.icone} name={props.iconeF} size={23}/>
<IconM style={style.icone} name={props.iconeM} size={23}/>
<Input placeholder={props.place}/>
</Div>
)
}

const style = StyleSheet.create({
icone:{
zIndex: 2,
position: 'absolute',
left: 10,
bottom: 19,
color: '#7B6F72',}

})