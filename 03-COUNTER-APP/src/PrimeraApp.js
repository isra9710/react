//FC

import { Fragment } from "react/cjs/react.production.min";

import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo   }) => {
//Desestructuración de la propiedad mandada con valor por defecto
//const PrimeraApp = ({ saludo = 'Hola mundo'}) => {
//const PrimeraApp = (props) => {

    /*const saludo = 'Hola mundo';
    console.log(props);
    const saludo = {
        nombre: 'Israel',
        edad:34
    };*/

   

    return (
        /*La propiedad saludo se manda desde el index.js
            por eso se puede acceder mediante props*/
        <>
            <h1>{ saludo }</h1>
            <pre>{/*JSON.stringify( saludo, null, 3 ) */}</pre>
            
            <p> {subtitulo}</p>
        </>
    );
}


PrimeraApp.propTypes = {
    saludo : PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;