import { Trash2 } from "lucide-react";

export default function Comment({ data, onDelete }) {
  const getFormattedName = (fullName) => {
    if (!fullName) return "";
    const parts = fullName.split(" ");
    if (parts.length === 1) return parts[0];
    return `${parts[0]} ${parts[parts.length - 1]}`;
  };

  const getUsernameFromEmail = (email) => {
    if (!email) return "";
    return `@${email.split("@")[0].toLowerCase()}`;
  };

  const getBodyPreview = (body) => {
    if (!body) return "";
    return body.length > 140 ? body.slice(0, 140) + "..." : body;
  };

  return (
    <li className="relative border-none px-5 py-4 rounded-4xl bg-blue-300 text-white shadow text-start">
      <p className="font-bold">{getFormattedName(data.name)}</p>
      <p className="text-sm text-blue-600">
        {getUsernameFromEmail(data.email)}
      </p>
      <p className="mt-2 italic">{getBodyPreview(data.body)}</p>

      <Trash2
        onClick={() => onDelete(data.id)}
        className="absolute top-4 right-4 cursor-pointer hover:scale-110 hover:text-red-500 transition"
      />
    </li>
  );
}
