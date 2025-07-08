import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./components/nav";
import Home from "./pages/home";
import Newsletter from "./pages/newsletter";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/news")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.error("Error:", err));
  }, []);


  return (
    <BrowserRouter basename="/Blog">
      <Nav />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/About" element={<Home posts={posts} />} />
        <Route path="/Newsletter" element={<Newsletter />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
