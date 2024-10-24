import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button/Index";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import context from "../../Context/context";
import { Footer } from "../../Components/Footer";

export const Resultado = () => {
  const navigate = useNavigate()
  const {pontuacao, setUser} = useContext(context)

  return (
    <div className="min-h-screen bg-primary-watergreen flex flex-col items-center justify-center gap-5">
      <Header login={false} />

      <h1 className="font-tit text-3xl text-complementary-green">Parabéns! Você fez: </h1>
      <h1 className="font-tit text-7xl text-complementary-green w-[80] mb-10">{pontuacao}<span className="text-lg">pts</span></h1>
      
      <Button style='bg-complementary-green w-[35%]' onClick={() => {setUser({}); navigate("/");}}>Voltar ao início</Button>
      <Button style='bg-complementary-green w-[35%]' onClick={() => {setUser({}); navigate("/rank");}}>Ver Placar de líderes</Button>

      <Footer></Footer>
    </div>
  );
};
