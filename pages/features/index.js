import Head from "next/head"
import Navbar from "../../components/Navbar";
import styles from "./../../styles/Features.module.scss";


export default function Home() {
  return (
    <>
          <Head>
        <title>Envision Digital | Features</title>
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
    
      <section className={styles["header-section"]}>
        <Navbar />
        <div className={`container ${styles["header-section-inner"]}`}>
          <h1>Ut pharetra, rutrum non lorem amet.</h1>
        </div>
      </section>
    </>
  );
}
