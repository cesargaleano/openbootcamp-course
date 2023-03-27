import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import { ContactComponent } from '../pure/ContactComponent';

const data = new Contact("Cesar", "Galeano", "tocega@gmail.com", true);

export const ContactChange = ({contact=data}) => {
   
    const [contactState, setContacState] = useState(contact);
    const {nombre, apellido, email, conectado} = contactState;
    
    const handleChange = ()=>{
        setContacState({...contactState, conectado: !contactState.conectado})
    };

    return (
    <>
      <ContactComponent contact={contactState} />
      <button onClick={handleChange}>Status</button>
    </>
  )
}



ContactChange.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}