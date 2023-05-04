import { useState } from "react";
import { UserContext } from "./UserContext";


// const user = {
//     id: 123,
//     name: 'Yeferson Serna Restrepo',
//     email: 'Yeferson@gmail.com' ,
// };


//Este componenete se coloca en el componente mas alto donde los hijos lo neseciten
export const UserProvider = ({ children }) => {


    const [ user, setUser ] = useState()


    return (
        // <UserContext.Provider value={{ hola: 'Mundo', user }}>
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    );
};
