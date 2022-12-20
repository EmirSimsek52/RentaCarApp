import React, { useRef, useEffect } from 'react';
import { View, Text, Image, ScrollView, TextInput,StyleSheet, SafeAreaView, Button, Alert, Animated,TouchableOpacity,} from 'react-native';


export default function YonAraclar({navigation}){
    return(
        <ScrollView style={{backgroundColor:'white'}}>
        <View style={{flex: 0, alignItems: 'center', justifyContent: 'center',backgroundColor:'white'}}>
           <FadeInView>
            <Text style={{alignSelf:'center',color:'black',fontSize:35,}}>
            Araçlar
            </Text>
            {/*1. satır*/}
                    <View style={{ borderBottomWidth:5,
                    borderTopWidth:5,
                    borderTopColor:'purple',
                
                    
                    borderRadius:15,
                    borderColor:'purple',}}>
                    <View style={{
                        flexDirection:'row',
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('YonMercedes')}>
                <Image 
                style={{width: 140, height: 105,borderColor:'purple',borderRadius:25,margin:25
                ,}}
                source={{
                    uri:'https://www.oneclickdrive.com/application/views/img/cars/mercedes-benz-c-class-rent-hire-cars-dubai-uae-abu-dhabi.jpg?ver=3'
                }}
                />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('YonCitroen')}>
                    <Image 
                style={{width: 145, height: 105,borderColor: 'white',borderRadius:25,margin:20,marginLeft:30}}
                source={{
                    uri:'https://files.sikayetvar.com/model/701/citroen-c5-aircross-0-1.jpg'
                }}
                />
                </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('YonMercedes')}>
                <Text style={{marginLeft:5,fontSize:18,color:'black'}}>Mercedes C200d AMG</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('YonCitroen')}>
                <Text style={{marginLeft:20,fontSize:18,color:'black'}}>Citroen C5 aircross</Text>
                </TouchableOpacity>
                </View>
                </View>
                {/*2. satır*/}
                <View style={{   borderBottomWidth:5,
                    borderRadius:15,
                    borderColor:'purple',}}>
                <View style={{flexDirection:'row',   
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('YonMegane')}>
                <Image 
                style={{width: 140, height: 105,borderColor: 'white',borderRadius:25,margin:25
                ,}}
                source={{
                    uri:'https://www.demircarrental.com.tr/upload/-1-7582.jpg'
                }}
                />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('YonEgea')}>
                    <Image 
                style={{width: 145, height: 105,borderColor: 'white',borderRadius:25,margin:20
                ,}}
                source={{
                    uri:'https://s3-eu-west-1.amazonaws.com/localrent.images/cars/image_titles/000/021/356/original/Fiat-Egea-2020-white.jpg?1638374515'
                }}
                />
                </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}>   
                <TouchableOpacity onPress={()=> navigation.navigate('Megane')}>
                <Text style={{marginLeft:30,fontSize:18,color:'black'}}>Renault Megane</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Egea')}>
                <Text style={{marginLeft:90,fontSize:18,color:'black'}}>Fiat Egea</Text>
                </TouchableOpacity>
                </View>
                </View>
                {/*3. satır*/}
                <View style={{ borderBottomWidth:5,
                    borderRadius:15,
                    borderColor:'purple',}}> 
                <View style={{
                    
                        flexDirection:'row',
                    }}> 

                     
                <TouchableOpacity onPress={()=> navigation.navigate('YonCerato')}>
                <Image 
                style={{width: 150, height: 100,borderColor:'purple',borderRadius:25,margin:25
                ,}}
                source={{
                    uri:'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Kia-Cerato-hatch.png'
                }}
                />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('YonClio')}>
                    <Image 
                style={{width: 135, height: 110,borderColor: 'white',borderRadius:25,margin:20
                ,}}
                source={{
                    uri:'https://i0.wp.com/www.algerie-expat.com/wp-content/uploads/2022/08/Renault-Clio-4-Limited.jpg?fit=1422%2C800&ssl=1'
                }}
                />
                </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=> navigation.navigate('Cerato')}>
                <Text style={{marginLeft:50,fontSize:18,color:'black'}}>Kia Cerato</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Clio')}>
                <Text style={{marginLeft:100,fontSize:18,color:'black'}}>Renault Clio</Text>
                </TouchableOpacity>
                </View>
                </View>
                
                {/*4.satır*/}
                <View style={{ borderBottomWidth:5,
                    borderRadius:15,
                    marginBottom:10,
                    borderColor:'purple',}}> 
                <View style={{
                    
                        flexDirection:'row',
                    }}>
                          <TouchableOpacity onPress={()=> navigation.navigate('YonCelysee')}>
                <Image 
                style={{width: 150, height: 105,borderColor:'purple',borderRadius:25,margin:25
                ,}}
                source={{
                    uri:'https://s3-eu-west-1.amazonaws.com/localrent.images/cars/image_titles/000/022/047/original/Citroen-C-elysee-2017-white.jpg?1627328027'
                }}
                />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('YonPejo301')}>
                    <Image 
                style={{width: 145, height: 105,borderColor: 'white',borderRadius:25,margin:20
                ,}}
                source={{
                    uri:'https://s3-eu-west-1.amazonaws.com/localrent.images/images/files/000/072/275/original/Peugeot-301-2021-white_(4).jpg?1665751955'
                }}
                />
                </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=> navigation.navigate('Celysee')}>
                <Text style={{marginLeft:30,fontSize:18,color:'black'}}>Citroen C-Elysee</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('YonPejo301')}>
                <Text style={{marginLeft:80,fontSize:18,color:'black'}}>Peugeot 301</Text>
                </TouchableOpacity>
                </View>
                </View>
         </FadeInView>
      </View>
      </ScrollView>

    );
}
const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  
  
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
      <Animated.View                 
        style={{
          ...props.style,
          opacity: fadeAnim,   
          color:'green' ,     
        }}
      >
        {props.children}
      </Animated.View>
    );
  }
  const styles = StyleSheet.create({
    resim:{
        width: 130, height: 100,borderColor: 'white',borderRadius:25
    
      
    }



});