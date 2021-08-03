import React, {useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'

import settings from './src/icons.settings_icon.svg'
import Svg from 'react-native-svg'
import { UserContext } from './user_context'


export function DrawerContent(props) {

    const userInfo = React.useContext(UserContext);

    const handleCi = () => {
        console.log(userInfo);
      }

    return(
        <View style={{flex:1}}>
            
            <DrawerContentScrollView {...props}>
                <View style={}></View>
                <DrawerItem
                    label="Home"
                    onPress={() => {props.navigation.navigate("Home")}}
                />
                <DrawerItem
                    label="History"
                    onPress={() => {props.navigation.navigate("History")}}
                />
                <DrawerItem
                    label="Settings"
                    onPress={() => {props.navigation.navigate("Settings")}}
                />
            </DrawerContentScrollView>
            <DrawerItem
                label="Sign Out"
                onPress={handleCi}
                />

        </View>
    )
}