import Image from "next/image";

//IMPORT SECTION HEADER COMPONENT
import SectionHeader from "./partials/SectionHeader";

//IMPORT CAMPUS SECTION CSS
import styles from "./../../styles/CampusSection.module.scss";

function CampusSection() {
  const sectionHeader = {
    tag: "CAMPUSES",
    title: "Our Presence",
    paragraph:
      "Envision Digital is the sole provider of on campus digital signage with an audience engagement of over 200,000+ students. Our signage network is available in high traffic areas and is the ideal destination to capture the attention of the university community.",
  };
 
  return (
    <section>
      <article className={`container`}>
        <div className={`${styles["section-header"]}`}>
          <SectionHeader data={sectionHeader} />
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
                priority
              />
            </div>
            <a href='/campus/knust' className={`primary-link`}>KNUST</a>
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
                priority
              />
            </div>
            <a href='/campus/ucc' className={`primary-link`}>UCC</a>
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
                priority
              />
            </div>
            <a href='/campus/ug' className={`primary-link`}>UG, Legon</a>
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
                priority
              />
            </div>
            <a href='/campus/upsa' className={`primary-link`}>UPSA</a>
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
                priority
              />
            </div>
            <a href='/campus/ashesi' className={`primary-link`}>Ashesi</a>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default CampusSection;
