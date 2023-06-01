import {createContext, useState} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const login = (email, password) => {
        if(password === "12345"){
            setUser({id: '1', email});
            navigate("/");
        }
    };

    const logout = () => {
        setUser(null);
        navigate("/login");
    };

    return(
        <AuthContext.Provider value={{authenticated: !!user, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}