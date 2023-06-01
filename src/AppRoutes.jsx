import React from "react";

import { 
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

// Importe do context
import { AuthProvider } from "./contexts/auth";


const AppRoutes = () => {

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/" element={<HomePage />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;