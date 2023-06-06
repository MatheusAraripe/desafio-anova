import {createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const navigate = useNavigate();

    
    const getUsersFromLs = () => {
        const data = localStorage.getItem("user")
        if (data){
            return JSON.parse(data)
        }
        return [];
    };


    // atribui se o usuário está logado ou não
    const [users, setUsers] = useState(getUsersFromLs);

    // loading para esperar a aplicação recuperar user no local storage
    const [loading, setLoading] = useState(true);



    // useEffect checa toda vez que a pagina é recarregada se o usuário
    // ainda está logado ou não
    useEffect( () => {
        const recoveredUser = localStorage.getItem("user");

        if(recoveredUser){
            setUsers(JSON.parse(recoveredUser));
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
            setUsers(loggedUser);
            navigate("/");
        };
    };

    const signUp = (email, password) => {
        
        const newUser = {
            email,
            password
        }

        users.push(newUser)
        localStorage.setItem('user',JSON.stringify(users));

        console.log(localStorage.getItem('user'));

        //navigate("/");
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUsers(null);
        navigate("/login");
    };

    return(
        <AuthContext.Provider value={{authenticated: !!users, users, loading, login, logout, signUp}}>
            {children}
        </AuthContext.Provider>
    );
}