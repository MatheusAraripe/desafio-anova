import {createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const navigate = useNavigate();

    // atribui se o usuário está logado ou não
    const [user, setUser] = useState(null);

    // loading para esperar a aplicação recuperar user no local storage
    const [loading, setLoading] = useState(true);


    // useEffect checa toda vez que a pagina é recarregada se o usuário
    // ainda está logado ou não
    useEffect( () => {
        const recoveredUser = localStorage.getItem("user");

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    },[]);

    const login = (email, password) => {

        const loggedUser = {
            id: "1",
            email
        };

        localStorage.setItem("user", JSON.stringify(loggedUser));

        if(password === "12345678"){
            setUser(loggedUser);
            navigate("/");
        };
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    return(
        <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}