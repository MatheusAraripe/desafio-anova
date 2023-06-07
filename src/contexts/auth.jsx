import {createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const navigate = useNavigate();

    
    const getUsersFromLs = () => {
        const data = localStorage.getItem("users")
        if (data){
            return JSON.parse(data)
        }
        return [];
    };


    // atribui se o usuário está logado ou não
    const [user, setUser] = useState(null);

    const [users, setUsers] = useState(getUsersFromLs);

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

        const usersArry = JSON.parse(localStorage.getItem('users'));

        const foundUser = usersArry.find(e => e.email === email && e.password === password)

        if(foundUser){

            const loggedUser = {
                id: "1",
                email: foundUser.email
            };
            
            localStorage.setItem("user", JSON.stringify(loggedUser));

            setUser(loggedUser);
            navigate("/");
        } else {
            alert("Credenciais incorretas")
            navigate("/login");
        }
    };

    const signUp = (email, password) => {
        
        const newUser = {
            email,
            password
        }

        users.push(newUser)
        localStorage.setItem('users',JSON.stringify(users));

        console.log(localStorage.getItem('users'));

        //navigate("/");
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUsers(null);
        navigate("/login");
    };

    return(
        <AuthContext.Provider value={{authenticated: !!user, users, loading, login, logout, signUp}}>
            {children}
        </AuthContext.Provider>
    );
}