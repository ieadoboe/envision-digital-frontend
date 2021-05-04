import styles from "./../../styles/BrandSection.module.scss";
import SectionHeader from "./partials/SectionHeader";
import Image from "next/image";

const BrandSection = () => {
  const sectionHeader = {
    title: "OUR CLIENTS",
    paragraph: "We've collaborated with great brands in the past.",
  };
  return (
    <>
      <SectionHeader position={'center'} data={sectionHeader} />
      <div className={`${styles["parent"]}`}>

      </div>
      <div className={`${styles["slider"]}`}>
        <div className={`${styles["slider-track"]}`}>
          <div className={`${styles["slide"]}`}>
            <h2>Logo1</h2>
          </div>
          <div className={`${styles["slide"]}`}>
            <h2>Logo2</h2>
          </div>
          <div className={`${styles["slide"]}`}>
            <h2>Logo3</h2>
          </div>
          <div className={`${styles["slide"]}`}>
            <h2>Logo4</h2>
          </div>
          <div className={`${styles["slide"]}`}>
            <h2>Logo5</h2>
          </div>
          <div className={`${styles["slide"]}`}>
            <h2>Logo6</h2>
          </div>
          <div className={`${styles["slide"]}`}>
            <h2>Logo7</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandSection;
