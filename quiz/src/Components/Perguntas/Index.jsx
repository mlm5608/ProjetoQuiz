import { useEffect, useState } from "react";
import { ButtonPerguntas } from "../Button/Index";
import { Title } from "../Title/Index";
import { useNavigate } from "react-router-dom";

export const Perguntas = ({ indice, terminar, proximaPerg }) => {
  const perguntas = [
    {
      id: 1,
      numeroPergunta: 1,
      texto: "Qual é a função principal dos jornais?",
      alternativas: [
        { id: "A", texto: "Mostrar fotos de férias", imagem: "" },
        { id: "B", texto: "Informar sobre notícias e eventos", imagem: "" },
        { id: "C", texto: "Vender produtos", imagem: "" },
        { id: "D", texto: "Mostrar receitas de culinária", imagem: "" },
      ],
    },
    {
      id: 2,
      numeroPergunta: 2,
      texto:
        "Qual desses meios de comunicação permite que você converse com amigos e veja atualizações em tempo real?",
      alternativas: [
        { id: "A", texto: "Rádio", imagem: "" },
        { id: "B", texto: "Televisão", imagem: "" },
        { id: "C", texto: "Rede social", imagem: "" },
        { id: "D", texto: "Jornal impresso", imagem: "" },
      ],
    },
    {
      id: 3,
      numeroPergunta: 3,
      texto:
        "Qual é uma das características principais de um meio de comunicação digital em relação aos tradicionais?",
      alternativas: [
        {
          id: "A",
          texto: "Ele depende do uso de transmissões analógicas",
          imagem: "",
        },
        { id: "B", texto: "Ele permite a interação em tempo real", imagem: "" },
        {
          id: "C",
          texto: "Ele é limitado por horários fixos de programação",
          imagem: "",
        },
        {
          id: "D",
          texto: "Ele oferece notícias apenas em formato impresso",
          imagem: "",
        },
      ],
    },
    {
      id: 4,
      numeroPergunta: 4,
      texto:
        "Como os meios de comunicação podem afetar a opinião pública sobre um evento importante?",
      alternativas: [
        { id: "A", texto: "Por meio de campanhas publicitárias", imagem: "" },
        { id: "B", texto: "Pela realização de eventos ao vivo", imagem: "" },
        {
          id: "C",
          texto: "Através da cobertura extensa e opiniões diversas",
          imagem: "",
        },
        { id: "D", texto: "Com o envio de mensagens de texto", imagem: "" },
      ],
    },
    {
      id: 5,
      numeroPergunta: 5,
      texto:
        "Qual das seguintes estratégias de comunicação pode ter o maior impacto em eventos políticos de grande relevância?",
      alternativas: [
        { id: "A", texto: "A utilização de memes e humor", imagem: "" },
        {
          id: "B",
          texto: "A disseminação de campanhas por influenciadores",
          imagem: "",
        },
        {
          id: "C",
          texto: "A divulgação de dados estatísticos e fontes confiáveis",
          imagem: "",
        },
        {
          id: "D",
          texto: "A cobertura sensacionalista e emocional",
          imagem: "",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <Title>Pergunta {perguntas[indice].numeroPergunta}</Title>
      <Title>{perguntas[indice].texto}</Title>
      <ButtonPerguntas
        onClick={
          indice === perguntas.length - 1
            ? () => terminar()
            : () => proximaPerg()
        }
      >
        {indice === perguntas.length - 1 ? "Finalizar" : "Próxima"}
      </ButtonPerguntas>
    </div>
  );
};
