import Head from "next/head";
import React, { useState } from "react";

//REACT PACKAGES FOR COUNT-UP FUNCTIONALITY
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

//COMPONENTS
import Navbar from "../../components/layout/Navbar";

//ABOUT PAGE CSS
import Image from "next/image";
import styles from "./../../styles/Campus.module.scss";
import Button from "../../components/elements/Button";
const KNUSTCampus = () => {
  //SECTION HEADER INFO
  const PageHeader = {
    title: "Kwame Nkrumah University of Science and Technology",
  };
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <>
      <Head>
        <title>KNUST Campus - Envision Digital</title>
        <meta name="keywords" content="knust digital" />
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
      <section className={`${styles["knust-header"]}`}>
        <div className={`container-3 ${styles["knust-header-inner"]}`}>
          <div className={`center ${styles["school-logo"]}`}>
            <Image
              src="/knust_logo.png"
              alt="campus logo"
              width={110}
              height={110}
              layout="intrinsic"
              objectFit="contain"
            />
          </div>
          <div className={`center ${styles["page-header-inner"]}`}>
            <h1>Kwame Nkrumah University of Science and Technology</h1>
          </div>
        </div>
      </section>

      <section className={`container-2 ${styles["bio-section"]}`}>
        <div className={` container ${styles["test"]}`}>
          <h4 className={`tag center`}>bio</h4>
          <h3 className={`test center paragraph-1`}>
            KNUST is our biggest market with our maximum number of screens. We
            are present in 6 halls/hostels on campus.
          </h3>
        </div>
        <div>
          <ul className={`list-reset ${styles["numbers"]}`}>
            <li>
              <div>
                <Image
                  src="/students_icon.svg"
                  width={30}
                  height={30}
                  alt="students icon"
                  layout="fixed"
                />
              </div>

              <h1>
                <CountUp
                  //   start={10}
                  end={60}
                  suffix={"k+"}
                  duration={3}
                  start={viewPortEntered ? null : 0}
                >
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    );
                  }}
                </CountUp>
              </h1>
              <p>students</p>
            </li>

            <li>
              <div>
                <Image
                  src="/footfall_icon.svg"
                  width={30}
                  height={30}
                  alt="footfall icon"
                  layout="fixed"
                />
              </div>
              <h1>
                <CountUp
                  //   start={7500}
                  end={80}
                  suffix={"00+"}
                  duration={3}
                  start={viewPortEntered ? null : 0}
                >
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    );
                  }}
                </CountUp>
              </h1>
              <p>average daily footfall</p>
            </li>

            <li>
              <div>
                <Image
                  src="/screens_icon.svg"
                  width={30}
                  height={30}
                  alt="screens icon"
                  layout="fixed"
                />
              </div>

              <h1>
                <CountUp
                  end={6}
                  suffix={"*"}
                  duration={3}
                  start={viewPortEntered ? null : 0}
                >
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    );
                  }}
                </CountUp>
              </h1>
              <p>screens</p>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h4 className={`tag center`}>the campus</h4>
        <section className={`container ${styles["campus-pictures"]}`}>
          <div>
            <Image
              src="/car.jpg"
              width={50}
              height={30}
              alt="students icon"
              layout="responsive"
            />
          </div>
          <div>
            <Image
              src="/car.jpg"
              width={50}
              height={30}
              alt="students icon"
              layout="responsive"
            />
          </div>
          <div>
            <Image
              src="/car.jpg"
              width={50}
              height={30}
              alt="students icon"
              layout="responsive"
            />
          </div>
          <div>
            <Image
              src="/car.jpg"
              width={50}
              height={30}
              alt="students icon"
              layout="responsive"
            />
          </div>
        </section>
      </section>

      <section>
        <h4 className={`tag center`}>KNUST TEAM</h4>
        <section className={`container ${styles["campus-team"]}`}>
          <div>
            <Image
              src="/dp2.jpg"
              width={200}
              height={200}
              alt="students icon"
              layout="intrinsic"
            />
          </div>
          <div>
            <Image
              src="/dp2.jpg"
              width={200}
              height={200}
              alt="students icon"
              layout="intrinsic"
            />
          </div>
          <div>
            <Image
              src="/dp2.jpg"
              width={200}
              height={200}
              alt="students icon"
              layout="intrinsic"
            />
          </div>
          <div>
            <Image
              src="/dp2.jpg"
              width={200}
              height={200}
              alt="students icon"
              layout="intrinsic"
            />
          </div>
        </section>
      </section>
      <section className={`${styles["cta-section"]}`}>
        <div className={`container`}>
          <div className={`${styles["cta"]}`}>
            <div className={`${styles["cta-text"]}`}>
              <h4 className={`${styles["tag"]}`}>Reach. Engage. Discover.</h4>
              <h2 className={`${styles["title"]}`}>
                  Take over your market now
              </h2>
              <h3 className={`${styles["paragraph"]}`}>
                Reach more customers through our innovative platforms with
                features that gives you all the control. The sky is the limit
                for your business now!
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
};

export default KNUSTCampus;
