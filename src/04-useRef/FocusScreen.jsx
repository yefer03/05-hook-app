import { useRef } from "react";


export const FocusScreen = () => {

    //Hace focus a un input y se le coloca en la propiedad ref a este
    const inputRef = useRef();

    const onClic = () => {
        console.log( inputRef );
    };

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />

            <input 
                ref={ inputRef }
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />

            <button 
                className="btn bt-primary mt-4"
                onClick={ onClic }
            >
                Set focus
            </button>
        </>
    );

};
