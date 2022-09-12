import React, {createContext, useState} from "react";

export const Context = createContext();

export default function Provider({children}) {
    
    const [situation, setSituation] = useState(true)
    const [DADOS, setDADOS] = useState(null);
    const [nomeCurso, setNomeCurso] = useState(null);
    const [codTurma, setCodTurma] = useState(null);
    const [codChamada, setCodChamada] = useState(null);
    const [chamadas, setChamadas] = useState(null);
    const [diaChamada, setDiaChamada] = useState(null);
    const [mesNominalChamada, setMesNominalChamada] = useState(null);
    const [respostaChamada, setRespostaChamada] = useState(null);
    const [alunosTurma, setAlunosTurma] = useState(null);
    const [Porcentagem1, setPorcentagem1] = useState([1,0]);
    const [falta, setFalta] = useState(null);
    const [chamadasFeita , setChamadasFeita] = useState(null);

    return(
        <Context.Provider
            value={{
                DADOS, setDADOS, 
                nomeCurso, setNomeCurso, 
                codTurma, setCodTurma,
                codChamada, setCodChamada,
                situation, setSituation,
                chamadas, setChamadas,
                diaChamada, setDiaChamada,
                mesNominalChamada, setMesNominalChamada,
                respostaChamada, setRespostaChamada,
                alunosTurma, setAlunosTurma,
                Porcentagem1, setPorcentagem1,
                falta, setFalta,
                chamadasFeita , setChamadasFeita
            }}>
            {children}
        </Context.Provider>
    )
}