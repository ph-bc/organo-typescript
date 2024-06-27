import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src="/images/fb.png" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              <img src="/images/tw.png" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src="/images/ig.png" alt="Instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/images/logo.png" alt="" />
      </section>
      <section>
        <p>Desenvolvido por Alura e seu aluno Pedro.</p>
      </section>
    </footer>
  );
};

export default Footer;
