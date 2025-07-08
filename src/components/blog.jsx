function Blog({ post }) {
  if (!post || !post.description) return null;
  const shortdesc =
    post.description?.length > 80
      ? post.description.slice(0, 80) + "..."
      : post.description || "";
  return (
    <div className="blog" key={post.id}>
      <img className="blog-image" src={post.image_url} alt="blog" />
      <div className="txt">
        <p className="date">{post.pubDate}</p>
        <div className="head">
          <h2>{post.title}</h2>
          <img src="./images/arrow.png" alt="arrow" />
        </div>
        <p>{shortdesc}</p>
        <div className="blog-tags">
          <p>Design</p>
          <p>Research</p>
          <p>Presentation</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
