import styles from "./../../styles/BrandSection.module.scss";
import SectionHeader from "./partials/SectionHeader";
import LogoSlider from "./../elements/LogoSlider";

const BrandSection = () => {
  const sectionHeader = {
    title: "OUR CLIENTS",
    paragraph: "We've collaborated with great brands in the past.",
  };
  return (
    <>
      <section className={`${styles["brand-section"]}`}>
        <SectionHeader position={"center"} data={sectionHeader} />
        <div className={`${styles["client-logos slider"]}`}>
          <LogoSlider />
        </div>
      </section>
    </>
  );
};

export default BrandSection;
