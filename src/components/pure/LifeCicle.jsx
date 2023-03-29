import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCicle extends Component {
    constructor(props) {
        super(props);
        console.log("CONSTRUCTOR: Cuando se Instancia el componente");
    }

    componentWillMount() {

console.log("WILLMOUNT: Antes de Montar el Componente");
    }

    componentDidMount() {
        console.log("DIDMOUNT: Depues de Montar el Componente y antes de renderizarlo");
    }

    componentWillReceiveProps(nextProps) {
        console.log("WILLRECEIVEPROPS: Cuando se recibe una o mas props");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("WILLRECEIVEPROPS: Indica true o false, si el componente debe o no actualizarse");
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("WILLUPDATE: Antes de Actualizarse el componente");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("DIDUPDATE: Despues de Actualizarse el componente");
    }

    componentWillUnmount() {
        console.log("WILLUNMOUNT: Antes de desmontarse el componente");
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

LifeCicle.propTypes = {

};

export default LifeCicle;