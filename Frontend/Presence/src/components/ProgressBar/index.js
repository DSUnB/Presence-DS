import React from 'react';
import { Text, View, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


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
            transform: [
              {
              translateX: animatedValue,
              },
            ],
          }}
        >
          <LinearGradient
          // Button Linear Gradient
          colors={['#46B297', '#9DCEFF']}
          start={[ 0.9, 0.5 ]}
          style={{
            height:10,
            width: '100%',
            borderRadius: height,
            position:'absolute',
            left:0,
            top:0,}}
          />
        </Animated.View>
        </View>
        </>
    );
  };
  
export default function ProgressBar(props){
    return( 
        <View>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:2}}>
            <Text style={{fontFamily:'poppinsm', fontSize: 12}}> {props.titulo} </Text>
            <Text style={{fontFamily:'poppinsm', fontSize: 12 , color:'#4CB69A'}}>{props.texto}%</Text>
          </View>
            <Progress Alunosp={100} Alunosi={100} height={20}/>
        </View>
    )}

    /* Para presença geral:
     - Alunosp = Alunos presentes no dia;
     - Alunosi = Alunos inscritos na turma;
    */
