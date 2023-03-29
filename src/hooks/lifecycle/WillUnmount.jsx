import React, { Component } from "react"

export class WillUnmount extends Component {

    componentWillUnmount(){
        console.log("Comportamiento cuando el componente se va a desmontar");
    }

    render(){
        return(
            <h1>WillUnmount</h1>
        )
    }
}


export const WillUnmountHook = ()=>{

    useEfffect(()=>{

        return(()=>{
            console.log("Comportamiento cuando el componente se va a desmontar");
        })
    },[])

    return(
        <h1>WillUnmount</h1>
    )
}