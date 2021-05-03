import Link from "next/link";
import styles from "./../../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles["footer-section"]}`}>
      <section className={`container ${styles["footer"]}`}>
        <div>
          <ul className={`list-reset ${styles["sitemap"]}`}>
            <li>
              <h4>Sitemap</h4>
            </li>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <a>FAQs</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Privacy Policy</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={`${styles["company-info"]}`}>
          <h4>ENVISION DIGITAL</h4>
          <div>
            <p>4545 East McKinley Street</p>
            <p>Accra, Greater Accra 85008</p>
          </div>
          <div>
            <p>0 (233) 500 000 000</p>
            <p>info@envisiondigitals.com</p>
          </div>

          <div>
            <p>
              <span>&copy;</span> Copyright 2021 Envision Digital
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
