import Image from "next/image";
import styles from "./../../styles/FeatureSection.module.scss";

const FeatureSection = () => {

  return (
    <>
      <section
        className={`${styles["feature-section"]}`}
      >
        <div className={`container-0`}>
          <div className={`${styles["feature-0"]}`}>
            <div className={`${styles["feature-empty-0"]}`}></div>
            <div className={`${styles["feature-text-0"]}`}>
              <h4 className={`tag`}>
                SUSTAINABLE DEVELOPMENT
              </h4>
              <h2 className={`title`}>We lead a cause</h2>
              <h3 className={`paragraph`}>
                Every product, program, campaign, company or individual,
                deserves a platform which connects them to the masses.{" "}
                <span className={`${styles["strong-black"]}`}>
                  We are the ones who make it possible.
                </span>
              </h3>
              <div className={`${styles["feature-sus-goals"]}`}>
                <Image
                  src="/sustainable_goals.png"
                  width={4.6875}
                  height={1}
                  alt="students icon"
                  layout="responsive"
                />
              </div>
              <div className="primary-link-div">
                <a className="primary-link">Our solutions</a>
              </div>
            </div>
            <div className={`${styles["feature-image-0"]}`}>
              <Image
                className={`${styles["feature-image-inner-0"]}`}
                src="/car.jpg"
                width={500}
                height={500}
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
              <h4 className={`tag`}>
                YOUR PRIMARY AD CHANNEL
              </h4>
              <h2 className={`title`}>
                100% Student run business
              </h2>
              <h3 className={`paragraph-1`}>
                It’s important that your product or service gets publicity on
                the university campuses, and with the limited advertising space
                and a strict policy on publicity on campus,{" "}
                <span className={`${styles["strong-black"]}`}>
                  you will have the most visibility with us.
                </span>
              </h3>
              <div className="primary-link-div test">
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
                src="/house.jpg"
                width={500}
                height={350}
                alt="students icon"
                layout="responsive"
              />
            </div>
            <div className={`${styles["feature-text"]}`}>
              <h4 className={`tag`}>
                CUSTOM-MADE JUST FOR YOU
              </h4>
              <h2 className={`title`}>
                Advertisement customized for the traction
              </h2>
              <h3 className={`paragraph`}>
                With static ads, interest is soon lost once the print is put
                away. With us however,{" "}
                <span className={`${styles["strong-black"]}`}>
                  {" "}
                  a lasting impression is created by the uniqueness of motion
                  graphics{" "}
                </span>
                and what is better is that you can modify your content or even
                change your ad every week.
              </h3>
              <div className="primary-link-div">
                <a className="primary-link">How we customize ads for you</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
