import { useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button/Index";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input/Index";
import { Title } from "../../Components/Title/Index";

export const TelaCadastro = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-primary-watergreen flex flex-col items-center justify-center gap-[45px] pt-[40px]">
      <Header login={false}></Header>

        <Title>Cadastro</Title>
      <form action={initFunc()} className="flex flex-col items-center justify-center gap-5 w-[80%]">
        <Input req={true}>Nome:</Input>
        <Input type="tel" req={true}>(ddd) telefone:</Input>
        <Input type="email" req={true}>Email:</Input>
        <Input>Aluno:</Input>
        <Input>Turma do Aluno</Input>
        <Button style='bg-complementary-green w-[35%]'>Ready</Button>
      </form>
      
      <Footer></Footer>
    </div>
  );
};
