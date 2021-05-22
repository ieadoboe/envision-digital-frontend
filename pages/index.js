import Head from "next/head";
import styles from "./../styles/Home.module.scss";
import CampusSection from "./../components/sections/CampusSection";
import NumberSection from "./../components/sections/NumberSection";
import BrandSection from "./../components/sections/BrandSection";
import FeatureSection from "../components/sections/FeatureSection";
import HeroSection from "../components/sections/HeroSection";
import TestimonialSection from "../components/sections/TestimonialSection";

const Home = () => {
  return (
    <>
      <Head>
        <title>Envision Digital - Home</title>
        <meta name="keywords" content="digital" />
        <meta
          name="description"
          content="digital advertisement in university campuses"
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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
        />
        <link
          rel="stylesheet"
          href="path/to/font-awesome/css/font-awesome.min.css"
        />
      </Head>

      <section className={`page-header ${styles["hero-section"]}`}>
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
      <section className={`${styles["brand-section"]}`}>
        <BrandSection />
      </section>
      <section className={`${styles["testimonial-section"]}`}>
        <TestimonialSection />
      </section>
    </>
  );
};

export default Home;
