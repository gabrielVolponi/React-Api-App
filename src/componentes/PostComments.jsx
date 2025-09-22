import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../services/api";
import ChevronVoltar from "./ChevronVoltar";
import LogoWind from "./LogoWind";
import Comment from "./Comment";
import ConfirmModal from "./ConfirmModal";

export default function PostComments() {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);

  useEffect(() => {
    async function fetchComments() {
      const data = await getComments(Number(postId));
      setComments(data);
      setLoading(false);
    }
    fetchComments();
  }, [postId]);

  const handleDeleteClick = (id) => {
    setCommentToDelete(id);
    setModalOpen(true);
  };

  const confirmDelete = () => {
    setComments((prev) => prev.filter((c) => c.id !== commentToDelete));
    setModalOpen(false);
    setCommentToDelete(null);
  };

  const cancelDelete = () => {
    setModalOpen(false);
    setCommentToDelete(null);
  };

  if (loading)
    return <div className="text-blue-500">Carregando comentários...</div>;

  return (
    <>
      <div className="mx-4 mt-4">
        <ChevronVoltar />
      </div>
      <div className="p-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-blue-500 underline">
          Comentários do Post {postId}
        </h2>
        <ul className="mt-4 space-y-4 w-full max-w-2xl">
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              data={comment}
              onDelete={handleDeleteClick}
            />
          ))}
        </ul>
        <LogoWind distanciaVertical={4} />
      </div>

      <ConfirmModal
        isOpen={modalOpen}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        message="Tem certeza que deseja excluir este comentário? Esta ação não pode ser desfeita."
      />
    </>
  );
}
