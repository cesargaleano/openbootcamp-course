import React, { Component, useEffect, useState } from "react";


export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log("Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado");
    }

    render(){
        return(
            <h1>DidUpdate</h1>
        )
    }

};


export const DidUpdateHook = ()=>{

    
    useEffect(()=>{
        console.log("Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado");
    })

    return(
        <h1></h1>
    )
};