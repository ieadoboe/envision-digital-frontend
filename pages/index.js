import Head from "next/head";
import Link from "next/link";
import Navbar from "./../components/Navbar";
import styles from "./../styles/Home.module.scss";

const Home = () => {
  return (
    <>
      <Head>
        <title>Envision Digital | Home</title>
        <meta name="keywords" content="digital" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <section className={styles["hero-section"]}>
        <Navbar />
        <div className={`container ${styles["hero-section-inner"]}`}>
          <h1>Reach your most important customers with ease</h1>
          <p>We help businesses reach a more targeted audience.</p>
          <div>
            <Link href="/contact">
              <a className="btn-primary-long">Contact</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
