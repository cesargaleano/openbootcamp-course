import React from 'react';
import { Contact } from '../../models/contact.class';
import PropTypes from 'prop-types';



export const ContactComponent = ({contact}) => {

  const {nombre, apellido, email, conectado} = contact;
  console.log(contact);

  return (
    <div style={{display:"flex", flexDirection:"column" }}>
      <label>{nombre}{" "}{apellido}</label>
      <label>{email}</label>
      <label>{conectado? "Contacto En Linea": "Contacto No Disponible"}</label>
      
      
    </div>
  )
}

