import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import logoMarca from "./Assets/QuizA.png"
import { Button } from "./Components/Button/Index";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate  = useNavigate()
  
  return (
    <div className="min-h-screen bg-primary-watergreen flex items-center justify-center gap-[120px] pt-[40px]" >
      <Header login={true}></Header>

      <img src={logoMarca} alt="" className="h-[400px]"/>

      <div className="flex flex-col h-[400px] justify-around">
        <Button style='bg-primary-blue w-[335px]' onClick={() => navigate("/Cadastro")}>Jogar</Button>
        <Button style='bg-primary-blue w-[335px]'>Ver placar de líderes</Button>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
