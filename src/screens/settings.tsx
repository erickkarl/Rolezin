import React, { useContext } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { AuthContext } from '../contexts/auth_context';
import { useScrap } from '../contexts/scrap_context';

export function SettingsScreen({navigation}){

    //const {fTest, item_list} = useContext(ScrapContext)
    const {fTest} = useScrap();
    async function handleTest(){
       // console.log(item_list);
        console.log("Ola");
        await fTest('https://google.com');
    }
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>This is a Settings screen test</Text>
            <Button onPress={handleTest} title="BUTAO TEST"/>
        </View>
    );
}
