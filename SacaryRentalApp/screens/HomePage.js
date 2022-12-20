import React, { useRef, useEffect,useState } from 'react';
import { View, Text, Image, ScrollView, TextInput,StyleSheet, SafeAreaView, Button, Alert, Animated,TouchableOpacity,} from 'react-native';
import Anime from '../folders/Resim';
import firebase from "@react-native-firebase/app";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore'

export default function HomePage({navigation}){

  const [siparis, setSiparis] = useState({
    Marka: '',
      Telno: '',
      Yer: '',
      Day: '',
      Zaman:'',
      AdSoyad:'',
    
})


const resetForm = () => {
    setSiparis({
      Marka: '',
      Telno: '',
      Yer: '',
      Day: '',
      Zaman:'',
      AdSoyad:'',
      type: 'siparis'
    })
}

const createSiparis = async (siparis) => {
    try {
        await firebase.firestore().collection('deneme').add(siparis)
        resetForm();
        alert("Talebiniz alındı en kısa sürede sizinle iletişime geçeceğiz");
        
    } catch (error) {
        console.log(error)
        alert("Talebiniz alınamadı lütfen daha sonra tekrar deneyiniz")
    }
}
    return(
        <View style={{alignItems: 'center', justifyContent: 'center',backgroundColor:'white'}}>
            <ScrollView>
        <FadeInView>
        <Image
        style={{ width: 300, height: 160, alignItems: 'center', alignSelf: 'center' }}

        source={{
          uri: 'https://pps.whatsapp.net/v/t61.24694-24/165706371_4487334151290845_82337303158451360_n.jpg?ccb=11-4&oh=01_AdQRpOEF5CvzwM8Vl3HTXeRPkGTi9JfkacrqjM0mSmwOWQ&oe=639EFEE0'
        }} />
        <View>
            <Text style={{opacity:0.8,fontSize:25,alignSelf:'center',color:'black',padding:10,fontFamily:'tahoma',borderBottomWidth:3,borderColor:'purple',fontWeight:'bold'}}>
                GÜVENLİ ARAÇ KİRALAMA
            </Text>
        </View>
    <TextInput
        style={styles.giris}
        value={siparis.Marka}
        onChangeText={(Marka) => {setSiparis({...siparis, Marka: Marka})}}
        placeholder="Araç Marka veya Model"
        placeholderTextColor={'black'}
       
      />
       <TextInput
        style={styles.giris}
        value={siparis.AdSoyad}
        onChangeText={(AdSoyad) => {setSiparis({...siparis, AdSoyad: AdSoyad})}}
        placeholder="Ad Soyad"
        placeholderTextColor={'black'}
       
      />
       <TextInput 
        style={styles.giris}
        value={siparis.Telno}
        onChangeText={(Telno) => {setSiparis({...siparis, Telno: Telno})}}
        placeholder="Telefon Numarası"
        placeholderTextColor={'black'}
        keyboardType="numeric"/>
        <TextInput
        style={styles.giris}
        value={siparis.Yer}
        onChangeText={(Yer) => {setSiparis({...siparis, Yer: Yer})}}
        placeholder="Teslim Edilcek Yer"
        placeholderTextColor={'black'}
        keyboardType='ascii-capable'
      />
       <TextInput
        style={styles.giris}
        value={siparis.Zaman}
        onChangeText={(Zaman) => {setSiparis({...siparis, Zaman: Zaman})}}
        placeholder="Teslim Edilme Zamanı"
        placeholderTextColor={'black'}
        keyboardType='ascii-capable'
      />
      <TextInput 
        style={styles.giris}
        placeholder="Kiralancak Gün Sayısı"
        value={siparis.Day}
        onChangeText={(Day) => {setSiparis({...siparis, Day: Day})}}
        placeholderTextColor={'black'}
        keyboardType="numeric"/>
        <View style={{
           fontSize:20,
           padding:5,
           width:310,
           alignSelf:'center',
           margin:12,
           justifyContent:'center',
           color:'black'
           
        }}>
          
        <TouchableOpacity style={styles.buton}  onPress={() => {createSiparis(siparis)}} >
            <Text style={{color:'white',alignSelf:'center',padding:10,fontSize:15}}>Bilgileri Gönder</Text>
        </TouchableOpacity>
        <Text style={{fontSize:17,color:'black',alignSelf:'center',marginTop:20}}>İletişim: 0555 555 5555</Text>
          </View>
          
          <TouchableOpacity onPress={()=>navigation.navigate('Araclar')}>
        <Text style={{color:'black', width:140,alignSelf:'center',fontSize:18,opacity:2,margin:0,borderBottomWidth:2,borderColor:'purple'}}>Tüm Araçları Gör</Text>
      </TouchableOpacity>
      
            <View style={{marginTop:0}}>
            <Anime></Anime>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text style={{color:'black',alignSelf:'center',fontSize:20,marginBottom:30}}>Yönetici Girşi İçi Tıklayınız</Text>
          </TouchableOpacity>
        </FadeInView>
        </ScrollView>
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
        backgroundColor:'purple',
        color:'white',
        width:300,
        height:40,
        borderWidth:0,
        borderRadius:40

    }



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