import React, { useRef, useEffect,useState } from 'react';
import { View, Text, Image, ScrollView, TextInput,StyleSheet, SafeAreaView, Button, Alert, Animated,TouchableOpacity,Card,FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore'
import firebase from "@react-native-firebase/app";

export default function Rezarvasyon(){
    const [data, setData] = useState([])

    const readPosts = async () => {
        const RezarvasyonCollection = await firestore().collection('deneme').get()
        console.log(RezarvasyonCollection.docs)
        setData(
            RezarvasyonCollection.docs.map((doc) => {
                return {...doc.data(), id: doc.id}
            })
        )
    }
   
      const deletePost= async (id) => {
        const res = await firestore().collection('deneme').doc(id).delete()
       readPosts();
       alert('Rezaarvasyon Silindi')
    }
   
    return(
    
        
        <View style={{flex:4,backgroundColor:'white'}}>
            <Text style={styles.text2}>
                Rezarvasyonlar
            </Text>
         
            <TouchableOpacity onPress={readPosts}>
                <Text style={styles.buton}>Rezarvasyonları Göster</Text>
            </TouchableOpacity>
            <ScrollView>
                {
                    data.map(item => {
                        return(
                                <View key={item.id}>
                                     <Text style={styles.text} >MARKA: {item.Marka}</Text>
                                    <Text style={styles.text}>AD SOYAD: {item.AdSoyad}</Text>
                                    <Text style={styles.text}>TELEFON NO: {item.Telno}</Text>
                                    <Text style={styles.text} >GÜN: {item.Day}</Text>
                                    <Text style={styles.text} >YER: {item.Yer}</Text>
                                    <Text style={styles.text}>ZAMAN: {item.Zaman}</Text>
                                    <TouchableOpacity   onPress={() => {deletePost(item.id)}}>
                                         <Text style={styles.butonSil}>Rezarvasyonu Sil</Text>
                                    </TouchableOpacity>
                                </View>
                        )
                    })
                }
            </ScrollView>
           
        </View>
   
     
            
    );
}
const styles = StyleSheet.create({
   
    text2:{
        fontSize:35,
        borderBottomWidth:4,
        borderBottomColor:'purple',
        borderRadius:20,
        color:'black',
        textAlign:'center',
        padding:8,
        fontWeight:'bold'
        
    },
    text:{
            margin:0,
            fontSize:20,
            color:'white',
            backgroundColor:'purple',
            padding:10,
            
            
            
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
    butonSil:{
        backgroundColor:'red',
        color:'white',
        alignSelf:'center',
        textAlign:'center',
        width:250,
       marginBottom:20,
        height:50,
        fontSize:20,
        padding:10,
        borderWidth:0,
        borderRadius:10,
        marginTop:5,
    }
})

/*
  {data && (
                
            <View style={{flex:1,flexDirection:'column'}}>
                  
          {data.map(item => (
            <View key={item.id} style={{marginBottom:20}}>
            <Text style={styles.text} >MARKA: {item.Marka}</Text>
            <Text style={styles.text}>AD SOYAD: {item.AdSoyad}</Text>
            <Text style={styles.text}>TELEFON NO: {item.Telno}</Text>
            <Text style={styles.text} >GÜN: {item.Day}</Text>
            <Text style={styles.text} >YER: {item.Yer}</Text>
            <Text style={styles.text}>ZAMAN: {item.Zaman}</Text>
            <TouchableOpacity   onPress={() => {deletePost()}}>
                <Text style={styles.buton2}>Rezarvasyonu Sil</Text>
            </TouchableOpacity>
            </View>
          ))}
          
        </View>
      )}
       const readPosts = async () => {
        const snapshot = await firebase.firestore().collection('deneme').get();
        const posts = snapshot.docs.map(doc => doc.data());
        setData(posts);
      }
            
       */