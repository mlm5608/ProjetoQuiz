import { useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button/Index";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input/Index";
import { Title } from "../../Components/Title/Index";
import { useContext, useState } from "react";
import context from "../../Context/context";

export const TelaCadastro = () => {
  const navigate = useNavigate();
  const [userNovo, setUserNovo] = useState({
    nome: "",
    telefone: "",
    email: "",
    nomeAluno: "",
    salaAluno: "",
  });

  const { setUser } = useContext(context);

  function initFunc(e) {
    e.preventDefault();

    if (
      userNovo.nome != "" ||
      userNovo.email != "" ||
      userNovo.telefone != ""
    ) {
      setUser(userNovo);
      navigate("/quiz");
    } else {
      alert("Informações básicas não foram preenchidas");
    }
  }
  return (
    <div className="min-h-screen bg-primary-watergreen flex flex-col items-center justify-center gap-[45px] pt-[40px]">
      <Header login={false}></Header>

      <Title>Cadastro</Title>
      <form
        onSubmit={(e) => initFunc(e)}
        className="flex flex-col items-center justify-center gap-5 w-[80%]"
      >
        <Input
          req={true}
          onChange={(e) => setUserNovo({ ...userNovo, nome: e.target.value })}
        >
          Nome:
        </Input>

        <Input
          type="tel"
          req={true}
          onChange={(e) =>
            setUserNovo({ ...userNovo, telefone: e.target.value })
          }
        >
          (ddd) telefone:
        </Input>

        <Input
          type="email"
          req={true}
          onChange={(e) => setUserNovo({ ...userNovo, email: e.target.value })}
        >
          Email:
        </Input>

        <Input
          onChange={(e) =>
            setUserNovo({ ...userNovo, nomeAluno: e.target.value })
          }
        >
          Aluno:
        </Input>

        <Input
          onChange={(e) =>
            setUserNovo({ ...userNovo, salaAluno: e.target.value })
          }
        >
          Turma do Aluno
        </Input>

        <Button style="bg-complementary-green w-[35%]">Ready</Button>
      </form>

      <Footer></Footer>
    </div>
  );
};
