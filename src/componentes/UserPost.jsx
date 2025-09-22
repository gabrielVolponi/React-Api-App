import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsers, getPosts } from "../services/api";
import ChevronVoltar from "./ChevronVoltar";
import LogoWind from "./LogoWind";

export default function UserPost() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const users = await getUsers();
      const foundUser = users.find((u) => u.id === Number(id));
      setUser(foundUser);

      const userPosts = await getPosts(Number(id));
      setPosts(userPosts);
    }

    fetchData();
  }, [id]);

  if (!user) return <div className="text-blue-500">Carregando Posts...</div>;

  return (
    <div className="">
      <div className="mx-4 mt-8">
        <ChevronVoltar />
      </div>
      <div className="px-4 pb-4 flex flex-col items-center gap-2">
        <h1 className="text-xl font-bold text-blue-500">{user.name}</h1>
        <div className="flex justify-center gap-4 text-blue-400">
          <p>📫 {user.email}</p>
          <p>🏢 {user.company?.name}</p>
        </div>
        <h2 className="italic text-blue-300 text-lg underline mt-2">
          Listagem de Posts
        </h2>
        <ul className="mt-2 space-y-2">
          {posts.map((post) => (
            <li
              onClick={() => navigate(`/posts/${post.id}`)}
              key={post.id}
              className="border p-2 rounded-4xl shadow-sm bg-blue-300 text-white text-start px-4 py-2 cursor-pointer transition ease-in-out duratio-300 hover:bg-blue-500 hover:scale-105"
            >
              <h3 className="font-bold my-2">{post.title}</h3>
              <p className="italic">{post.body}</p>
            </li>
          ))}
        </ul>
        <LogoWind distanciaVertical={4} />
      </div>
    </div>
  );
}
