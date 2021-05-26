import Head from "next/head";

//COMPONENTS
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import CtaSection from "../components/sections/CtaSection";

//ABOUT PAGE CSS
import styles from "./../styles/About.module.scss";
const About = () => {
  //SECTION HEADER INFO
  const PageHeader = {
    title: "Our Story",
  };

  return (
    <>
      <Head>
        <title>Envision Digital - About</title>
        <meta name="keywords" content="digital" />
        <html lang="en"></html>
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

      <section className="page-header">
        <Navbar />
        <Header data={PageHeader} />
      </section>
      <section className={`${styles["cta-section"]}`}>
        <CtaSection />
      </section>
    </>
  );
};

export default About;
