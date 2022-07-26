import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIo from 'react-native-vector-icons/Ionicons';
import { Input, Div } from './styled';

import { useTogglePasswordVisibility } from './useTogglePasswordVisibility';

export default function InputsS(props) {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState('');

  return (
      <Div>
        <IconMC style={style.icone} name={props.iconeMC} size={23}/>
        <Input
          name="inputComOlho"
          placeholder={props.place}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="newPassword"
          secureTextEntry={passwordVisibility}
          value={password}
          enablesReturnKeyAutomatically
          onChangeText={text => setPassword(text)}
        />
        <Pressable onPress={handlePasswordVisibility}>
          <IconIo style={style.icone2} name={rightIcon} size={23} />
        </Pressable>
      </Div>
  );
}

const style = StyleSheet.create({
    icone:{
    zIndex: 2,
    position: 'absolute',
    left: 10,
    bottom: 19,
    color: '#7B6F72',},

    icone2:{
    zIndex: 2,
    right: 12,
    bottom: 19,
    position: 'absolute',
    color: '#7B6F72',
    }
})