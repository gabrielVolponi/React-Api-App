import { useNavigate } from "react-router-dom";

export default function CardUser({ id, nome, frase }) {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/users/${id}`);

  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-center px-4 py-2 rounded-4xl border-1 border-gray-400 gap-2 cursor-pointer transition ease-in-out duration-300 bg-blue-300 text-white max-w-[450px] shadow-md hover:bg-blue-500 hover:scale-105 hover:border-none"
    >
      <p className="font-bold">{nome}</p>
      <p>{frase}</p>
    </div>
  );
}
