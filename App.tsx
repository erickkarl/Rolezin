import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen } from './src/screens/home';
import { HistoryScreen } from './src/screens/history';
import { SettingsScreen } from './src/screens/settings'

const Drawer = createDrawerNavigator();

export default function App() {

  const [isSignedIn, setIsSignedIn] = React.useState(false)
  const [userInfo, setUserInfo] = React.useState({})


  const handleGoogleSignIn = () => {
    const config = {
      androidClientId: "892471913566-v8kiqcehtkr9ev6uo4fclt8o6nn0rp41.apps.googleusercontent.com",
      scopes: ['profile','email']
    }

    Google.logInAsync(config)
      .then((result) => {
        const {type, user} = result;
        if(type == 'success'){
          setUserInfo(user);
          console.log(userInfo);
          console.log('SUCESSO');
          setIsSignedIn(true);
        }
        else{
          console.log('Falha')
        }

    }).catch(error => {
      console.log(error);
    })

  } 

  return (
    (isSignedIn == false) ?
    (
      <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
        <Button onPress={handleGoogleSignIn} title="Google SignIn"/>
      </View>
    ):
    (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="History" component={HistoryScreen} />
          <Drawer.Screen name="Settings" component={HistoryScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  );
}


