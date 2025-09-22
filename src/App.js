import "./styles.css";
import Header from "./componentes/Header";
import ListaUsers from "./componentes/ListaUsers";
import Footer from "./componentes/Footer";
import UserPost from "./componentes/UserPost";
import PostComments from "./componentes/PostComments";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<ListaUsers />} />
            <Route path="/users/:id" element={<UserPost />} />
            <Route path="/posts/:postId" element={<PostComments />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
