import Link from "next/link";
import styles from "./../../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles["footer-section"]}`}>
      <section className={`container`}>
        <section className={`container-2 ${styles["footer"]}`}>
          <div className={`${styles["company-info"]}`}>
            <h4>ENVISION DIGITAL SIGNAGE NETWORK</h4>
            <div>
              <p>
                Envision Digital - The platform where students learn, connect
                and engage with brands and companies. Envision Digital is the
                key to reach large campus audiences effectively. We are the
                platform that the entire university community turns to for
                information.
              </p>
            </div>
          </div>

          <div className={`${styles["website-info"]}`}>
            <ul className={`list-reset ${styles["sitemap"]}`}>
              <li>
                <h4>Sitemap</h4>
              </li>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/faq">FAQs</Link>
              </li>
            </ul>
          </div>
          <div className={`${styles["support-info"]}`}>
            <ul className={`list-reset ${styles["sitemap"]}`}>
              <li>
                <h4>Legal</h4>
              </li>
              <li>
                <Link href="/">
                  <a>Support</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>Terms</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a>Privacy Policy</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${styles["social-info"]}`}>
            <h4>Socials</h4>
            <div className={`${styles["social-icons"]}`}>
              <div>
                <a href="#">
                  <i className="fab fa-linkedin-in fa-lg"></i>
                </a>
              </div>
              <div>
                <a href="#">
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
              </div>
              <div>
                <a href="#">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className={`center ${styles["copyright-text"]}`}>
          <p>
            <span>&copy;</span> Copyright 2021 Envision Digital
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
