import React, {useState} from 'react';

import PropTypes from 'prop-types'


const CounterApp = ({value}) =>{

const [ counter, setCounter ] = useState(value);// Retorna un arreglo []





//handleAdd
const handleAdd = (e) =>{
    //setCounter((c) => c + 1 );
    setCounter (counter + 1);
}

//handleSubstract
const handleSubstract = (e) =>{
    setCounter (counter - 1);
}


//handleReset
const handleReset = (e) => {
    setCounter (value);
}

    return(
    <>
        <h1>counterApp</h1>
        <h2>{ counter }</h2>
        <button onClick = { handleAdd }>+1</button>
        <button onClick = { handleSubstract }>-1</button>
        <button onClick = { handleReset}>Reset</button>
    </>
    );
}


CounterApp.propTypes ={
    value : PropTypes.number.isRequired
}

export default CounterApp