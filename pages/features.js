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
      <section
        className={`${styles[("feature-section", "feature-section-blue")]}`}
      >
        <div className={`container ${styles["feature"]}`}>
          <div className={`${styles["feature-text"]}`}>
            <h4 className={`${styles["orange-text"]}`}>
              AN IMPRESSIVE ARRAY OF SOLUTIONS
            </h4>
            <p className={`${styles["low-black"]}`}>
              <span className={`${styles["strong-black"]}`}>
                With vivid displays and high resolution digital signage screens,
              </span>{" "}
              we draw the attention of the student population and keep them
              engaged with our content ever evolving content.
            </p>
          </div>
          <div className={`${styles["feature-image"]}`}>
            <Image
              className={`${styles["feature-image-inner"]}`}
              src="/car.jpg"
              width={500}
              height={300}
              alt="students icon"
              layout="responsive"
            />
          </div>
        </div>
      </section>

      <section
        className={`${styles[("feature-section", "feature-section-black")]}`}
      >
        <div className={`container ${styles["feature"]}`}>
          <div className={`${styles["feature-image"]}`}>
            <Image
              className={`${styles["feature-image-inner"]}`}
              src="/house.jpg"
              width={500}
              height={550}
              alt="students icon"
              layout="responsive"
            />
          </div>
          <div className={`${styles["feature-text"]}`}>
            <h4 className={`${styles["orange-text"]}`}>
              CUSTOM-MADE JUST FOR YOU
            </h4>
            <p className={`${styles["low-white"]}`}>
              With static ads, interest is soon lost once the print is put away.
              With us however,{" "}
              <span className={`${styles["strong-white"]}`}>
                {" "}
                a lasting impression is created by the uniqueness of motion
                graphics{" "}
              </span>
              and what is better is that you can modify your content or even
              change your ad every week.
            </p>
          </div>
        </div>
      </section>

      <section
        className={`${styles[("feature-section", "feature-section-orange")]}`}
      >
        <div className={`container ${styles["feature"]}`}>
          <div className={`${styles["feature-text"]}`}>
            <h4 className={`${styles["black-text"]}`}>ESTABLISH YOUR NICHE</h4>
            <p className={`${styles["low-white"]}`}>
              We offer over a{" "}
              <span className={`${styles["strong-white"]}`}>
                100+ daily reruns
              </span>{" "}
              of your ad and with the widest media reach on campuses in Ghana.
              The student population is provided with information wherever they
              are. Our wide reach in{" "}
              <span className={`${styles["strong-white"]}`}>
                5 campuses and over 21 locations
              </span>{" "}
              ensures that.
            </p>
          </div>
          <div className={`${styles["feature-image"]}`}>
            <Image
              className={`${styles["feature-image-inner"]}`}
              src="/processor.jpg"
              width={500}
              height={550}
              alt="students icon"
              layout="responsive"
            />
          </div>
        </div>
      </section>

      <section
        className={`${styles[("feature-section", "feature-section-purple")]}`}
      >
        <div className={`container ${styles["feature"]}`}>
          <div className={`${styles["feature-text"]}`}>
            <h4 className={`${styles["black-text"]}`}>
              YOUR PRIMARY AD CHANNEL
            </h4>
            <p className={`${styles["low-white"]}`}>
              It’s important that your product or service gets publicity on the
              university campuses, and with the limited advertising space and a
              strict policy on publicity on campus,{" "}
              <span className={`${styles["strong-white"]}`}>
                you will have the most visibility with us.
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className={`${styles["cta-section"]}`}>
        <CtaSection />
      </section>
    </>
  );
}
