import Link from "next/link";
import styles from "./../../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles["footer-section"]}`}>
      <section className={`container`}>
        <section className={`container-2 ${styles["footer"]}`}>
          <div className={`${styles["company-info"]}`}>
            <h4>ENVISION DIGITAL</h4>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                morbi donec dignissim pharetra quisque vulputate. Vitae nisi,
                pulvinar nisl vestibulum eu sed.
              </p>
            </div>
          </div>

          <div className={`${styles["website-info"]}`}>
            <ul className={`list-reset ${styles["sitemap"]}`}>
              <li>
                <h4>Website</h4>
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
            </ul>
          </div>
          <div className={`${styles["support-info"]}`}>
            <ul className={`list-reset ${styles["sitemap"]}`}>
              <li>
                <h4>Company</h4>
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
