import React, {createContext, useState} from "react";

export const Context = createContext();

export default function Provider({children}) {
    
    const [DADOS, setDADOS] = useState(null);
    const [nomeCurso, setNomeCurso] = useState(null);
    const [codTurma, setCodTurma] = useState(null);

    return(
        <Context.Provider value={{DADOS, setDADOS, nomeCurso, setNomeCurso, codTurma, setCodTurma}}>
            {children}
        </Context.Provider>
    )
}