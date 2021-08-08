import React, { useContext } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { ScrapContext } from '../contexts/scrap_context';

export function SettingsScreen({navigation}){

    const {doScrap} = useContext(ScrapContext)
    const handleTest = () =>{
        //doScrap('https://www.google.com/');
    }
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>This is a Settings screen test</Text>
            <Button onPress={handleTest} title="BUTAO TEST"/>
        </View>
    );
}
