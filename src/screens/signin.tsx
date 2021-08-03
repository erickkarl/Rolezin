import React, {useContext} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { AuthContext } from '../contexts/auth_context';

export function SignInScreen() {
    const { signed, signIn, user } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signIn();
      }



    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button title="Sign In" onPress={handleGoogleSignIn}/>
            <Button title="Teste" onPress={() => {console.log(user)}}/>
        </View>
    );
}