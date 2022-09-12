import React, {createContext, useState} from "react";

export const Context = createContext();

export default function Provider({children}) {
    
    const [situation, setSituation] = useState(true)
    const [DADOS, setDADOS] = useState(null);

    return(
        <Context.Provider value={{DADOS, setDADOS, situation, setSituation}}>
            {children}
        </Context.Provider>
    )
}