import { Moon, Sun, Wind } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const backHome = () => navigate("/");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header
      className={`flex justify-between items-center px-8 py-5 z-50 ${
        darkMode ? "bg-blue-300 text-black" : "bg-blue-300 text-white"
      }`}
    >
      <div
        onClick={backHome}
        className="flex gap-1 items-center cursor-pointer"
      >
        <span className="font-bold">WindMedia</span>
        <Wind />
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="transition ease-in-out duration-300 hover:text-blue-500 hover:scale-105"
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>
    </header>
  );
}
