import React from 'react';
import { Text, View, Animated } from 'react-native';


const Progress = ({Alunosp, Alunosi, height}) => {
    const [width, setWidth] = React.useState(0);
    const animatedValue = React.useRef(new Animated.Value(-1000)).current;
    const reactive = React.useRef(new Animated.Value(-1000)).current;
  
    React.useEffect(() => {
      Animated.timing(animatedValue,{
        toValue: reactive,
        duration: 300,
        useNativeDriver: true,
      }).start();
  
  }, []);
  
    React.useEffect(() => {
      reactive.setValue(-width + (width * Alunosp) / Alunosi);
    },[Alunosp, width]);
  
  
  
    return (
      <>
        <View
        onLayout={e => {
          const newWidth = e.nativeEvent.layout.width;
  
          setWidth(newWidth);
  }}
          style={{
            height: 10,
            backgroundColor: '#F7F8F8',
            borderRadius: height,
            overflow: 'hidden',
          }}
        >
        <Animated.View
          style={{
            height:10,
            width: '100%',
            borderRadius: height,
            backgroundColor: '#4CB69A',
            position:'absolute',
            left:0,
            top:0,
            transform: [
              {
              translateX: animatedValue,
              },
            ],
          }}
        
        />
        </View>
        </>
    );
  };
  
function Porcent(Alunosp,Alunosi){
  return (Alunosp/Alunosi)*100;
}

let P = Math.round(Porcent (30,100))

export default function ProgressBar(){
    return( 
        <View>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:2}}>
            <Text style={{fontFamily:'poppinsm', fontSize: 12}}> Presença Geral </Text>
            <Text style={{fontFamily:'poppinsm', fontSize: 12 , color:'#4CB69A'}}>{P}%</Text>
          </View>
            <Progress Alunosp={100} Alunosi={100} height={20}/>
        </View>
    )}

    // Alunosp = Alunos presentes no dia 
    // Alunosi = Alunos inscritos na turma

    // P = Alunosp/Alunosi . 100