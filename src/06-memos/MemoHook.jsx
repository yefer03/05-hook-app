import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";



const heaviStuff = ( number ) => {

    for (let i = 0; i < number; i++) {
        console.log('Ahí vamos...');
    };

    return `${ number } iteraciones realizadas`;
};


export const MemoHook = () => {

    const { counter, increment } = useCounter(4000);
    const [ show, setShow ] = useState( true );


    //Se hace referencia a ola funcion que quiero que memorice 
    //y como argumento de la funcion se coloca el valor que va a memorizar
    //El segundo argumento del memo es la condicion con la cual se va a reprocesar
    //En este caso es cada vez que el counter cambia de valor 
    const memorizedValue = useMemo( () => heaviStuff( counter ), [counter]);



    return (
        <>
            <h1>Counter: <small> { counter } </small>  </h1>
            <hr />

            <h4> { memorizedValue } </h4>

            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show ) }
            >
                Show/Hide {JSON.stringify( show )}
            </button>
        </>
    );
};


