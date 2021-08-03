import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import {SignedInScreen} from '../screens/signedin'

const AppStack = createStackNavigator();

export function AppRoutes(){
    return(
        <AppStack.Navigator>
            <AppStack.Screen name="Index" component={SignedInScreen}/>
        </AppStack.Navigator>
    );
}