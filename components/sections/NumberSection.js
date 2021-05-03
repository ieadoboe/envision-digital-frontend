import SectionHeader from "./partials/SectionHeader";
import styles from "./../../styles/NumberSection.module.scss";
import Image from "next/image";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const NumberSection = () => {
  const sectionHeader = {
    title: "NUMBERS",
    paragraph: "Let's run the numbers",
  };
  return (
    <>
      <SectionHeader data={sectionHeader} />
      <ul className={`list-reset ${styles["numbers"]}`}>
        <li>
          <div>
            <Image
              src="/students_icon.svg"
              width={30}
              height={30}
              alt="students icon"
              layout="fixed"
            />
          </div>

          <h1>
            <CountUp
              start={50}
              end={200}
              duration={4}
              suffix={"k+"}
              redraw={false}
            >
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h1>
          <p>students</p>
        </li>

        <li>
          <div>
            <Image
              src="/screens_icon.svg"
              width={30}
              height={30}
              alt="screens icon"
              layout="fixed"
            />
          </div>

          <h1>
            <CountUp start={0} end={23} redraw={false} duration={4} suffix={"*"} >
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h1>
          <p>screens</p>
        </li>

        <li>
          <div>
            <Image
              src="/reruns_icon.svg"
              width={30}
              height={30}
              alt="reruns icon"
              layout="fixed"
            />
          </div>
          <h1>
            <CountUp
              start={20}
              end={150}
              duration={4}
              suffix={"+"}
              redraw={false}
            >
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h1>
          <p>reruns everyday</p>
        </li>

        <li>
          <div>
            <Image
              src="/runtime_icon.svg"
              width={30}
              height={30}
              alt="runtime icon"
              layout="fixed"
            />
          </div>
          <h1>
            <CountUp end={22} duration={4} redraw={false}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h1>

          <p>daily runtime</p>
        </li>
      </ul>
    </>
  );
};

export default NumberSection;
