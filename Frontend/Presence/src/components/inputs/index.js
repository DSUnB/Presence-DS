import React from 'react';
import { Input, Div } from './styled';
import IconF from 'react-native-vector-icons/Feather';
import IconO from 'react-native-vector-icons/Octicons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';

export default function Inputs(props) {
return (
<Div>
<IconF style={style.icone} name={props.iconeF} size={23}/>
<IconO style={style.icone} name={props.iconeO} size={23}/>
<IconMC style={style.icone} name={props.iconeMC} size={23}/>
<Input placeholder={props.place} secureTextEntry={props.senha} onChangeText={props.onChange}/>
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