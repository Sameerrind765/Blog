function Blog() {
  return (
    <div className="blog">
      <img className="blog-image" src="./images/blog1.jpg" alt="blog" />
      <div className="txt">
        <p className="date">Sunday,1 Jan 2023</p>
        <div className="head">
          <h2>UX review presentations</h2>
          <img src="./images/arrow.png" />
        </div>
        <p>
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </p>
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