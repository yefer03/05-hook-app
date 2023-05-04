import { useEffect, useState } from "react";
import { Message } from "./Message";


export const SimpleForm = () => {


    const [ formState, setFormState ] = useState({
        username : 'yeferson',
        email : 'yeferson@gmail.com'
    });

    const { username, email } = formState;


    const onInputChange = ({ target }) => {

        const { name, value } = target;
        setFormState({
            ...formState,
            //Se coloca entre corchetes la propiedad del objeto que va a cambiar
            //las otras propiedades del objeto siguen mantentiendo su valor
            [ name ] : value,
        })
    };

    //El primer argumento es el callback y es lo que se va a ejecutar cada ves que llame el useEffect
    //El segundo son las dependencias, estas son las condiciones por las cuales quiero que se vuelva a disparar
    useEffect( () => {
        //console.log('El useEfect se llamó');
    }, []);

    useEffect( () => {
        //console.log('El useEfect se llamó por el formState');
    }, [ formState ]);

    useEffect( () => {
        //console.log('El email cambió');
    }, [ email ]);



    return (
        <>
            <h1>Formulario simple</h1>
            <hr />
            
            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email"
                className="form-control mt-3"
                placeholder="Email@example.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            {
                (username === 'yeferson') && <Message />
            }

            
        
        </>
    );
};
