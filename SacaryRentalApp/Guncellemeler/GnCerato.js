import React, { useRef, useEffect,useState } from 'react';
import { View, Text, Image, ScrollView, TextInput,StyleSheet, SafeAreaView, Button, Alert, Animated,TouchableOpacity,Card,FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore'
import firebase from "@react-native-firebase/app";
import YonMercedes from '../YöneticiAraclar/YonMercedes';

export default function GnCerato({route}){
    const { studentToUpdate } = route.params
    const studentId = "5"
    const [item, setStudent] = useState({
        Yakit: studentToUpdate.Yakit,
        Renk: studentToUpdate.Renk,
        VitesTipi:studentToUpdate.VitesTipi,
        GunlukUcret: studentToUpdate.GunlukUcret,
        KoltukSayisi: studentToUpdate.KoltukSayisi,
    })

        


    const updateStudent = async (item) => {
        try {
            await firebase.firestore().collection('Cerato').doc(studentId).update(item)
           alert("Araç Güncellendi")
        
        } catch (error) {
            alert("Güncelleme Basarisiz")
        }
    }
    return(
        <View style={{backgroundColor:'white', flex:1}}>
          
          <Text style={styles.baslik}>
           KIA Cerato
            </Text>
            <ScrollView>
            <TextInput 
        style={styles.giris}
        placeholder="Yakıt Tipi"
        value={item.Yakit}
        onChangeText={(Yakit) => {setStudent({...item, Yakit: Yakit})}}
        placeholderTextColor={'black'}/>
         <TextInput 
        style={styles.giris}
        placeholder="Renk"
        value={item.Renk}
        onChangeText={(Renk) => {setStudent({...item, Renk: Renk})}}
        placeholderTextColor={'black'}/>
         <TextInput 
        style={styles.giris}
        placeholder="Vites Tipi"
        value={item.VitesTipi}
        onChangeText={(VitesTipi) => {setStudent({...item, VitesTipi: VitesTipi})}}
        placeholderTextColor={'black'}/>
         <TextInput 
        style={styles.giris}
        placeholder="Gunluk Ucret"
        value={item.GunlukUcret}
        onChangeText={(GunlukUcret) => {setStudent({...item, GunlukUcret: GunlukUcret})}}
        placeholderTextColor={'black'}/>
          <TextInput 
        style={styles.giris}
        placeholder="Koltuk Sayısı"
        value={item.KoltukSayisi}
        onChangeText={(KoltukSayisi) => {setStudent({...item, KoltukSayisi: KoltukSayisi})}}
        placeholderTextColor={'black'}/>
                
            </ScrollView>
            <TouchableOpacity onPress={() => {updateStudent(item)}}>
                <Text style={styles.buton}>Güncelle</Text>
            </TouchableOpacity>
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
        color:'black',
        marginLeft:-10
        
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