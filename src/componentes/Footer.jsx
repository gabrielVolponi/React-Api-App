import { Linkedin, Github } from "lucide-react";

const iconMap = {
  Linkedin: Linkedin,
  Github: Github,
};

const sociais = [
  {
    icon: "Linkedin",
    link: "https://www.linkedin.com/in/gabriel-volponi-a11720215/",
  },
  {
    icon: "Github",
    link: "https://github.com/gabrielVolponi",
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 items-center bg-blue-300 text-white py-4">
      <p>❤️ Desenvolvido por Gabriel Volponi ❤️</p>
      <ul className="flex gap-2">
        {sociais.map((social, index) => {
          const IconComponent = iconMap[social.icon];
          return (
            <li key={index}>
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <IconComponent className="transition duration-300 ease-in-out cursor-pointer hover:scale-105 hover:text-blue-500" />
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
