import React, { useContext } from "react";

import { 
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignupPage";

// Importe do context
import { AuthContext, AuthProvider } from "./contexts/auth";



// criação da área privada(apenas usuários logados)
const Private = ({children}) => {
    const {authenticated, loading} = useContext(AuthContext)

    if (loading) {
        return <div className="loading"> Carregando...</div>;
    }
    if(!authenticated){
        return <Navigate to="/login" />
    }

    return children;
};

const AppRoutes = () => {

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/" element={ <Private><HomePage /></Private>} />
                    <Route exact path="/signup" element={ <SignUp />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;