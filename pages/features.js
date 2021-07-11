import Head from "next/head";
import Image from "next/image";

//COMPONENTS
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import CtaSection from "../components/sections/CtaSection";

//FEATURES PAGE CSS
import styles from "../styles/Features.module.scss";

export default function Features() {
  const PageHeader = {
    title: "Build up the whole picture",
  };
  return (
    <>
      <Head>
        <title>Envision Digital - Features</title>
        <meta name="keywords" content="digital" />
        {/* <html lang="en"></html> */}
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
      <section className={`container-3 ${styles["feature-section"]}`}>
        <div className={`container ${styles["feature"]}`}>
          <div className={`${styles["feature-number"]}`}>01</div>
          <div className={`${styles["feature-text"]}`}>
            <h3 className={`${styles[" "]}`}>
              An Impressive Array of Solutions
            </h3>
            <p>
              With vivid displays and high resolution digital signage screens,
              we draw the attention of the student population and keep them
              engaged with our content ever evolving content.
            </p>
          </div>
        </div>

        <div className={`container ${styles["feature"]}`}>
          <div className={`${styles["feature-number"]}`}>02</div>

          <div className={`${styles["feature-text"]}`}>
            <h3 className={`${styles[" "]}`}>Custom-made just for you</h3>
            <p>
              With static ads, interest is soon lost once the print is put away.
              With us however, a lasting impression is created by the uniqueness
              of motion graphics and what is better is that you can modify your
              content or even change your ad every week.
            </p>
          </div>
        </div>

        <div className={`container ${styles["feature"]}`}>
          <div className={`${styles["feature-number"]}`}>03</div>

          <div className={`${styles["feature-text"]}`}>
            <h3 className={`${styles[" "]}`}>Establish your niche</h3>
            <p>
              We offer over a 100+ daily reruns of your ad and with the widest
              media reach on campuses in Ghana. The student population is
              provided with information wherever they are. Our wide reach in 5
              campuses and over 21 locations ensures that.
            </p>
          </div>
        </div>

        <div className={`container ${styles["feature"]}`}>
          <div className={`${styles["feature-number"]}`}>04</div>
          <div className={`${styles["feature-text"]}`}>
            <h3 className={`${styles[" "]}`}>Your Ad primary channel</h3>
            <p>
              It’s important that your product or service gets publicity on the
              university campuses, and with the limited advertising space and a
              strict policy on publicity on campus, you will have the most
              visibility with us.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
