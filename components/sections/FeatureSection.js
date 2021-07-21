import Image from "next/image";
import Link from "next/dist/client/link";
import Button from "../elements/Button";
import styles from "./../../styles/FeatureSection.module.scss";

const FeatureSection = () => {
  return (
    <>
      <section className={`${styles["feature-section"]}`}>
        <div className={`container`}>
          <div className={`${styles["feature"]}`}>
            <div className={`${styles["feature-text"]}`}>
              <h4 className={`tag`}>Our Mission</h4>
              <h2 className={`title`}>Building sustainable cities and communities</h2>
              <h3 className={`paragraph`}>
                Every product, program, campaign, company or individual,
                deserves a platform which connects them to the masses.
              </h3>
              <div className={`${styles["feature-sus-goals"]}`}>
                <a href="https://sdgs.un.org/goals">
                  <Image
                    src="/sustainable_goals.png"
                    width={4.6875}
                    height={1}
                    alt="students icon"
                    layout="responsive"
                  />
                </a>
              </div>

              <div>
                <a href="/book">
                  <Button>Secure an Ad slot</Button>
                </a>
              </div>
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

      <section className={`${styles["feature-section"]}`}>
        <div className={`container`}>
          <div className={`container center test ${styles["feature"]}`}>
            <div className={`${styles["feature-text"]}`}>
              <h4 className={`tag`}>OUR POLICY</h4>
              <h2 className={`title`}>100% Student-run business</h2>
              <h3 className={`paragraph paragraph-1`}>
                We train students and impact them with industry-ready skills as 
                a part of giving back to not only the students on campuses but also the country at large.
              </h3>
              <div className={`primary-link-div ${styles["double-link"]}`}>
                  <a className="primary-link">Check out the team</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles["feature-section"]}`}>
        <div className={`container`}>
          <div className={`${styles["feature"]}`}>
            <div className={`${styles["feature-image"]}`}>
              <Image
                className={`${styles["feature-image-inner"]}`}
                src="/grow-image.png"
                width={1038}
                height={931}
                alt="students icon"
                layout="responsive"
              />
            </div>
            <div className={`${styles["feature-text"]}`}>
              <h4 className={`tag`}>CUSTOM-MADE JUST FOR YOU</h4>
              <h2 className={`title`}>
                Advertisement customized for the traction
              </h2>
              <h3 className={`paragraph`}>
                We curate long lasting impression with unique motion graphics which change constantly and keeps our audiences engaged.
                Our screens are the #1 location for students to discover trends.
              </h3>
              <div className={`${styles["engage-button"]}`}>
                <a href="/book">
                  <Button>Engage your audiences</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
