import React, { useEffect, useRef, useState } from 'react'

export const Ejemplo2 = () => {
  const ref = useRef(null); 
  const [contador1, setContador1] = useState(0);
   const [contador2, setContador2] = useState(0);
   
    const incrementar1 = ()=>{
      setContador1(contador1+1);
    }

    const incrementar2 = ()=>{
      setContador2(contador2+1);
    }
    
    /*CASO 1 - RENDERIZAR CADA VEZ Q SE CARGUE EL COMPONENTE
    useEffect(()=>{
      console.log("Cambio en el Estado del componente");
      console.log(ref);
      //ref.current.style.backgroundColor="black";
      
     })
     */

     //CASO 2 - RENDERIZAR SOLO CUANDO CAMBIE EL CONTADOR 1
    useEffect(()=>{
      console.log("Cambio en el Estado del componente");
      console.log(ref);
      
      
     },[contador1])
     


    
  return (
    <div >
      <h4>Contador1: {contador1}</h4>
      <h4>Contador2: {contador2}</h4>
      <h5 ref={ref}>HOLA</h5>
      <button onClick={incrementar1}>Incrementar BT1</button>
      <button onClick={incrementar2}>Incrementar BT2</button>
    </div>
  )
}
