import { useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button/Index";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input/Index";
import { Title } from "../../Components/Title/Index";
import { useContext, useState } from "react";
import context from "../../Context/context";
import {v4 as uuid} from "uuid"

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

  async function initFunc() {
    if (
      userNovo.nome != "" ||
      userNovo.email != "" ||
      userNovo.telefone != ""
    ) {
      const data = {
        userId: uuid(),
        nome: userNovo.nome,
        email: userNovo.email,
        telefone: userNovo.telefone,
        aluno: userNovo.nomeAluno,
        salaAluno: userNovo.salaAluno,
      };
      await CadastrarUsuario(data)
      setUser(data.userId);
      navigate("/quiz");
    } else {
      alert("Informações básicas não foram preenchidas");
    }
  }

  const CadastrarUsuario = (data) => {
    try {
      fetch(`http://localhost:3000/players`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      
    } catch {
      console.log("erro ao cadastrar");
    }
    navigate("/result");
  };
  return (
    <div className="min-h-screen bg-primary-watergreen flex flex-col items-center justify-center gap-[45px] pt-[40px]">
      <Header login={false}></Header>

      <Title>Cadastro</Title>
      <div className="flex flex-col items-center justify-center gap-5 w-[80%]">
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

        <Button style="bg-complementary-green w-[35%]" onClick={() => initFunc()}>Ready</Button>
      </div>

      <Footer></Footer>
    </div>
  );
};
