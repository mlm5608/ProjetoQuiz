import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import context from "../Context/context";


export const RoutesPage = () => {
    const [user, setUser] = useState({});
    const [pontuacap, setPontuacao] = useState(0)

    // const ProtctedRoute = (props) => {
    //     return user.login ? props.children : <Navigate to="/" />;
    // };

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={
                        <context.Provider value={{ setUser }}>
                            <App />
                        </context.Provider>
                    }
                    path="/"
                />

                {/* Rotas não especificadas, encaminharão para a tela de login */}
                <Route path="/*" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    );
};