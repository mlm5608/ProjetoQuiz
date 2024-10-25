import React, { useState, useEffect, useContext } from "react";
import { Header } from "../../Components/Header";
import { Perguntas } from "../../Components/Perguntas/Index";
import { useNavigate } from "react-router-dom";
import Countdown from "react-countdown";
import p11 from "../../Assets/p11.png";
import p12 from "../../Assets/p12.png";
import p13 from "../../Assets/p13.png";
import p14 from "../../Assets/p14.png";
import p21 from "../../Assets/p21.png";
import p22 from "../../Assets/p22.png";
import p23 from "../../Assets/p23.png";
import p24 from "../../Assets/p24.png";
import p31 from "../../Assets/p31.png";
import p32 from "../../Assets/p32.png";
import p33 from "../../Assets/p33.png";
import p34 from "../../Assets/p34.png";
import p41 from "../../Assets/p41.png";
import p42 from "../../Assets/p42.png";
import p43 from "../../Assets/p43.png";
import p44 from "../../Assets/p44.png";
import p51 from "../../Assets/p51.png";
import p52 from "../../Assets/p52.png";
import p53 from "../../Assets/p53.png";
import p54 from "../../Assets/p54.png";
import context from "../../Context/context";
import { v4 as uuid } from "uuid" 

export const PerguntasPage = () => {
  const perguntas = [
    {
      id: 1,
      numeroPergunta: 1,
      texto: "Qual é a função principal dos jornais?",
      valor: 100,
      goldValue: 1.2,
      altCerta: "B",
      alternativas: [
        {
          id: "B",
          texto: "Informar sobre notícias e eventos",
          imagem: p12,
          certa: true,
        },
        {
          id: "A",
          texto: "Mostrar receitas de culinária",
          imagem: p14,
          certa: false,
        },
        { id: "D", texto: "Vender produtos", imagem: p13, certa: false },
        {
          id: "C",
          texto: "Mostrar fotos de férias",
          imagem: p11,
          certa: false,
        },
      ],
    },
    {
      id: 2,
      numeroPergunta: 2,
      texto:
        "Qual desses meios de comunicação permite que você converse com amigos e veja atualizações em tempo real?",
      valor: 200,
      goldValue: 1.4,
      altCerta: "C",
      alternativas: [
        { id: "A", texto: "Televisão", imagem: p22, certa: false },
        { id: "B", texto: "Rádio", imagem: p21, certa: false },
        { id: "D", texto: "Jornal impresso", imagem: p24, certa: false },
        { id: "C", texto: "Rede social", imagem: p23, certa: true },
      ],
    },
    {
      id: 3,
      numeroPergunta: 3,
      texto:
        "Qual é uma das características principais de um meio de comunicação digital em relação aos tradicionais?",
      valor: 200,
      goldValue: 1.6,
      altCerta: "B",
      alternativas: [
        {
          id: "B",
          texto: "Ele permite a interação em tempo real",
          imagem: p32,
          certa: true,
        },
        {
          id: "A",
          texto: "Ele oferece notícias apenas em formato impresso",
          imagem: p34,
          certa: false,
        },
        {
          id: "D",
          texto: "Ele é limitado por horários fixos de programação",
          imagem: p33,
          certa: false,
        },
        {
          id: "C",
          texto: "Ele depende do uso de transmissões analógicas",
          imagem: p31,
          certa: false,
        },
      ],
    },
    {
      id: 4,
      numeroPergunta: 4,
      texto:
        "Como os meios de comunicação podem afetar a opinião pública sobre um evento importante?",
      valor: 300,
      goldValue: 1.8,
      altCerta: "C",
      alternativas: [
        {
          id: "A",
          texto: "Com o envio de mensagens de texto",
          imagem: p44,
          certa: false,
        },
        {
          id: "B",
          texto: "Pela realização de eventos ao vivo",
          imagem: p42,
          certa: false,
        },
        {
          id: "C",
          texto: "Através da cobertura extensa e opiniões diversas",
          imagem: p43,
          certa: true,
        },
        {
          id: "D",
          texto: "Por meio de campanhas publicitárias",
          imagem: p41,
          certa: false,
        },
      ],
    },
    {
      id: 5,
      numeroPergunta: 5,
      texto:
        "Qual das seguintes estratégias de comunicação pode ter o maior impacto em eventos políticos de grande relevância?",
      valor: 300,
      goldValue: 2,
      altCerta: "C",
      alternativas: [
        {
          id: "A",
          texto: "A utilização de memes e humor",
          imagem: p51,
          certa: false,
        },
        {
          id: "C",
          texto: "A divulgação de dados estatísticos e fontes confiáveis",
          imagem: p53,
          certa: true,
        },
        {
          id: "B",
          texto: "A disseminação de campanhas por influenciadores",
          imagem: p52,
          certa: false,
        },
        {
          id: "D",
          texto: "A cobertura sensacionalista e emocional",
          imagem: p54,
          certa: false,
        },
      ],
    },
  ];

  const [disabled, setDisbled] = useState(false);
  const [marked, setMarked] = useState({});
  const [indice, setIndice] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [selectedTime, setSelectedTime] = useState(15);
  const [pontos, setPonto] = useState(0);

  const navigate = useNavigate();

  const { user } = useContext(context);

  const getColor = () => {
    if (selectedTime > 10) {
      return "gold";
    } else if (selectedTime <= 10 && selectedTime > 3) {
      return "blue";
    } else {
      return "red";
    }
  };

  const getProgress = () => {
    const progress = (selectedTime / 15) * 100;
    return progress;
  };

  const Renderer = ({ seconds }) => {
    return (
      <p className="relative ml-[240px] mt-3 font-tit text-2xl ">{seconds}</p>
    );
  };

  function handleNextQuestion(){
    setDisbled(false);
    setMarked({});
    setIsPaused(false);
    if (indice < 4 ) {
      setIndice((prevIndice) => prevIndice + 1);
    }
    else{
      handleEnd()
    }
  };

  async function handleSelectAnswer (secondsRemaining, alt) {
    setIsPaused(true);
    setDisbled(true);
    setMarked(alt.id);
    const response = await CalcPoints(secondsRemaining, alt)
    setPonto((point) => point + parseInt(response))
  };

  function handleEnd() {
    const data = {
      id: uuid(),
      idUsuario: user,
      pontos: pontos
    }
    try {
      fetch('http://localhost:3000/Partida',{
        method: "POST",
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log("Erro ao salvar a pontuação");
      console.log(error);
    }
    navigate("/result")
  }

  function CalcPoints(tempo, alternativa) {
    if (alternativa.id === perguntas[indice].altCerta) {
      if (tempo > 10) {
        const pontosQ = perguntas[indice].valor * perguntas[indice].goldValue;
        return pontosQ;
      } else {
        const pontosQ = perguntas[indice].valor;
        return pontosQ;
      }
    } else {
      return 0;
    }
  }

  useEffect(() => {
    setSelectedTime(15);
    setIsPaused(false);
  }, [indice]);

  return (
    <div className="min-h-screen bg-primary-watergreen flex flex-col items-center justify-center pt-[40px]">
      <Header login={false} />

      <div className="relative rounded-3xl h-14 w-[400px] bg-primary-watergreen border border-black overflow-hidden mb-5">
        <div
          className="absolute top-0 left-0 h-full"
          style={{
            width: `${getProgress()}%`,
            backgroundColor: getColor(),
            transition: "width 1s linear, background-color 0.5s ease",
          }}
        >
          <Countdown
            key={indice}
            date={Date.now() + selectedTime * 1000}
            onComplete={() => (isPaused ? null : alert("Tempo esgotado!"))} //Fazer ternário para se pausado não alertar nada, caso contrário passar para a próximo pergunta.
            renderer={() => <Renderer seconds={selectedTime} />}
            paused={isPaused}
            onTick={({ seconds }) => {
              if (!isPaused) {
                setSelectedTime(seconds);
              }
            }}
          />
        </div>
      </div>

      <Perguntas
        indice={indice}
        marked={marked}
        perguntas={perguntas}
        disabled={disabled}
        HandleNext={() => handleNextQuestion()}
        HandleSelect={handleSelectAnswer}
        remaignTime={selectedTime}
      />
    </div>
  );
};
