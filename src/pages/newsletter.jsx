const newsletter = () => {
  return (
    <main className="newsletter">
      <div>
        <h1>📬 Subscribe to Our Newsletter</h1>
      </div>
      <p className="desc">
        Subscribe to our newsletter and stay updated with the latest blog posts,
        exclusive insights, and community updates—delivered straight to your
        inbox. No spam, just valuable content, and you can unsubscribe anytime.
      </p>

      <form>
        <input type="Name" placeholder="Enter Your Name" required />
        <input
          type="email"
          placeholder="Enter a Valid Email Address"
          required
        />
        <button type="submit">Subscribe</button>
      </form>

      <p class="small">
        Join hundreds of readers who receive updates just once or twice a month.
        <br />
        Have feedback? Email us at{" "}
        <a href="mailto:your-email@example.com">your-email@example.com</a>.
      </p>
    </main>
  );
};

export default newsletter;
