import Nav from "./components/nav";
import Blog from "./components/blog";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <div className="head-hero">THE BLOG</div>
      <div className="blogs-container-head">
        <h3>Recent blog posts</h3>
        <div className="blogs-container">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
          <h3 id="head-post">All blog post</h3>
        <div className="all-posts">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    </>
  );
}

export default App;
