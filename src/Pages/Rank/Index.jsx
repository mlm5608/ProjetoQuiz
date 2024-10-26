import { useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { Title } from "../../Components/Title/Index";
import { ButtonRank } from "../../Components/Button/Index";
import { useNavigate } from "react-router-dom";

export const Ranking = () => {
  const [players, setPlayers] = useState([]);
  const [partidas, setPartidas] = useState([]);
  const [lista, Setlista] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    BuscarDados();
  }, []);

  useEffect(() => {
    if (players.length > 0 && partidas.length > 0) {
      const listaGeral = [];

      players.forEach((player) => {
        partidas.forEach((partida) => {
          if (player.userId === partida.idUsuario) {
            listaGeral.push({
              nome: player.nome,
              pontos: partida.pontos,
            });
          }
        });
      });

      // Ordenar pelo número de pontos em ordem decrescente
      listaGeral.sort((p1, p2) => p2.pontos - p1.pontos);
      Setlista(listaGeral);
    }
  }, [players, partidas]);

  function BuscarDados() {
    fetch("http://localhost:3000/Partida")
      .then((response) => response.json())
      .then((data) => setPartidas(data))
      .catch((error) => console.log("Erro ao buscar as Partidas:", error));

    fetch("http://localhost:3000/players")
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.log("Erro ao buscar os jogadores:", error));
  }

  return (
    <div className="min-h-screen bg-primary-watergreen flex flex-col items-center justify-center pt-[40px]">
      <Header login={false} />

      <Title>Placar de líderes:</Title>

      <table className="w-3/5">
        <thead>
          <tr className="border-b-2 border-complementary-green">
            <th className="pl-4 text-start font-tit text-xl font-extrabold text-complementary-green w-[20%] border-r-2 border-complementary-green">
              Posição
            </th>
            <th className="pl-4 text-start font-tit text-xl font-extrabold text-complementary-green w-[50%] border-r-2 border-complementary-green">
              Player
            </th>
            <th className="pl-4 text-start font-tit text-xl font-extrabold text-complementary-green w-[30%]">
              Pontuação
            </th>
          </tr>
        </thead>
        <tbody>
          {lista.slice(0, 10).map((p, posicao) => (
            <tr
              key={posicao}
              className="border-b-2 border-complementary-green h-10"
            >
              <td className="pl-4 text-start font-tit text-lg font-bold text-complementary-green w-[20%] border-r-2 border-complementary-green">
                {posicao + 1}
              </td>
              <td className="pl-4 text-start font-tit text-lg font-bold text-complementary-green w-[50%] border-r-2 border-complementary-green">
                {p.nome}
              </td>
              <td className="pl-4 text-start font-tit text-lg font-bold text-complementary-green w-[30%]">
                {p.pontos}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ButtonRank
        style="bg-complementary-green w-[35%] mt-[30px] -mb-[30px]"
        onClick={() => {
          navigate("/");
        }}
      >
        Voltar ao início
      </ButtonRank>
    </div>
  );
};
