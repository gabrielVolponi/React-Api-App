import { useEffect, useState } from "react";
import { getUsers } from "../services/api.js";
import CardUser from "./CardUser";
import LogoWind from "./LogoWind";

export default function ListaUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [layoutMode, setLayoutMode] = useState("grid"); // grid | list

  useEffect(() => {
    async function fetchUsers() {
      try {
        const userData = await getUsers();
        setUsers(userData || []);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <div>Carregando...</div>;

  return (
    <div className="my-4 flex flex-col items-center w-full">
      <h1 className="font-bold text-xl text-blue-400 my-4 lg:text-2xl lg:mb-0 lg:mt-4">
        🌀Bem Vindo a rede azulzinha🌀
      </h1>
      <div className="md:w-full md:flex md:justify-between md:mt-4 lg:flex-col lg:items-center">
        <h2 className="font-bold italic text-blue-300 text-lg underline mb-2 md:mb-4 md:mt-2 md:ml-6 md:text-2xl lg:ml-0">
          Listagem de Usuários
        </h2>
        <button
          onClick={() => setLayoutMode(layoutMode === "grid" ? "list" : "grid")}
          className="mb-4 px-4 py-2 bg-blue-300 text-white rounded-lg shadow hover:bg-blue-500 transition hidden md:block md:mr-6 lg:mr-0"
        >
          {layoutMode === "grid" ? "🔳 Ver como Lista" : "📋 Ver como Grade"}
        </button>
      </div>

      <div
        className={
          layoutMode === "grid"
            ? "grid grid-cols-1 gap-2 mx-4 mt-2 sm:grid-cols-2 md:grid-cols-3"
            : "flex flex-col items-center gap-2 w-full max-w-2xl mx-4 mt-2"
        }
      >
        {users.map((user, idx) => (
          <CardUser
            key={user.id || idx}
            id={user.id}
            nome={user.name}
            frase={user.company?.catchPhrase}
          />
        ))}
      </div>
      <LogoWind />
    </div>
  );
}
