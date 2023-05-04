import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";



export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementPather = useCallback(
        (value) => {
            //Para que funcione hay que enviarle el callback, si se hace solo el +1 no funciona
            setCounter( ( counter ) => counter + value );
        },
        [],
    );
    

    // const incrementPather = () => {
    //     setCounter( counter + 1 );
    // };


    return (
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr />
            <ShowIncrement increment = { incrementPather     }/>
        </>

    );
};



