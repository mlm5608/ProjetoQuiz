import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import context from "../Context/context";
import { TelaCadastro } from "../Pages/Cadastro/Index";
import { PerguntasPage } from "../Pages/Perguntas/Index";
import { Resultado } from "../Pages/Resultado/Index";
import { Ranking } from "../Pages/Rank/Index";


export const RoutesPage = () => {
    const [user, setUser] = useState("");

    // const ProtctedRoute = (props) => {
    //     return user.login ? props.children : <Navigate to="/" />;
    // };

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={
                        <App />
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
                        <context.Provider value={{ user }}>
                            <PerguntasPage />
                        </context.Provider>
                    }
                    path="/quiz"
                />
                <Route
                    element={
                        <context.Provider value={{ user, setUser }}>
                            <Resultado />
                        </context.Provider>
                    }
                    path="/result"
                />
                <Route
                    element={
                        <context.Provider>
                            <Ranking />
                        </context.Provider>
                    }
                    path="/rank"
                />

                {/* Rotas não especificadas, encaminharão para a tela de login */}
                <Route path="/*" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    );
};