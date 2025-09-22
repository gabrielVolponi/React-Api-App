import { Wind } from "lucide-react";

export default function LogoWind({ distanciaVertical = 20 }) {
  return (
    <Wind
      size={100}
      className={`hidden text-blue-400 mx-auto mt-${distanciaVertical} md:block`}
    />
  );
}
