import React, { useRef, useEffect,useState, useNavigation } from 'react';
import { View, Text, Image, ScrollView, TextInput,StyleSheet, SafeAreaView, Button, Alert, Animated,TouchableOpacity,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firebase from "@react-native-firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth';
export default function LoginPage({navigation}){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");



  const signIn = async () => {
    setIsLoading(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate("Yonetici");
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
      alert("Mevcut olmayan hesap");
    }
  };
    return(
        <View style={{backgroundColor:'white',flex:1,justifyContent:'center'}}>
            <FadeInView>
           <Text style={{marginBottom:30,marginTop:-100,fontSize:40,alignSelf:'center',color:'black',borderBottomWidth:5,borderColor:'purple',borderRadius:15,width:300,textAlign:'center'}}>
            Yönetici Girişi
            </Text>
            <TextInput 
        style={styles.giris}
        placeholder="E-Mail.."
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholderTextColor={'black'}/>
         <TextInput 
        style={styles.giris}
        placeholder="Şifre.."
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholderTextColor={'black'}/>
        <TouchableOpacity  onPress={() => signIn()} loading={isLoading} >
            <Text style={styles.buton}>Giriş Yap</Text>
        </TouchableOpacity>
      
        </FadeInView>
        </View>
    );
}
const styles = StyleSheet.create({
    giris:{
      
      borderBottomWidth:2,
    
      borderRadius:3,
      borderColor:'purple',
      fontSize:20,
      padding:5,
      width:300,
      alignSelf:'center',
      margin:12,
      justifyContent:'center',
      color:'black'
      
    },

    buton:{
            alignSelf:'center',
            fontSize:25,
            marginTop:30,
            color:'white',
            borderWidth:0,
            padding:8,
            width:300,
            textAlign:'center',
            backgroundColor:'purple',
            borderRadius:25,
            height:50
    },  
});
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