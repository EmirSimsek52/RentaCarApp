import React, { useRef, useEffect } from 'react';
import { View, Text, Image, ScrollView, TextInput,StyleSheet, SafeAreaView, Button, Alert, Animated} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firebase from "@react-native-firebase/app";
import Araclar from './screens/Araclar';
import HomePage from './screens/HomePage';
import LoginPage from './screens/LoginPage';
import Yonetici from './screens/Yonetici';
import Mercedes from './AraclarPages/Mercedes';
import Citroen from './AraclarPages/Citroen';
import Megane from './AraclarPages/Megane';
import Egea from './AraclarPages/Egea';
import Cerato from './AraclarPages/Cerato';
import Clio from './AraclarPages/Clio';
import Celysee from './AraclarPages/Celysee';
import Pejo from './AraclarPages/Pejo';
import Rezarvasyon from './YoneticiPages/Rezarvasyon';
import YonAraclar from './YoneticiPages/YonAraclar';
import YonMercedes from './YöneticiAraclar/YonMercedes';
import GnMercedes from './Guncellemeler/GnMercedes';
import YonCitroen from './YöneticiAraclar/YonCitroen';
import GnCitroen from './Guncellemeler/GnCitroen';
import YonMegane from './YöneticiAraclar/YonMegane';
import GnMegane from './Guncellemeler/GnMegane';
import YonEgea from './YöneticiAraclar/YonEgea';
import GnEgea from './Guncellemeler/GnEgea';
import YonCerato from './YöneticiAraclar/YonCerato';
import GnCerato from './Guncellemeler/GnCerato';
import YonClio from './YöneticiAraclar/YonClio';
import GnClio from './Guncellemeler/GnClio';
import YonCelysee from './YöneticiAraclar/YonCelysee';
import GnCelysee from './Guncellemeler/GnCelysee';
import YonPejo301 from './YöneticiAraclar/YonPejo301';
import GnPejo301 from './Guncellemeler/GnPejo301';

export default function App (){
  const Stack =createNativeStackNavigator();
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomePage} options={{title:'   SACARYA RENTAL ARAÇ KİRALAMA'}} />
          <Stack.Screen name='Araclar' component={Araclar} options={{title:'ARAÇLAR'}} />
          <Stack.Screen name='Login' component={LoginPage} options={{title:'Kullanıcı Giriş Sayfası'}} />
          <Stack.Screen name='Yonetici' component={Yonetici} options={{title:'Yönetici Paneli'}} />
          <Stack.Screen name='Mercedes' component={Mercedes} options={{title:'Mercedes C200D AMG'}} />
          <Stack.Screen name='Citroen' component={Citroen} options={{title:'Citroen C5 Aircross'}} />
          <Stack.Screen name='Megane' component={Megane} options={{title:'Renault Megane'}} />
          <Stack.Screen name='Egea' component={Egea} options={{title:'Fiat Egea'}} />
          <Stack.Screen name='Cerato' component={Cerato} options={{title:'Kia Cerato'}} />
          <Stack.Screen name='Clio' component={Clio} options={{title:'Renault Clio'}} />
          <Stack.Screen name='Celysee' component={Celysee} options={{title:'Citroen C-Elysee'}} />
          <Stack.Screen name='pejo301' component={Pejo} options={{title:'Peugeot 301'}} />
          <Stack.Screen name='Rezarvasyon' component={Rezarvasyon} options={{title:'Rezarvasyonlar'}} />
          <Stack.Screen name='YonAraclar' component={YonAraclar} options={{title:'Arçları Güncelle'}} />
          <Stack.Screen name='YonMercedes' component={YonMercedes} options={{title:'Mercedes Yönetici'}} />
          <Stack.Screen name='GnMercedes' component={GnMercedes} options={{title:'Mercedes Güncelle'}} />
          <Stack.Screen name='YonCitroen' component={YonCitroen} options={{title:'Citroen Yönetici'}} />
          <Stack.Screen name='GnCitroen' component={GnCitroen} options={{title:'Citroen Güncelle'}} />
          <Stack.Screen name='YonMegane' component={YonMegane} options={{title:'Megane Yönetici'}} />
          <Stack.Screen name='GnMegane' component={GnMegane} options={{title:'Megane Güncelle'}} />
          <Stack.Screen name='YonEgea' component={YonEgea} options={{title:'Egea Yönetici'}} />
          <Stack.Screen name='GnEgea' component={GnEgea} options={{title:'Egea Güncelle'}} />
          <Stack.Screen name='YonCerato' component={YonCerato} options={{title:'KIA Cerato Yönetici'}} />
          <Stack.Screen name='GnCerato' component={GnCerato} options={{title:'KIA Cerato Güncelle'}} />
          <Stack.Screen name='YonClio' component={YonClio} options={{title:'Renault Clio Yönetici'}} />
          <Stack.Screen name='GnClio' component={GnClio} options={{title:'Renault Clio Güncelle'}} />
          <Stack.Screen name='YonCelysee' component={YonCelysee} options={{title:'Citroen C-Elysee Yönetici'}} />
          <Stack.Screen name='GnCelysee' component={GnCelysee} options={{title:'Citroen C-Elysee Güncelle'}} />
          <Stack.Screen name='YonPejo301' component={YonPejo301} options={{title:'Peugeot 301 Yönetici'}} />
          <Stack.Screen name='GnPejo301' component={GnPejo301} options={{title:'Peugeot 301 Güncelle'}} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}
