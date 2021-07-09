import styles from "./../../styles/TestimonialSection.module.scss";
import React from "react";
import SectionHeader from "./partials/SectionHeader";

const TestimonialSection = () => {
  const sectionHeader = {
    tag: "Our clients say it best"
  };
  return (
    <>
          <div className={`${styles["testimonial-section-header"]}`}>
            <SectionHeader data={sectionHeader} />
          </div>
      
    </>
  );
};

export default TestimonialSection;
