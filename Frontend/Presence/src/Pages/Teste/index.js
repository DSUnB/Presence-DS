import React from "react";
import { View, ScrollView} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

export default function Teste({ navigation }) {


const options = [
    { label: '01:00', value: '1' },
    { label: '01:30', value: '1.5' },
    { label: '02:00', value: '2' }
];

return (
    <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true} style={{justifyContent: "center", alignItems: "center", width: "100%", height: "100%", backgroundColor: "#fff"}}>
        <SwitchSelector
  options={options}
  initial={0}
  onPress={value => console.log(`Call onPress with value: ${value}`)}
/>
</ScrollView>




)}
