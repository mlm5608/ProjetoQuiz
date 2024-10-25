import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button/Index";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import context from "../../Context/context";
import { Footer } from "../../Components/Footer";

export const Resultado = ({}) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(context);
  const [pontos, setPontos] = useState(null);

  useEffect(() => {
    console.log(user);
  }, [pontos]);

  function limparDados() {
    setUser("");
    console.log(user);
  }

  return (
    <div className="min-h-screen bg-primary-watergreen flex flex-col items-center justify-center gap-5">
      <Header login={false} />

      {pontos != null ? (
        <>
          <h1 className="font-tit text-3xl text-complementary-green">
            Parabéns! Você fez:{" "}
          </h1>
          <h1 className="font-tit text-7xl text-complementary-green w-[80] mb-10">
            {pontos}
            <span className="text-lg">pts</span>
          </h1>

          <Button
            style="bg-complementary-green w-[35%]"
            onClick={() => {
              limparDados();
              navigate("/");
            }}
          >
            Voltar ao início
          </Button>
          <Button
            style="bg-complementary-green w-[35%]"
            onClick={() => {
              limparDados();
              navigate("/rank");
            }}
          >
            Ver Placar de líderes
          </Button>
        </>
      ) : (
        <></>
      )}

      <Footer></Footer>
    </div>
  );
};
