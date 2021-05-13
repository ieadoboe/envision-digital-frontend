import Link from "next/link";
import Button from "./../elements/Button";
import Navbar from "../../components/layout/Navbar";
import styles from "./../../styles/HeroSection.module.scss";

const HeroSection = () => {
    return (
        <>
        <Navbar />
        <div className={`container ${styles["hero-section-inner"]}`}>
          <h1>Reach your most important customers with ease.</h1>
          <p>We help businesses reach a more targeted audience.</p>
          <div>
            <Link href="/contact">
              <Button long={true}>Contact</Button>
            </Link>
          </div>
        </div>
        </>
    );
}
 
export default HeroSection;