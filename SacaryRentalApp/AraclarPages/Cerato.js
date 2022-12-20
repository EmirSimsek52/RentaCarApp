import React, { useRef, useEffect,useState, useNavigation } from 'react';
import { View, Text, Image, ScrollView, TextInput,StyleSheet, SafeAreaView, Button, Alert, Animated,TouchableOpacity,FlatList} from 'react-native';
import firebase from "@react-native-firebase/app";
import firestore from '@react-native-firebase/firestore'
export default function Cerato(){

  const [data, setData] = useState([])

 
  const readPosts = async () => {
    const snapshot = await firebase.firestore().collection('Cerato').get();
    const posts = snapshot.docs.map(doc => doc.data());
    setData(posts);
  }
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
            <Text style={styles.baslik}>
           KIA Cerato
            </Text>
            <Image 
                style={styles.resim}
                source={{
                  uri:'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Kia-Cerato-hatch.png'
                }}
                />
                   <TouchableOpacity onPress={readPosts}>
                <Text style={styles.buton}>Özellikleri Göster</Text>
            </TouchableOpacity>
                 <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={{ backgroundColor:'purple',width:300,alignSelf:'center' }}>
          <Text style={styles.text}>Yakıt Tipi: {item.Yakit}</Text>
          <Text style={styles.text}>Renk: {item.Renk}</Text>
          <Text style={styles.text}>Vites Tipi: {item.VitesTipi}</Text>
          <Text style={styles.text}>Koltuk Sayısı: {item.KoltukSayisi}</Text>
          <Text style={styles.text}>Gunluk Ucret: {item.GunlukUcret}</Text>
         
        </View>
      )}
    />
          
        </View>
    );
}

const styles = StyleSheet.create({
  baslik:{
    alignSelf:'center',
    marginBottom:30,
    fontSize:30,
    color:'black',
    marginTop:10,
    borderBottomWidth:4,
    borderColor:'purple',
    borderRadius:35,
    width:400,
    textAlign:'center'
  },
  resim:{
    width: 300,
     height: 200,
     margin:25,
     alignSelf:'center',

  },
  text:{
    color:'white',
    fontSize:20,
   
    padding:5
},  
buton:{
  backgroundColor:'purple',
  color:'white',
  alignSelf:'center',
  textAlign:'center',
  width:300,
  marginTop:20,
  marginBottom:20,
  height:50,
  fontSize:20,
  padding:10,
  borderWidth:0,
  borderRadius:25
},



});