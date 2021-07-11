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
          <h1>
            <div>Reach your most</div>
            <div>important</div>
            <div>
              <Typical
                loop={Infinity}
                wrapper="span"
                steps={["customers", 5000, "audiences", 5000, "clients", 5000]}
              />
            </div>
          </h1>
          <p>We help businesses reach a more targeted audience.</p>
          <div>
            <a href="/contact">
              <Button long={true}>Book an appointment</Button>
            </a>
          </div>
      </div>
    </>
  );
};

export default HeroSection;
