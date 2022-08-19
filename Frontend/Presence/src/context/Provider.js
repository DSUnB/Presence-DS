import React, {createContext, useState} from "react";

export const Context = createContext();

export default function Provider({children}) {
    
    const [DADOS, setDADOS] = useState(null);

    return(
        <Context.Provider value={{DADOS, setDADOS}}>
            {children}
        </Context.Provider>
    )
}