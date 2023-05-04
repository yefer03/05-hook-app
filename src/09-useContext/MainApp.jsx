import { Routes, Route, Navigate, Link } from "react-router-dom";

import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { NavBar } from './NavBar';

import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {

    return (
        //Cualquier componente que esté dentro del componente UserProvider puede ver 
        //y obtener la info que se está configurando
        <UserProvider>
            {/* El link se extrae y se usa en reemplazo de la etiqueta a, y se usa to
            en vez de href esto evita que se recarge la pagina

            <Link to="/about">About</Link>
            <Link to="/login">Login</Link> */}
            <NavBar />

            <hr />

            {/* Adentro se colocan las rutas y el path donde va a aparecer el componenteque 
            luego se envia como el element el cual es la instancia de otro componente jsx */}
            <Routes>
                <Route path="/" element={ <HomePage/> } />
                <Route path="/*" element={ <Navigate to="/about" /> } />
                <Route path="about" element={ <AboutPage/> } />
                <Route path="login" element={ <LoginPage/> } />
            </Routes>

        </UserProvider>
    );
};


