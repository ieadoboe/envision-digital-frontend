import Head from "next/head";

//COMPONENTS
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import CtaSection from "../components/sections/CtaSection";

//ABOUT PAGE CSS
import styles from "./../styles/About.module.scss";
import Image from "next/image";
const About = () => {
  //SECTION HEADER INFO
  const PageHeader = {
    title: "Who We Are",
  };

  return (
    <>
      <Head>
        <title>Envision Digital - About</title>
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
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
        />
      </Head>

      <div className="page-header navbar">
        <Navbar />
      </div>
      <section className="page-header">
        <Header data={PageHeader} />
      </section>

      <section className={`${styles["about-page"]}`}>
        <section className={`${styles["about-section"]}`}>
          <div className={`container`}>
            <div className={`${styles["flex"]}`}>
              <div className={`${styles["about-text"]}`}>
                <h4 className={`tag`}>Who we are</h4>
                <h2 className={`${styles["title"]}`}>World-class Ad Company</h2>
                <h3 className={`${styles["paragraph"]}`}>
                  Be partners, not adversaries. Basecamp keeps both sides
                  organized, everyone???s feedback on the record, and all
                  decisions.
                </h3>
              </div>
              <div className={`${styles["feature-image"]}`}>
                <Image
                  className={`${styles[""]}`}
                  src="/sus-image.png"
                  width={1.13195}
                  height={1}
                  alt="students icon"
                  layout="responsive"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles["about-section"]}`}>
          <div className={`container`}>
            <div className={`${styles["flex"]}`}>
              <div className={`${styles["about-text"]}`}>
                <h4 className={`tag`}>It's like magic</h4>
                <h2 className={`${styles["title"]}`}>
                  We dazzle our clients.
                </h2>{" "}
                <h3 className={`${styles["paragraph"]}`}>
                  Be partners, not adversaries. Basecamp keeps both sides
                  organized, everyone???s feedback on the record, and all
                  decisions.
                </h3>
              </div>
              <div className={`${styles["feature-image"]}`}>
                <Image
                  className={`${styles[""]}`}
                  src="/sus-image.png"
                  width={1.13195}
                  height={1}
                  alt="students icon"
                  layout="responsive"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles["about-section"]}`}>
          <div className={`container`}>
            <div className={`${styles["flex"]}`}>
              <div className={`${styles["about-text"]}`}>
                <h4 className={`tag`}>Brand Mission</h4>
                <h2 className={`${styles["title"]}`}>Value proposition</h2>
                <h3 className={`${styles["paragraph"]}`}>
                  Projects start off private to your team. When you???re ready to
                  share a message, a to-do, or a file with the client, just flip
                  the switch:
                </h3>
              </div>
              <div className={`${styles["feature-image"]}`}>
                <Image
                  className={`${styles[""]}`}
                  src="/sus-image.png"
                  width={1.13195}
                  height={1}
                  alt="students icon"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles["about-section"]}`}>
          <div className={`container`}>
            <div className={`${styles["about-text"]}`}>
              <h4 className={`tag`}>The team</h4>
              <h2 className={`${styles["title"]}`}>Meet the team</h2>
            </div>
            <div className={`${styles["about-team"]}`}>
              <div className={`${styles["team-member"]}`}>
                <div className={`${styles["team-image"]}`}>
                  <Image
                    src="/logo_lead_for_ghana.png"
                    alt="logo_lead_for_ghana"
                    width={150}
                    height={150}
                    layout="intrinsic"
                  />
                </div>
                <h4 className={`${styles["team-member"]}`}>Kwame Donkor</h4>
                <p className={`${styles["team-member"]}`}>Site Manager - UCC</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
