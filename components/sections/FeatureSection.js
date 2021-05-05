import SectionHeader from "./partials/SectionHeader";
import Image from "next/image";
import styles from "./../../styles/FeatureSection.module.scss";

const FeatureSection = () => {
  return (
    <>
      <section
        className={`${styles[("feature-section", "feature-section-gray")]}`}
      >
        <div className={`container ${styles["feature"]}`}>
          <div className={`${styles["feature-text"]}`}>
            <h4 className={`${styles["orange-text"]}`}>
              AN IMPRESSIVE ARRAY OF SOLUTIONS
            </h4>
            <p>
              <span className={`${styles["strong-black"]}`}>
                With vivid displays and high resolution digital signage screens,
              </span>{" "}
              we draw the attention of the student population and keep them
              engaged with our content ever evolving content.
            </p>
          </div>
          <div className={`${styles["feature-image"]}`}>
            <Image
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
            <p>
              With static ads, interest is soon lost once the print is put away.
              With us however,{" "}
              <span className={`${styles["strong-white"]}`}>
                {" "}
                a lasting impression is created by the uniqueness of motion
                graphics
                {" "}
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
            <h4 className={`${styles["green-text"]}`}>ESTABLISH YOUR NICHE</h4>
            <p className={`${styles["low-white"]}`}>
              <span className={`${styles["strong-white"]}`}>
                We offer over a 100+ daily reruns of your ad and with the widest
                media reach on campuses in Ghana.
              </span>
              The student population is provided with information wherever they
              are. Our wide reach in 5 campuses and over 21 locations ensures
              that.
            </p>
          </div>
          <div className={`${styles["feature-image"]}`}>
            <Image
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
            <h4 className={`${styles["green-text"]}`}>
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
    </>
  );
};

export default FeatureSection;
