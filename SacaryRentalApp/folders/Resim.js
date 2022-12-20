import React, { useRef, useEffect } from 'react';
import { View, Text, Image, ScrollView, TextInput,StyleSheet, SafeAreaView, Button, Alert, Animated} from 'react-native';



const Anime = () => {
    return(
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FadeInView style={{
             
        }}>
            <View style={{
              borderBottomWidth:5,
              borderRadius:5,
              borderColor:'purple',
                flexDirection:'row',
            }}>
          <Image 
          style={{width: 130, height: 100,borderColor:'purple',borderRadius:25,margin:25
          ,}}
          source={{
            uri:'https://www.oneclickdrive.com/application/views/img/cars/mercedes-benz-c-class-rent-hire-cars-dubai-uae-abu-dhabi.jpg?ver=3'
          }}
          />
             <Image 
          style={{width: 135, height: 100,borderColor: 'white',borderRadius:25,margin:20
          ,marginLeft:30}}
          source={{
            uri:'https://files.sikayetvar.com/model/701/citroen-c5-aircross-0-1.jpg'
          }}
          />

          </View>
          <View style={{flexDirection:'row'}}>
          <Image 
          style={{width: 150, height: 100,borderColor: 'white',borderRadius:25,margin:25
          ,}}
          source={{
            uri:'https://www.demircarrental.com.tr/upload/-1-7582.jpg'
          }}
          />
             <Image 
          style={{width: 135, height: 95,borderColor: 'white',borderRadius:25,margin:20
          ,}}
          source={{
            uri:'https://s3-eu-west-1.amazonaws.com/localrent.images/cars/image_titles/000/021/356/original/Fiat-Egea-2020-white.jpg?1638374515'
          }}
          />
          </View>
         
        </FadeInView>
      </View>
    );
  }
  //-------------------------------
  const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  
    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 10000/4,
          useNativeDriver:true,
          
        }
      ).start();
    }, [fadeAnim])
  
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,   
          color:'green' ,     // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  }
  export default Anime;

  const styles = StyleSheet.create({
    resim:{
        width: 130, height: 100,borderColor: 'white',borderRadius:25
    
      
    }



});