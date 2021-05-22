import styles from "./../../styles/CtaSection.module.scss";
import Button from "./../elements/Button";
import Link from "next/link";

const CtaSection = () => {
  return (
    <>
      <section className="container-3">
        <div>
          <h4 className={`${styles["tag"]}`}>LET'S TALK</h4>
          <h2 className={`${styles["title"]}`}>Book an appointment <br></br>- It's free!</h2>
          <h3 className={`${styles["paragraph"]}`}>
            A lasting impression is created by the uniqueness of motion graphics
          </h3>
          <div>
            <Link href="/contact">
              <Button>Book an appointment - It's free!</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaSection;
