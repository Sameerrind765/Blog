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
    async function fetchAnime() {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=Naruto&limit=1`
      );

      const text = await res.text();
      const xml = new window.DOMParser().parseFromString(text, "text/xml");
      const anime = xml.querySelector("anime");
      if (!anime) return;

      const title = anime.getAttribute("name");
      const image = xml.querySelector('info[type="Picture"]')?.textContent;
      const date = xml.querySelector('info[type="Vintage"]')?.textContent;
      const description = xml.querySelector(
        'info[type="Plot Summary"]'
      )?.textContent;
      console.log("working")
      setPosts([{ title, image, date, description }]);
    }
    fetchAnime();
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
