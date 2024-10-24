import React, { useState, useEffect } from "react";
import { MyTimer } from "../../Components/Timer/Index";
import { Header } from "../../Components/Header";
import { Perguntas } from "../../Components/Perguntas/Index";
import { useNavigate } from "react-router-dom";

export const PerguntasPage = () => {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [markedQuestion, setMarkedQuestion] = useState("")
  const navigate = useNavigate()


  const createTimer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 15); 
    return time;
  };

  useEffect (() => {
  }, [indicePergunta])

  return (
    <div className="min-h-screen bg-primary-watergreen flex flex-col items-center justify-center pt-[40px]">
      <Header login={false} />

      <MyTimer
        expiryTimestamp={createTimer()}
        onExpire={() => alert("silas.. silascou")}
        indice={indicePergunta}
        marked={markedQuestion}
      />

      <Perguntas
        indice={indicePergunta}
        terminar={() => navigate("/result")}
        proximaPerg={() =>  setIndicePergunta(indicePergunta + 1)}
        setMarked={setMarkedQuestion}
      />
    </div>
  );
};