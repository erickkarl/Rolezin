import React, {createContext, useState} from "react";
import axios from 'axios'

interface ScrapContentData {
    item_list:object;
    fTest(url:string): Promise<void>;
}

export const ScrapContext = createContext<ScrapContentData>({} as ScrapContentData);

export function ScrapProvider({children}) {

    const [itemList,setItemList] = useState<object|undefined>({wat: "lol"});
    
    const fTest = (url:string) => {
        console.log("doing scraping...");
        axios.get(url)
            .then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
    }

    return(
        <ScrapContext.Provider value={{item_list:itemList, fTest}}>
            {children}
        </ScrapContext.Provider>
    );
}