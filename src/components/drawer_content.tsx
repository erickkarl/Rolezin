import React, {useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import { Ionicons, Octicons } from '@expo/vector-icons'

import { AuthContext } from '../contexts/auth_context'

export function DrawerContent(props) {

    const { user, signed, signOut } = useContext(AuthContext);

    const handleSignOut = () => {
        console.log(user);
        signOut();
      }

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <DrawerItem
                    icon={() => (<Ionicons name="home" size={24} color="black"/>)}
                    label="Home"
                    onPress={() => {props.navigation.navigate("Home")}}
                />
                <DrawerItem
                    icon={() => (<Ionicons name="list" size={24} color="black"/>)}
                    label="History"
                    onPress={() => {props.navigation.navigate("History")}}
                />
                <DrawerItem
                    icon={() => (<Ionicons name="settings" size={24} color="black"/>)}
                    label="Settings"
                    onPress={() => {props.navigation.navigate("Settings")}}
                />
                <DrawerItem
                    icon={() => (<Ionicons name="qr-code-outline" size={24} color="black"/>)}
                    label="Scan"
                    onPress={() => {props.navigation.navigate("Scan")}}
                />
            </DrawerContentScrollView>
            <DrawerItem
                icon={() => (<Octicons name="sign-out" size={24} color="black"/>)}
                label="Sign Out"
                onPress={handleSignOut}
                />

        </View>
    )
}