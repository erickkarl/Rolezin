import React, {createContext, useState} from "react";
import axios from 'axios'

interface ScrapContentData {
    item_list:object;
    doScrap(url:string):Promise<void>;
}

export const ScrapContext = createContext<ScrapContentData>({} as ScrapContentData)

export function ScrapContent({children}) {
    const [itemList,setItemList] = useState<object>();
    
    const doScrap = (url:string) => {
        console.log("doing scraping...");
        axios.get(url)
            .then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
    }

    return(
        <ScrapContext.Provider value={{item_list:itemList, doScrap}}>
            {children}
        </ScrapContext.Provider>
    );
}