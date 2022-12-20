import React, { useRef, useEffect,useState, useNavigation } from 'react';
import { View, Text, Image, ScrollView, TextInput,StyleSheet, SafeAreaView, Button, Alert, Animated,TouchableOpacity,FlatList} from 'react-native';
import firebase from "@react-native-firebase/app";
import firestore from '@react-native-firebase/firestore'
export default function YonCerato({navigation}){
  const [data, setData] = useState([])

 
  const readPosts = async () => {
    const RezarvasyonCollection = await firestore().collection('Cerato').get()
    console.log(RezarvasyonCollection.docs)
    setData(
        RezarvasyonCollection.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
        })
    )
}
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
            <Text style={styles.baslik}>
           Kia Cerato
            </Text>
            <Image 
                style={styles.resim}
                source={{
                    uri:'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Kia-Cerato-hatch.png'
                }}
                />
                <View style={{flex:2}}>
                  <TouchableOpacity onPress={readPosts}>
                <Text style={styles.buton}>Özellikleri Göster</Text>
            </TouchableOpacity>
            <ScrollView>
                {
                    data.map(item => {
                        return(
                                <View  style={{width:300,alignSelf:'center'}} key={item.id}>
                                     <Text style={styles.text} >Yakıt Tipi: {item.Yakit}</Text>
                                    <Text style={styles.text}>Renk: {item.Renk}</Text>
                                    <Text style={styles.text}>Vitesi Tipi: {item.VitesTipi}</Text>
                                    <Text style={styles.text} >Günlük Ücret: {item.GunlukUcret}</Text>
                                    <Text style={styles.text} >Koltuk Sayısı: {item.KoltukSayisi}</Text>
                                    <TouchableOpacity  onPress={() => {navigation.navigate('GnCerato', {
                                        studentToUpdate: item})}}>
                                        <Text style={styles.buton}>Aracı Güncelle</Text>
                                  </TouchableOpacity>
                                </View>
                        )
                    })
                }
            </ScrollView>
   
    </View>
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
     backgroundColor:'purple',
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
list:{

}

});
/*
 <Text style={styles.text}>Yakıt Tipi: {item.Yakit}</Text>
          <Text style={styles.text}>Renk: {item.Renk}</Text>
          <Text style={styles.text}>Vites Tipi: {item.VitesTipi}</Text>
          <Text style={styles.text}>Koltuk Sayısı: {item.KoltukSayisi}</Text>
          <Text style={styles.text}>Gunluk Ucret: {item.GunlukUcret}</Text>*/