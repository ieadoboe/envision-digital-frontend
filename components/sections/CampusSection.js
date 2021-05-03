import SectionHeader from "./partials/SectionHeader";
import styles from './../../styles/CampusSection.module.scss'
import Image from 'next/image'

const CampusSection = () => {
      const sectionHeader = {
        title: "CAMPUSES",
        paragraph: "Present on these Campuses",
      };
    return (
<>
        <SectionHeader data={sectionHeader} />
        <ul className={`list-reset ${styles["campuses"]}`}>
          <li>
            <div>
              <Image
                src="/knust_logo.png"
                width={95}
                height={120}
                alt="knust logo"
                layout="fixed"
              />
            </div>

            <p>KNUST</p>
          </li>
          <li>
            <div>
              <Image
                src="/ucc_logo.png"
                width={110}
                height={120}
                alt="ucc logo"
                layout="fixed"
              />
            </div>

            <p>UCC</p>
          </li>
          <li>
            <div>
              <Image
                src="/ug_logo.png"
                width={105}
                height={120}
                alt="ug legon logo"
                layout="fixed"
              />
            </div>

            <p>UG, Legon</p>
          </li>
          <li>
            <div>
              <Image
                src="/upsa_logo.png"
                width={100}
                height={120}
                alt="upsa logo"
                layout="fixed"
              />
            </div>

            <p>UPSA</p>
          </li>
          <li>
            <div>
              <Image
                src="/ashesi_logo.png"
                width={130}
                height={120}
                alt="ashesi logo"
                layout="fixed"
              />
            </div>
            <p>Ashesi</p>
          </li>
        </ul>
      </>
      );
}
 

export default CampusSection;