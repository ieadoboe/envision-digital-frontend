import Head from "next/head";

//IMPORT CSS COOL
import styles from "./../styles/Home.module.scss";

//HOMEPAGE SECTIONS
import HeroSection from "../components/sections/HeroSection";
import CampusSection from "./../components/sections/CampusSection";
import FeatureSection from "../components/sections/FeatureSection";
import NumberSection from "./../components/sections/NumberSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import CtaSection from "../components/sections/CtaSection";
import Navbar from "../components/layout/Navbar";

const Home = (props) => {
  return (
    <>
      <Head>
        <title>
          The platform where students learn, connect and engage with brands and
          companies | Envision Digital
        </title>
        <meta name="keywords" content="digital" />
        <meta
          name="description"
          content="digital advertisement in university campuses ghana"
        />
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
        <meta name="theme-color" content="#eb5634" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
        />
      </Head>

      <div className="navbar page-header">
        <Navbar />
      </div>
      <section className={`${styles["hero-section"]}`}>
        <HeroSection />
      </section>
      <section className={`${styles["campus-section"]}`}>
        <CampusSection />
      </section>
      <section className={`${styles["feature-section"]}`}>
        <FeatureSection />
      </section>
      <section className={`${styles["numbers-section"]}`}>
        <NumberSection />
      </section>
      <section className={`${styles["testimonial-section"]}`}>
        <TestimonialSection />
      </section>
      <section className={`${styles["cta-section"]}`}>
        <CtaSection />
      </section>
    </>
  );
};

export default Home;
