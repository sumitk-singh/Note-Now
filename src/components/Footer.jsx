const Footer = () => {
  return (
    <footer>
      <p>Made by Sumit Kumar Singh</p>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/sumit-singh-a94b56228/"
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://twitter.com/sumitsi79994403" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://github.com/sumitk-singh" target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} NoteNow</p>
    </footer>
  );
};

export { Footer };
