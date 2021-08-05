import React, {useContext} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import {SignInScreen} from '../screens/signin'
import {SignedInScreen} from '../screens/signedin'
import { AuthContext } from '../contexts/auth_context'
const AuthStack = createStackNavigator();

export function AuthRoutes(){
    const { signed, user } = useContext(AuthContext);
    return(
        /*<AuthStack.Navigator initialRouteName="Sign In">
            <AuthStack.Screen name="Sign In" component={SignInScreen}/>
        </AuthStack.Navigator>*/
        <SignInScreen/>
    );
}