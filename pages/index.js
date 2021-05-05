import Head from "next/head";
import Image from "next/image";
import styles from "./../styles/Home.module.scss";
import CampusSection from './../components/sections/CampusSection';
import NumberSection from './../components/sections/NumberSection';
import BrandSection from './../components/sections/BrandSection';
import FeatureSection from "../components/sections/FeatureSection";
import HeroSection from "../components/sections/HeroSection";

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

      <section className={`page-header ${styles["hero-section"]}`}>
        <HeroSection />
      </section>
      <section>
        <CampusSection />
      </section>
      <section className={`feature-section`}>
        <FeatureSection />
      </section>
      <section className={`container section-basics`}>
        <NumberSection />
        <div className={`border-bottom`} />
      </section>
      <section className={`container section-basics`}>
        {/* <BrandSection /> */}
      </section>
    </>
  );
};

export default Home;
