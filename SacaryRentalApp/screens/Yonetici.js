import React, { useRef, useEffect } from 'react';
import { View, Text, Image, ScrollView, TextInput,StyleSheet, SafeAreaView, Button, Alert, Animated,TouchableOpacity,} from 'react-native';


export default function Yonetici({navigation}){
    
    return(
            <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'black', fontSize:30,textAlign:'center',borderBottomWidth:4,borderColor:'purple',width:300,borderRadius:25,marginBottom:40,marginTop:-200}}>
                    Yönetici Sayfası
                    </Text>
                    <TouchableOpacity style={styles.Arac} onPress={() => navigation.navigate('YonAraclar')}>
                        <Text style={styles.text}>Araçları Görüntüle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Arac}  onPress={() => navigation.navigate('Rezarvasyon')}>
                        <Text style={styles.text2}>Rezarvasyonları Görüntüle</Text>
                    </TouchableOpacity>
            </View>
    );
}


const styles = StyleSheet.create({
    Arac:{
        borderWidth:0,
        backgroundColor:'purple',
        borderRadius:20,
        marginTop:30,
        width:300,
        height:50
    },
    text:{
        fontSize:25,
        color:'white',
        textAlign:'center',
        padding:7
        
    },
    text2:{
        fontSize:22,
        color:'white',
        textAlign:'center',
        padding:8
        
    }
})