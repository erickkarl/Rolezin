import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { UserContext } from '../contexts/user_context';
import Svg, { Path } from "react-native-svg"

import { DrawerContent } from '../components/drawer_content';

import { HomeScreen } from '../screens/home';
import { HistoryScreen } from '../screens/history';
import { SettingsScreen } from '../screens/settings'

const Drawer = createDrawerNavigator();

export function SignedInScreen() {

  return (
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props}/>}>
              <Drawer.Screen name="Home" component={HomeScreen}/>
              <Drawer.Screen name="History" component={HistoryScreen} />
              <Drawer.Screen name="Settings" component={SettingsScreen} />
            </Drawer.Navigator>
          </NavigationContainer>
    );
}