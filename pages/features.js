import Head from "next/head";
import Image from "next/image";

//COMPONENTS
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";

//FEATURES PAGE CSS
import styles from "../styles/Features.module.scss";

export default function Features() {
  const PageHeader = {
    title: "Consider the bigger picture",
  };
  return (
    <>
      <Head>
        <title>Consider the bigger picture - Envision Digital</title>
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
      <div></div>
      <section className={`container-3 ${styles["problem-section"]}`}>
        <h4 className={`tag center ${styles["problem-tag"]}`}>The problem</h4>
        <div className={`container ${styles["problem"]}`}>
          <div className={`${styles["problem-number"]}`}>01</div>
          <div className={`${styles["problem-text"]}`}>
            <h3>Negative environmental impact</h3>
            <p>
              Print media is unable to provide the level of creativity and ease
              with which one can interact with motion graphics for campaigns,
              advertisements and media commercials.
            </p>
          </div>
        </div>

        <div className={`container ${styles["problem"]}`}>
          <div className={`${styles["problem-number"]}`}>02</div>
          <div className={`${styles["problem-text"]}`}>
            <h3>Minimal interactions</h3>
            <p>
              Print media is unable to provide the level of creativity and ease
              with which one can interact with campaigns, advertisements and
              info.
            </p>
          </div>
        </div>

        <div className={`container ${styles["problem"]}`}>
          <div className={`${styles["problem-number"]}`}>03</div>

          <div className={`${styles["problem-text"]}`}>
            <h3>Smaller reach and low accessibility</h3>
            <p>
              Traditional print media can only display one ad at a time and can
              only be at one place at a time. Thus, decreasing the total number
              of people who can be engaged.
            </p>
          </div>
        </div>

        <div className={`container ${styles["problem"]}`}>
          <div className={`${styles["problem-number"]}`}>04</div>
          <div className={`${styles["problem-text"]}`}>
            <h3>Ineffective marketing</h3>
            <p>
              Print media is restricted to a certain area or locality.
              Statistics have shown that this an ineffective way of
              advertisement in this digital age.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles["feature-container"]}`}>
        <h4 className={`${styles["feature-tag"]}`}>Our Solution</h4>
        <h2 className={`container-4 center`}>
          Ghana's leading platform for campus advertisement.
        </h2>
      </section>

      <section className={`${styles["feature-container"]}`}>
        <div className={`container ${styles["feature-section"]}`}>
          <div className={`${styles["feature"]}`}>
            <div className={`${styles["feature-image"]}`}>
              <Image
                className={`${styles[""]}`}
                src="/upload-icon.svg"
                width={60}
                height={60}
                alt="fast upload icon"
                layout="fixed"
              />
            </div>
            <h4>Fast content updates</h4>
            <p>
              Update any ad campaign content fast and easily from anywhere at
              anytime.
            </p>
          </div>
          <div className={`${styles["feature"]}`}>
            <div className={`${styles["feature-image"]}`}>
              <Image
                className={`${styles[""]}`}
                src="/comms-icon.svg"
                width={60}
                height={60}
                alt="fast upload icon"
                layout="fixed"
              />
            </div>
            <h4>Effective communication</h4>
            <p>
              Messages are effectively communicated to your audience through
              videos and images. This serves both literates and illiterates.
            </p>
          </div>

          <div className={`${styles["feature"]}`}>
            <div className={`${styles["feature-image"]}`}>
              <Image
                className={`${styles[""]}`}
                src="/multipleads-icon.svg"
                width={60}
                height={60}
                alt="multiple ads icon"
                layout="fixed"
              />
            </div>
            <h4>Multiple advertisements</h4>
            <p>You can run more than one ad on a single display.</p>
          </div>

          <div className={`${styles["feature"]}`}>
            <div className={`${styles["feature-image"]}`}>
            <Image
                className={`${styles[""]}`}
                src="/age-icon.svg"
                width={60}
                height={60}
                alt="all age icon"
                layout="fixed"
              />
            </div>
            <h4>All age inclusive</h4>
            <p>
              The nature of motion graphics advertisement appeals to all age
              groups.
            </p>
          </div>
          <div className={`${styles["feature"]}`}>
            <div className={`${styles["feature-image"]}`}>
              <Image
                className={`${styles[""]}`}
                src="/attention-icon.svg"
                width={60}
                height={60}
                alt="all age icon"
                layout="fixed"
              />
            </div>
            <h4>Attention grabbing display</h4>
            <p>
              Screens are quick to grab and retain the attention of passersby.
            </p>
          </div>
          <div className={`${styles["feature"]}`}>
            <div className={`${styles["feature-image"]}`}>
              <Image
                className={`${styles[""]}`}
                src="/boost-icon.svg"
                width={60}
                height={60}
                alt="boost icon"
                layout="fixed"
              />
            </div>
            <h4>Boost purchase of products</h4>
            <p>
              Drastically improve your product purchases with our digital
              screens.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
