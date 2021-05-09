import styles from "./../../styles/CampusSection.module.scss";
import SectionHeader from "./partials/SectionHeader";
import Image from "next/image";

const CampusSection = () => {
  const sectionHeader = {
    title: "CAMPUSES",
    paragraph: "Present on these Campuses",
  };
  return (
    <>
      <section>
        <article className={`container ${styles[""]}`}>
          <SectionHeader position={"center"} data={sectionHeader} />
          <div className={`list-reset ${styles["campuses"]}`}>
            <li>
              <div className="school-logo">
                <Image
                  src="/knust_logo.png"
                  alt="knust logo"
                  width={90}
                  height={110}
                  layout="intrinsic"
                  objectFit="contain"
                  priority
                />
              </div>
              <p>KNUST</p>
            </li>
            <li>
              <div>
                <Image
                  src="/ucc_logo.png"
                  width={100}
                  height={110}
                  alt="ucc logo"
                  layout="intrinsic"
                  priority
                  objectFit="contain"
                />
              </div>
              <p>UCC</p>
            </li>
            <li>
              <div>
                <Image
                  src="/ug_logo.png"
                  width={100}
                  height={110}
                  alt="ug legon logo"
                  layout="intrinsic"
                  priority
                  objectFit="contain"
                />
              </div>
              <p>UG, Legon</p>
            </li>
            <li>
              <div>
                <Image
                  src="/upsa_logo.png"
                  width={90}
                  height={110}
                  alt="upsa logo"
                  layout="intrinsic"
                  priority
                  objectFit="contain"
                />
              </div>
              <p>UPSA</p>
            </li>
            <li>
              <div>
                <Image
                  src="/ashesi_logo.png"
                  width={120}
                  height={110}
                  alt="ashesi logo"
                  layout="intrinsic"
                  priority
                  objectFit="contain"
                />
              </div>
              <p>Ashesi</p>
            </li>
          </div>
        </article>
      </section>
    </>
  );
};

export default CampusSection;
