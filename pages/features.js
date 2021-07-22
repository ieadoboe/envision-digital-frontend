import Head from "next/head";
import Image from "next/image";

//COMPONENTS
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";

//FEATURES PAGE CSS
import styles from "../styles/Features.module.scss";

import Button from "../components/elements/Button";

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
        <p className={`container-4 ${styles["page-header-paragraph"]}`}>
          Envision Digital Signage Network exists to tackle the challenges with
          the traditional means of advertisement. We focus on using sustainable
          practices to evolve the current industry into the future of digital
          advertisement campaigns.
        </p>
      </section>
      <section className={`container-3 ${styles["problem-section"]}`}>
        <h4 className={`tag center ${styles["problem-tag"]}`}>The problem</h4>
        <div className={`container ${styles["problem"]}`}>
          <div className={`${styles["problem-number"]}`}>01</div>
          <div className={`${styles["problem-text"]}`}>
            <h3>Negative environmental impact</h3>
            <p>
              Print press can affect biodiversity, soil fertility and water
              quality. Trees acts as carbon sinks that sequester carbon dioxide
              from the atmosphere and use it for photosynthesis. Fewer forests
              leads to a higher concentration of atmospheric carbon dioxide - a
              major contributor to global warming.
            </p>
          </div>
        </div>

        <div className={`container ${styles["problem"]}`}>
          <div className={`${styles["problem-number"]}`}>02</div>
          <div className={`${styles["problem-text"]}`}>
            <h3>Minimal interactions</h3>
            <p>
              Print media is unable to provide the level of creativity and ease
              with which one can interact with motion graphics for campaigns,
              advertisements and media commercials.
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

      <section className={`${styles["solution-container"]}`}>
        <h4 className={`${styles["feature-tag"]}`}>Why Envision Digital</h4>
        <h2 className={`container-4 center`}>
          Ghana's leading platform for campus advertisement
        </h2>

        <article className={`${styles["feature-section"]}`}>
          <div className={`container`}>
            <div className={`${styles["feature"]}`}>
              <div className={`${styles["feature-text"]}`}>
                <div className={`${styles["solution-image"]}`}>
                  <Image
                    className={`${styles[""]}`}
                    src="/leaf-icon.svg"
                    width={60}
                    height={60}
                    alt="fast upload icon"
                    layout="fixed"
                  />
                </div>
                <h3>Contributing to a net-zero emissions world</h3>
                <p>
                  Net zero means achieving a balance between the greenhouse
                  gases put into the atmosphere and those taken out. Global
                  climate impacts that are already unfolding under today’s 1.1
                  degrees C (2 degrees F) of warming from melting ice to
                  devastating heat waves and more intense storms show the
                  urgency of minimizing temperature increase. By shifting from
                  printing papers for advertisements to digital means, you can
                  join us contribute to achieving this goal to prevent more
                  catastrophic effects.
                </p>
              </div>
              <div className={`${styles["solution-image"]}`}>
                <Image
                  className={`${styles[""]}`}
                  src="/solution-plant.png"
                  width={1038}
                  height={896}
                  alt="students icon"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </article>

        <article className={`${styles["feature-section"]}`}>
          <div className={`container`}>
            <div className={`${styles["feature"]}`}>
              <div className={`${styles["feature-text"]}`}>
                <div className={`${styles["solution-image"]}`}>
                  <Image
                    className={`${styles[""]}`}
                    src="/network-icon.svg"
                    width={60}
                    height={60}
                    alt="fast upload icon"
                    layout="fixed"
                  />
                </div>
                <h3>Maximum reach and accessibility</h3>
                <p>
                  With our existing 23 screens* and an expanding social media
                  following, your message can be communicated and reach
                  thousands of people in no time. We uses a range of audio,
                  video, text and graphics designed to catch the attention of
                  views, which makes us the most preferred medium. The content
                  delivered through it, can be recorded or archived for future
                  use.
                </p>
                <p className={`${styles['check-socials']}`}>Check out our social media pages.</p>
                <div className={`${styles["social-icons"]}`}>
                  <div>
                    <a href="#">
                      <i className="fab fa-facebook-f fa-2x"></i>
                    </a>
                  </div>
                  <div>
                    <a href="https://twitter.com/envisiondig">
                      <i className="fab fa-twitter fa-2x"></i>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/envisiondig/">
                      <i className="fab fa-instagram fa-2x"></i>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <i className="fab fa-linkedin-in fa-2x"></i>
                    </a>
                  </div>
                </div>
                <p>
                  *
                  <span className={`${styles["note"]}`}>Subject to change</span>
                </p>
              </div>
              <div className={`${styles["solution-image"]}`}>
                <Image
                  className={`${styles[""]}`}
                  src="/solution-access.png"
                  width={1071}
                  height={1063}
                  alt="students icon"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </article>

        <article className={`${styles["feature-section"]}`}>
          <div className={`container`}>
            <div className={`${styles["feature"]}`}>
              <div className={`${styles["feature-text"]}`}>
                <div className={`${styles["solution-image"]}`}>
                  <Image
                    className={`${styles[""]}`}
                    src="/target-icon.svg"
                    width={60}
                    height={60}
                    alt="fast upload icon"
                    layout="fixed"
                  />
                </div>
                <h3>Effective and efficient marketing</h3>
                <p>
                  At low cost to your business Envision Digital provides the best
                  results for clients. At the same time provides more revenue
                  with more audience interactions. We guarantee maximum satisfaction.
                </p>
                <p className={`${styles["satisfaction-quote"]}`}>
                  <span>
                    "Whenever I run an ad with Envision Digital, my sales just goes up. I am always satisfied with the results. <br></br>— Sheriff Babson"
                  </span>
                </p>
              </div>
              <div className={`${styles["solution-image"]}`}>
                <Image
                  className={`${styles[""]}`}
                  src="/solution-grow.png"
                  width={1038}
                  height={896}
                  alt="students icon"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </article>

        {/* SOLUTION */}
        {/* <h4 className={`tag center ${styles["solution-tag"]}`}>
          Why Envision Digital?
        </h4> */}
        <div className={`container ${styles["solution-section"]}`}>
          <div className={`${styles["solution"]}`}>
            <div className={`${styles["solution-image"]}`}>
              <Image
                className={`${styles[""]}`}
                src="/upload-icon.svg"
                width={60}
                height={60}
                alt="fast upload icon"
                layout="fixed"
              />
            </div>
            <h3>Fast content updates</h3>
            <p>
              Update any ad campaign content fast and easily from anywhere at
              anytime.
            </p>
          </div>
          <div className={`${styles["solution"]}`}>
            <div className={`${styles["solution-image"]}`}>
              <Image
                className={`${styles[""]}`}
                src="/comms-icon.svg"
                width={60}
                height={60}
                alt="fast upload icon"
                layout="fixed"
              />
            </div>
            <h3>Effective communication</h3>
            <p>
              Messages are effectively communicated to your audience through
              videos and images. This serves both literates and illiterates.
            </p>
          </div>

          <div className={`${styles["solution"]}`}>
            <div className={`${styles["solution-image"]}`}>
              <Image
                className={`${styles[""]}`}
                src="/multipleads-icon.svg"
                width={60}
                height={60}
                alt="multiple ads icon"
                layout="fixed"
              />
            </div>
            <h3>Multiple advertisements</h3>
            <p>You can run more than one ad on a single display.</p>
          </div>

          <div className={`${styles["solution"]}`}>
            <div className={`${styles["solution-image"]}`}>
              <Image
                className={`${styles[""]}`}
                src="/age-icon.svg"
                width={60}
                height={60}
                alt="all age icon"
                layout="fixed"
              />
            </div>
            <h3>All age inclusive</h3>
            <p>
              The nature of motion graphics advertisement appeals to all age
              groups.
            </p>
          </div>
          <div className={`${styles["solution"]}`}>
            <div className={`${styles["solution-image"]}`}>
              <Image
                className={`${styles[""]}`}
                src="/attention-icon.svg"
                width={60}
                height={60}
                alt="all age icon"
                layout="fixed"
              />
            </div>
            <h3>Attention grabbing display</h3>
            <p>
              Screens are quick to grab and retain the attention of passersby.
            </p>
          </div>
          <div className={`${styles["solution"]}`}>
            <div className={`${styles["solution-image"]}`}>
              <Image
                className={`${styles[""]}`}
                src="/boost-icon.svg"
                width={60}
                height={60}
                alt="boost icon"
                layout="fixed"
              />
            </div>
            <h3>Boost purchase of products</h3>
            <p>
              Drastically improve your product purchases with our digital
              screens.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={`${styles["cta-section"]}`}>
        <div className={`container`}>
          <div className={`${styles["cta"]}`}>
            <div className={`${styles["cta-text"]}`}>
              <h4 className={`${styles["tag"]}`}>Reach. Engage. Discover.</h4>
              <h2 className={`${styles["title"]}`}>Ready to take your business to new heights?</h2>
              <h3 className={`${styles["paragraph"]}`}>
                Reach more customers through our innovative platforms with features that gives you all the control. The sky is the limit for your business now!
              </h3>

              <div className={`${styles["book-button"]}`}>
                <a href="/book">
                  <Button>Book an appointment - It's free</Button>
                </a>
              </div>
            </div>
            <div className={`${styles["cta-image"]}`}>
              <Image
                src="/engage-image.png"
                width={1164}
                height={980}
                alt="students icon"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
