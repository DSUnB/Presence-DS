import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Animated } from 'react-native';


const Progress = ({step, steps, height}) => {
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
      reactive.setValue(-width + (width * step) / steps);
    },[step, width]);
  
  
  
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
  
export default function ProgressBar(){
    return( 
        <View>
            <Progress step={1} steps={10} height={20}/>
        </View>
    )}