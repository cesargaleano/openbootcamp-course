import React, { useEffect, useState } from 'react'

export const ClockWithFunction = () => {
  
    const [state, setState] = useState ({
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
     });

     useEffect(()=>{
     
        const timer = setInterval(()=>{
            setState(prev=>(
                {
                ...state,
                fecha:new Date(),
                edad: prev.edad+1
            }))
        },1000)

        return(()=>{
            clearInterval(timer)
        })
     },[])

    return (
        <div>
        <h2>
        Hora Actual:
        {state.fecha.toLocaleTimeString()}
        </h2>
        <h3>{state.nombre} {state.apellidos}</h3>
        <h1>Edad: {state.edad}</h1>
        </div>
  )
}

