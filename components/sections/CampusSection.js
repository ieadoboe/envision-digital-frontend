import Image from "next/image";

//IMPORT SECTION HEADER COMPONENT
import SectionHeader from "./partials/SectionHeader";

//IMPORT CAMPUS SECTION CSS
import styles from "./../../styles/CampusSection.module.scss";

function CampusSection() {
  const sectionHeader = {
    tag: "CAMPUSES",
    title: "Present on these Campuses",
    paragraph:
      "We make our presence in felt in the all the university campuses we are operating on. We make our presence in felt in the all the university campuses we are operating on.",
  };

  return (
    <section>
      <article className={`container-3 ${styles["campus-container"]}`}>
        <div className={`${styles["section-header"]}`}>
          <SectionHeader data={sectionHeader} />
          <div className="primary-link-div">
            <a className="primary-link">Sustainability on Campuses</a>
          </div>
        </div>
        <ul className={`list-reset ${styles["campuses"]}`}>
          <li>
            <div className={`${styles["school-logo"]}`}>
              <Image
                src="/knust_logo.png"
                alt="knust logo"
                width={80}
                height={100}
                layout="intrinsic"
                objectFit="contain"
              />
            </div>
            <a className={`primary-link`}>KNUST</a>
          </li>
          <li>
            <div>
              <Image
                src="/ucc_logo.png"
                width={90}
                height={100}
                alt="ucc logo"
                layout="intrinsic"
                objectFit="contain"
              />
            </div>
            <a className={`primary-link`}>UCC</a>
          </li>
          <li>
            <div>
              <Image
                src="/ug_logo.png"
                width={85}
                height={95}
                alt="ug legon logo"
                layout="intrinsic"
                objectFit="contain"
              />
            </div>
            <a className={`primary-link`}>UG, Legon</a>
          </li>
          <li>
            <div>
              <Image
                src="/upsa_logo.png"
                width={75}
                height={95}
                alt="upsa logo"
                layout="intrinsic"
                objectFit="contain"
              />
            </div>
            <a className={`primary-link`}>UPSA</a>
          </li>
          <li>
            <div>
              <Image
                src="/ashesi_logo.png"
                width={110}
                height={100}
                alt="ashesi logo"
                layout="intrinsic"
                objectFit="contain"
              />
            </div>
            <a className={`primary-link`}>Ashesi</a>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default CampusSection;
