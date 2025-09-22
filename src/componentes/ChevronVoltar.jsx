import { ChevronsLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ChevronVoltar() {
  const navigate = useNavigate();

  const handleClick = () => navigate(-1);

  return (
    <div
      onClick={handleClick}
      className="flex gap-1 text-blue-400 cursor-pointer transition ease-in-out duration-300 hover:text-blue-500 hover:scale-102"
    >
      <ChevronsLeft />
      <p>Voltar</p>
    </div>
  );
}
