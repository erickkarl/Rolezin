import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

export function SettingsScreen({navigation}){

    const handleTest = () =>{
        console.log("This is a test");
    }
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>This is a Settings screen test</Text>
            <Button onPress={handleTest} title="BUTAO TEST"/>
        </View>
    );
}
