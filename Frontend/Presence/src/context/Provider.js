import React, {createContext, useState} from "react";

export const Context = createContext();

export default function Provider({children}) {
    
    const [situation, setSituation] = useState(true)
    const [DADOS, setDADOS] = useState(null);
    const [nomeCurso, setNomeCurso] = useState(null);
    const [codTurma, setCodTurma] = useState(null);
    const [codChamada, setCodChamada] = useState(null);
    const [chamadas, setChamadas] = useState(null);

    return(
        <Context.Provider
            value={{
                DADOS, setDADOS, 
                nomeCurso, setNomeCurso, 
                codTurma, setCodTurma,
                codChamada, setCodChamada,
                situation, setSituation,
                chamadas, setChamadas
            }}>
            {children}
        </Context.Provider>
    )
}