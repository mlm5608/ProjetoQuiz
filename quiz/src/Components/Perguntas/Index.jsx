import { ButtonPerguntas } from "../Button/Index";
import { TitleQuestion } from "../Title/Index";
import p11 from "../../Assets/p11.png"
import p12 from "../../Assets/p12.png"
import p13 from "../../Assets/p13.png"
import p14 from "../../Assets/p14.png"
import p21 from "../../Assets/p21.png"
import p22 from "../../Assets/p22.png"
import p23 from "../../Assets/p23.png"
import p24 from "../../Assets/p24.png"
import p31 from "../../Assets/p31.png"
import p32 from "../../Assets/p32.png"
import p33 from "../../Assets/p33.png"
import p34 from "../../Assets/p34.png"
import p41 from "../../Assets/p41.png"
import p42 from "../../Assets/p42.png"
import p43 from "../../Assets/p43.png"
import p44 from "../../Assets/p44.png"
import p51 from "../../Assets/p51.png"
import p52 from "../../Assets/p52.png"
import p53 from "../../Assets/p53.png"
import p54 from "../../Assets/p54.png"

//Fazer state de selected: botão próximo só aparece se ele for diferente de vazio e reseta a variável depois de apertado, e as alt's ficam desabilitadas depois de uma selecionada, para calcular a pontuação ainda não sei como.

export const Perguntas = ({ indice, terminar, proximaPerg }) => {
  const perguntas = [
    {
      id: 1,
      numeroPergunta: 1,
      texto: "Qual é a função principal dos jornais?",
      valor: 100,
      alternativas: [
        { id: "A", texto: "Mostrar fotos de férias", imagem: p11, },
        { id: "B", texto: "Informar sobre notícias e eventos", imagem: p12, },
        { id: "C", texto: "Vender produtos", imagem: p13 },
        { id: "D", texto: "Mostrar receitas de culinária", imagem: p14, },
      ],
    },
    {
      id: 2,
      numeroPergunta: 2,
      texto: "Qual desses meios de comunicação permite que você converse com amigos e veja atualizações em tempo real?",
      valor: 200,
      alternativas: [
        { id: "A", texto: "Rádio", imagem: p21 },
        { id: "B", texto: "Televisão", imagem: p22 },
        { id: "C", texto: "Rede social", imagem: p23 },
        { id: "D", texto: "Jornal impresso", imagem: p24 },
      ],
    },
    {
      id: 3,
      numeroPergunta: 3,
      texto: "Qual é uma das características principais de um meio de comunicação digital em relação aos tradicionais?",
      valor: 200,
      alternativas: [
        { id: "A", texto: "Ele depende do uso de transmissões analógicas", imagem: p31, },
        { id: "B", texto: "Ele permite a interação em tempo real", imagem: p32, },
        { id: "C", texto: "Ele é limitado por horários fixos de programação", imagem: p33, },
        { id: "D", texto: "Ele oferece notícias apenas em formato impresso", imagem: p34, },
      ],
    },
    { id: 4,
      numeroPergunta: 4,
      texto: "Como os meios de comunicação podem afetar a opinião pública sobre um evento importante?",
      valor: 300,
      alternativas: [
        { id: "A", texto: "Por meio de campanhas publicitárias", imagem: p41, },
        { id: "B", texto: "Pela realização de eventos ao vivo", imagem: p42, },
        { id: "C", texto: "Através da cobertura extensa e opiniões diversas", imagem: p43, },
        { id: "D", texto: "Com o envio de mensagens de texto", imagem: p44, },
      ],
    },
    {
      id: 5,
      numeroPergunta: 5,
      texto: "Qual das seguintes estratégias de comunicação pode ter o maior impacto em eventos políticos de grande relevância?",
      valor: 300,
      alternativas: [
        { id: "A", texto: "A utilização de memes e humor", imagem: p51, },
        { id: "B", texto: "A disseminação de campanhas por influenciadores", imagem: p52, },
        { id: "C", texto: "A divulgação de dados estatísticos e fontes confiáveis", imagem: p53, },
        { id: "D", texto: "A cobertura sensacionalista e emocional", imagem: p54, },
      ],
    },
  ];

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
            <div key={alt.id} className="flex flex-col gap-3 ">
              <img
                src={alt.imagem}
                alt="imagem da alternativa"
                className="w-[350px] h-[160px]"
              />
              <p className="text-md font-tit self-start">{alt.texto}</p>
            </div>
          );
        })}
      </div>
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
