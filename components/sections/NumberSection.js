import React, { useState } from "react";
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

  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <>
      <SectionHeader position={'center'} data={sectionHeader} />
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
            <CountUp start={100} end={200} suffix={"k+"} duration={3} start={viewPortEntered ? null : 0}>
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
            <CountUp end={23} suffix={"*"} duration={3} start={viewPortEntered ? null : 0}>
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
            <CountUp end={150} suffix={"+"} duration={3} start={viewPortEntered ? null : 0}>
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
            <CountUp end={22} duration={3} start={viewPortEntered ? null : 0}>
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
    </>
  );
};

export default NumberSection;
