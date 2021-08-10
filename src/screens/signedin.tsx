import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { ScrapProvider } from '../contexts/scrap_context'

import { DrawerContent } from '../components/drawer_content';

import { HomeScreen } from './home';
import { HistoryScreen } from './history';
import { SettingsScreen } from './settings';
import { ScanScreen } from './scan';

const Drawer = createDrawerNavigator();

export function SignedInScreen() {

  return (
      <ScrapProvider>
        <Drawer.Navigator edgeWidth={200} initialRouteName="Home" drawerContent={props => <DrawerContent {...props}/>}>
          <Drawer.Screen name="Home" component={HomeScreen}/>
          <Drawer.Screen name="History" component={HistoryScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
          <Drawer.Screen name="Scan" component={ScanScreen} />
        </Drawer.Navigator>
      </ScrapProvider>
    );
}