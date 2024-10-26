import { ButtonPerguntas } from "../Button/Index";
import { TitleQuestion } from "../Title/Index";

export const Perguntas = ({
  indice,
  marked,
  perguntas,
  disabled,
  HandleNext,
  HandleSelect,
  remaignTime,
}) => {
  
  return (
    <div className="flex flex-col items-center justify-center -mb-4">
      <TitleQuestion style={"w-[670px]"}>
        Pergunta {perguntas[indice].numeroPergunta}
      </TitleQuestion>

      <TitleQuestion style={"w-[670px]"}>
        {perguntas[indice].texto}
      </TitleQuestion>

      <div className="grid grid-cols-2 w-[80%] mt-4 gap-4">
        {perguntas[indice].alternativas.map((alt) => {
          return (
            <button
              key={alt.id}
              className={`flex flex-col gap-3 border-4 ${
                marked !== ""
                  ? marked === alt.id
                    ? marked === perguntas[indice].altCerta
                      ? "border-green-500"
                      : "border-red-600"
                    : "border-transparent"
                  : "border-transparent"
              }`}
              onClick={() => HandleSelect(remaignTime, alt)}
              disabled={disabled}
            >
              <img
                src={alt.imagem}
                alt="imagem da alternativa"
                className="w-[400px] h-[160px]"
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
          onClick={() => HandleNext()}
        >
          {indice === perguntas.length - 1 ? "Finalizar" : "Próxima"}
        </ButtonPerguntas>
      ) : (
        <></>
      )}
    </div>
  );
};
