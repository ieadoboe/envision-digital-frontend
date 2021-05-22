import styles from "./../../styles/TestimonialSection.module.scss";
import React from "react";
import SectionHeader from "./partials/SectionHeader";

const TestimonialSection = () => {
  const sectionHeader = {
    tag: "TESTIMONIALS",
  };
  return (
    <>
      <section>
        <div className={`container ${styles["testimonial-section"]}`}>
          <div className={`${styles["testimonial-section-header"]}`}>
            <SectionHeader data={sectionHeader} />
            <p className={`${styles["header"]}`}>Our Clients say it best</p>
          </div>
          <div className={`${styles["row"]}`}>
            <div className={`${styles["col"]}`}>
              <div className={`${styles["testimonial"]}`}>
                <span className={`fa fa-quote-left`}></span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  morbi donec dignissim pharetra quisque vulputate. Vitae nisi,
                  pulvinar nisl vestibulum eu sed. Pellentesque pharetra viverra
                  sed quam egestas integer. Et elit maecenas orci, eu elementum
                  vel porta id felis.
                </p>
                <h4>Tim Cook | CEO | Apple</h4>
              </div>
            </div>
            <div className={`${styles["col"]}`}>
              <div className={`${styles["testimonial"]}`}>
                <span className={`fa fa-quote-left`}></span>
                <div className={`${styles["testimonial-inner"]}`}>
                  <p>
                    Just great stuff these guys are doing. Vitae nisi, pulvinar
                    nisl vestibulum eu sed.
                  </p>
                  <h4>Elon Musk | CEO | Tesla</h4>
                </div>
              </div>
            </div>
            <div className={`${styles["col"]}`}>
              <div className={`${styles["testimonial"]}`}>
                <span className={`fa fa-quote-left`}></span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  morbi donec dignissim pharetra quisque vulputate. Vitae nisi,
                  pulvinar nisl vestibulum eu sed.
                </p>
                <h4>Harry Potter | Protagonist | Deathly Hallows</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
