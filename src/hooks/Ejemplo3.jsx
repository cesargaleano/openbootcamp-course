/*
EJEMPLO DE USO DE LOS HOOKS
UseEffect
UseContext
*/

import React, { useContext, useState } from 'react'

//Dipone de un contexto  recibe del padre


export const Componente1 = ()=>{
    const state = useContext(miContexto)
    return(
        <div>
        <h2> El token es: {state.token}</h2>
        <Componente2 />
        </div>
    )
}

export const Componente2 = ()=>{
    const state = useContext(miContexto)
    return(
        <h2>
            La sesion es: {state.sesion}</h2>
        
    )
}

const miContexto = React.createContext(null);
export const Ejemplo3 = () => {
    

    const initialState = {
        token: '1235678',
        sesion: 1
    };
    const [sesionData, setSesionData] = useState(initialState);

    const updateSesion = ()=>{
        setSesionData({
            token: 'JWT12345465',
            sesion: sesionData.sesion+1
        })
    };

  return (
    <div>
        <miContexto.Provider value={sesionData}>
        <Componente1 />
        <button onClick={updateSesion}>Update</button>
        </miContexto.Provider>
    </div>
  )
}
