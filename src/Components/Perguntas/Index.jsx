import { ButtonPerguntas } from "../Button/Index";
import { TitleQuestion } from "../Title/Index";
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
import { useState } from "react";

export const Perguntas = ({ indice, terminar, proximaPerg, tempoResposta, setMarked }) => {
  const perguntas = [
    {
      id: 1,
      numeroPergunta: 1,
      texto: "Qual é a função principal dos jornais?",
      valor: 100,
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
      altCerta: "C",
      alternativas: [
        { id: "A", texto: "Televisão", imagem: p22, certa: false },
        { id: "B", texto: "Rádio", imagem: p21, certa: false },
        { id: "D", texto: "Jornal impresso", imagem: p24, certa: false },
        { id: "C", texto: "Rede social", imagem: p23, certa: true },
      ]
    },
    {
      id: 3,
      numeroPergunta: 3,
      texto:
        "Qual é uma das características principais de um meio de comunicação digital em relação aos tradicionais?",
      valor: 200,
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
      ]
    },
    {
      id: 4,
      numeroPergunta: 4,
      texto:
        "Como os meios de comunicação podem afetar a opinião pública sobre um evento importante?",
      valor: 300,
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
      ]
    },
    {
      id: 5,
      numeroPergunta: 5,
      texto:
        "Qual das seguintes estratégias de comunicação pode ter o maior impacto em eventos políticos de grande relevância?",
      valor: 300,
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
      ]
    },
  ];
  const [altSel, setAltSel] = useState("");
  const [disabled, setDisbled] = useState(false);

  function HandleClick(id) {
    setAltSel(id);
    setDisbled(true);
    setMarked(id)
    console.log(tempoResposta); 
  }


  function proximaFim() {
    setAltSel("")
    setDisbled(false)
    setMarked("")
  }

  return (
    <div className="flex flex-col items-center justify-center -mb-4">
      <TitleQuestion style={"mr-[500px]"}>
        Pergunta {perguntas[indice].numeroPergunta}
      </TitleQuestion>

      <TitleQuestion style={"w-[600px]"}>
        {perguntas[indice].texto}
      </TitleQuestion>

      <div className="grid grid-cols-2 w-[80%] mt-4 gap-4">
        {perguntas[indice].alternativas.map((alt) => {
          return (
            <button
              key={alt.id}
              className={`flex flex-col gap-3 border-4 ${
                altSel != ""
                  ? altSel == alt.id
                    ? altSel === perguntas[indice].altCerta
                      ? "border-green-500"
                      : "border-red-600"
                    : "border-transparent"
                  : "border-transparent"
              }`}
              onClick={() => HandleClick(alt.id)}
              disabled={disabled}
            >
              <img
                src={alt.imagem}
                alt="imagem da alternativa"
                className="w-[300px] h-[140px]"
              />

              <p className="text-sm font-tit self-start text-complementary-green">
                {alt.texto}
              </p>
            </button>
          );
        })}
      </div>
      {disabled ? (
        <ButtonPerguntas
          onClick={
            indice === perguntas.length - 1
              ? () => {proximaFim(); terminar()}
              : () => {proximaFim(); proximaPerg()}
          }
        >
          {indice === perguntas.length - 1 ? "Finalizar" : "Próxima"}
        </ButtonPerguntas>
      ) : (
        <></>
      )}
    </div>
  );
};
