import styles from "./../../styles/CtaSection.module.scss";
import Button from "./../elements/Button";
import Image from "next/dist/client/image";
import Link from "next/link";

const CtaSection = () => {
  return (
    <>
      <section className={`${styles["cta-section"]}`}>
        <div className={`container`}>
          <div className={`${styles["cta"]}`}>
            <div className={`${styles["cta-text"]}`}>
              <h4 className={`tag`}>Reach. Engage. Discover.</h4>
              <h2 className={`title`}>Grow your business.</h2>
              <h3 className={`paragraph`}>
                Every product, program, campaign, company or individual,
                deserves a platform which connects them to the masses.
              </h3>

              <div className={`${styles["book-button"]}`}>
                <Link href="/contact">
                  <Button>Book an appointment - It's free</Button>
                </Link>
              </div>
            </div>
            <div className={`${styles["cta-image"]}`}>
              <Image
                className={`${styles[""]}`}
                src="/engage-image.png"
                width={1164}
                height={980}
                alt="students icon"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaSection;
