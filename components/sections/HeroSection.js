import Link from "next/link";
import Button from "./../elements/Button";
import Navbar from "../../components/layout/Navbar";
import styles from "./../../styles/HeroSection.module.scss";
import Typical from "react-typical";

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <div className={`container ${styles["hero-section-inner"]}`}>
            <h1 className>Reach your most important{" "}
            <Typical 
              loop={Infinity}
              wrapper="span"
              steps={[
                "customers",
                10000,
                "audiences",
                10000,
                "clients",
                10000
              ]}
            /></h1>
        <p>We help businesses reach a more targeted audience.</p>
        <div>
          <Link href="/contact">
            <Button long={true}>Contact</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
