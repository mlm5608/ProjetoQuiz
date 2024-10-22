import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import context from "../Context/context";
import { TelaCadastro } from "../Pages/Cadastro/Index";
import { PerguntasPage } from "../Pages/Perguntas/Index";


export const RoutesPage = () => {
    const [user, setUser] = useState({});
    const [pontuacao, setPontuacao] = useState(0)

    // const ProtctedRoute = (props) => {
    //     return user.login ? props.children : <Navigate to="/" />;
    // };

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={
                        <context.Provider>
                            <App />
                        </context.Provider>
                    }
                    path="/"
                />
                <Route
                    element={
                        <context.Provider value={{ setUser }}>
                            <TelaCadastro />
                        </context.Provider>
                    }
                    path="/Cadastro"
                />
                <Route
                    element={
                        <context.Provider>
                            <PerguntasPage />
                        </context.Provider>
                    }
                    path="/quiz"
                />

                {/* Rotas não especificadas, encaminharão para a tela de login */}
                <Route path="/*" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    );
};