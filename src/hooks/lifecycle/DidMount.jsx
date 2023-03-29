import { Component, useEffect } from "react";

export class Didmount extends Component {

    componentDidMount(){
        console.log("Comportamiento despues de cargado el componente y antes de renderizarlo");
    }

    render(){
        return(
            <h1>DidMount</h1>
        )
    }
}


export const DidMuntHook = ()=>{

    useEffect(()=>{
        console.log("Comportamiento despues de cargado el componente y antes de renderizarlo");
    },[])

    return(

        <h1>DidMount</h1>
    )
}