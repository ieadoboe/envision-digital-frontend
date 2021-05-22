import React, { useState } from "react";
import SectionHeader from "./partials/SectionHeader";
import Image from "next/image";

//REACT PACKAGES FOR COUNT-UP FUNCTIONALITY
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

//IMPORT STYLES FOR NUMBERS SECTION
import styles from "./../../styles/NumberSection.module.scss";

const NumberSection = () => {
  const sectionHeader = {
    tag: "NUMBERS",
    title: "Let's run the numbers",
    paragraph:
      "We offer over a 100+ daily reruns of your ad and with the widest media reach on campuses in Ghana. Our wide reach in 5 campuses and over 21 locations ensures that information is provided to the student population wherever they are.",
  };

  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <>
      <section className={`container-3`}>
        <div>
          <SectionHeader data={sectionHeader} />
          <div className="primary-link-div">
            <a className="primary-link">How we can increase your customers</a>
          </div>
        </div>
        <div>
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
                  start={100}
                  end={200}
                  suffix={"k+"}
                  duration={3}
                  start={viewPortEntered ? null : 0}
                >
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    );
                  }}
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
                <CountUp
                  end={23}
                  suffix={"*"}
                  duration={3}
                  start={viewPortEntered ? null : 0}
                >
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    );
                  }}
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
                  end={150}
                  suffix={"+"}
                  duration={3}
                  start={viewPortEntered ? null : 0}
                >
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    );
                  }}
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
                <CountUp
                  end={22}
                  duration={3}
                  start={viewPortEntered ? null : 0}
                >
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    );
                  }}
                </CountUp>
              </h1>

              <p>daily runtime</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default NumberSection;
