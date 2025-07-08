import Blog from "../components/blog";

const Home = ({ posts }) => {
  return (
    <>
      <div className="head-hero">THE BLOG</div>
      <div className="blogs-container-head">
        <h3>Recent Blog Posts</h3>
        <div className="blogs-container">
          {/* {posts.map((post) => (
            <Blog post={post} />
          ))} */}
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
        <h3>All blog post</h3>
        <div className="all-posts">
          <Blog />
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
};

export default Home;
