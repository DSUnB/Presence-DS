// Barra de progresso Presença Individual

import React, { useState } from 'react';
import { Text, View, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Banco de dados fake
let PresEft = 100
let PresTot = 100

// PresEft: Presenças efetivadas;
// PresTot: Pfesença Total

function Porcent(Alunosp,Alunosi){
  return (Alunosp/Alunosi)*100;
}

let P = Math.round(Porcent (PresEft,PresTot))

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
            height: 20,
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
          colors={['#43AC9B', '#69D498']}
          start={[ 0.9, 0.5 ]}
          style={{
            height:20,
            width: '100%',
            borderRadius: height,
            position:'absolute',
            display:"flex",
            alignItems:"flex-end",
            left:0,
            top:0,}}
          >
            <Text style={{fontFamily:'poppinsm', marginRight:3, fontSize: 13 , color:'white'}}>{P}%</Text>
          </LinearGradient>
        </Animated.View>
        </View>
        </>
    );
  };
  
export default function ProgressBar(props){

  const [condicao1, setCondicao1] = useState()
  const [condicao2, setCondicao2] = useState()
  const [condicao3, setCondicao3] = useState()
  const [condicao4, setCondicao4] = useState()

  function Condicao(){
    if (P <= 25){
      setCondicao1("Crítico")
      setCondicao2(null)
      setCondicao3(null)
      setCondicao4(null)
    }
    else if (P > 25  && P < 75){
      setCondicao1(null)
      setCondicao2("Abaixo da média")
      setCondicao3(null)
      setCondicao4(null)
    }
    else if (P >= 75 && P < 90){
      setCondicao1(null)
      setCondicao2(null)
      setCondicao3("Bom")
      setCondicao4(null)
    }
    else{
      setCondicao1(null)
      setCondicao2(null)
      setCondicao3(null)
      setCondicao4("Excelente")
    }
  }

    return( 
        <View>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
            <Text style={{fontFamily:'poppinsm', fontSize: 16}}> {props.titulo} </Text>
            
            {condicao1 && (
              <View>
                <Text style={{fontFamily:'poppinsm', fontSize: 16 , color:'#900020'}}>{condicao1}</Text>
              </View>
            )}

            {condicao2 && (
              <View>
                <Text style={{fontFamily:'poppinsm', fontSize: 16 , color:'#D86A6A'}}>{condicao2}</Text>
              </View>
            )}

            {condicao3 && (
              <View>
                <Text style={{fontFamily:'poppinsm', fontSize: 16 , color:'#4CB69A'}}>{condicao3}</Text>
              </View>
            )}

            {condicao4 && (
              <View>
                <Text style={{fontFamily:'poppinsm', fontSize: 16 , color:'#42D742'}}>{condicao4}</Text>
              </View>
            )}

          </View>
            <Progress Alunosp={PresEft} Alunosi={PresTot} height={20} />
        </View>
    )}

    /* Para presença individual:
     - Alunosp = Alunos presentes no dia;
     - Alunosi = Alunos inscritos na turma;
    */
