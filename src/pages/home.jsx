import Blog from "../components/blog";
// import Blog2 from "../components/blog-2";

const Home = ({ posts }) => {
  return (
    <>
      <div className="heading">THE BLOG</div>
      <div className="blogs-container-head">
        <h3>Recent Blog Posts</h3>
        <div className="blogs-container">
          {posts.map((post) => (
            <Blog post={post} />
          ))}
        </div>
        <h3>All blog post</h3>
        <div className="all-posts">
          {/* <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
