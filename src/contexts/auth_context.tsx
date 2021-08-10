import React,{ createContext, useState, useContext } from "react";
import * as Google from 'expo-google-app-auth';
import axios from 'axios'

interface AuthContextData {
    signed: boolean;
    user: object;
    accessToken: string;
    signIn(): Promise<void>;
    signOut(): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({children}){

    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState<Google.GoogleUser|null>();
    const [accessToken, setAccessToken] = useState<string>('');

    const fTest = (url:string) => {
        console.log("doing scraping...");
        axios.get(url)
            .then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
        }

    const signIn = () => {
        const config = {
            androidClientId: "892471913566-v8kiqcehtkr9ev6uo4fclt8o6nn0rp41.apps.googleusercontent.com",
            scopes: ['profile','email']
        }

        Google.logInAsync(config)
            .then((result) => {
            const {type, user, accessToken} = result;
            if(type == 'success'){
                setAccessToken(accessToken);
                setUserInfo(user);
                console.log('SUCESSO');
                setIsSignedIn(true);
            }
            else{
                console.log('Falha')
            }
        }).catch(error => {
            console.log(error);
        })

    }

    const signOut = () => {
        const options = {
            androidClientId: "892471913566-v8kiqcehtkr9ev6uo4fclt8o6nn0rp41.apps.googleusercontent.com"
        }
        console.log(accessToken);
        Google.logOutAsync({accessToken, ...options})
            .then((result) => {
                console.log(result.ok);
                if(result.ok == true){
                    setUserInfo({} as Google.GoogleUser);
                    setIsSignedIn(false);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <AuthContext.Provider value={{signed: isSignedIn, user:userInfo, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextData{
    const context = useContext(AuthContext);
    return context;
  }

