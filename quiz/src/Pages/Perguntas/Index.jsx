import React, { useState, useEffect } from "react";
import { MyTimer } from "../../Components/Timer/Index";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { Perguntas } from "../../Components/Perguntas/Index";
import { useNavigate } from "react-router-dom";

export const PerguntasPage = () => {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const navigate = useNavigate()

  // Configura o tempo do timer para 15 segundos
  const createTimer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 15); // 15 segundos de contagem regressiva
    return time;
  };

  useEffect (() => {
  }, [indicePergunta])

  return (
    <div className="min-h-screen bg-primary-watergreen flex flex-col items-center justify-center gap-[40px] pt-[40px]">
      <Header login={false} />

      {/* O timer é exibido com 15 segundos inicialmente e pausado */}
      <MyTimer
        expiryTimestamp={createTimer()}
        onExpire={() => alert("silas.. silascou")}
        indice={indicePergunta}
      />

      <Perguntas
        indice={indicePergunta}
        terminar={() => navigate("/result")}
        proximaPerg={() =>  setIndicePergunta(indicePergunta + 1)}
      />

      <Footer />
    </div>
  );
};