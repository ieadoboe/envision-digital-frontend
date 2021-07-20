import React, { useRef, useState } from "react";
import Image from "next/dist/client/image";
import styles from "./../../styles/TestimonialSection.module.scss";
import SectionHeader from "./partials/SectionHeader";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  EffectFade,
  Parallax,
  Pagination,
  Navigation,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Parallax, Pagination, Navigation]);

export default function TestimonialSection() {
  const sectionHeader = {
    tag: "Our clients say it best",
  };
  return (
    <>
      <section>
        <div className={`container`}>
          <div className={`center`}>
            <SectionHeader data={sectionHeader} />
          </div>
        </div>
      </section>

      <div className={`mySwiper container-3 ${styles["brands"]}`}>
        <Swiper
          speed={300}
          loop={true}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          className={`mySwiper ${styles[""]}`}
        >
          <SwiperSlide>
            <div className={`${styles["ts-image"]}`}>
              <Image
                src="/logo_vodafone.png"
                width={210}
                height={100}
                alt="vodafone logo"
                layout="intrinsic"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles["ts-image"]}`}>
              <Image
                src="/logo_samsung.png"
                width={210}
                height={100}
                alt="samsung logo"
                layout="intrinsic"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles["ts-image"]}`}>
              <Image
                src="/logo_lead_for_ghana.png"
                width={210}
                height={100}
                alt="lead for ghana logo"
                layout="intrinsic"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles["ts-image"]}`}>
              <Image
                src="/logo_fiesta.png"
                width={210}
                height={100}
                alt="fiesta logo"
                layout="intrinsic"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
        
 
      <div className={styles["slider-bg"]}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#292d33",
          }}
          speed={600}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          className={`mySwiper container-3`}
        >
          <SwiperSlide>
            <div className={`center ${styles["testimonial"]}`}>
              <div>
                <svg
                  className={`${styles["quote-icon"]}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                  />
                </svg>
              </div>
              <div className={`${styles["testimonial-text"]}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo.
              </div>
              <div className={`${styles["ts-data"]}`}>
                <div className={`${styles["ts-image"]}`}>
                  <Image
                    className={`${styles["ts-image-inner"]}`}
                    src="/dp1.jpg"
                    width={70}
                    height={70}
                    alt="students icon"
                    layout="intrinsic"
                  />
                </div>
                <div className={`${styles["ts-info"]}`}>
                  <h4 className={`${styles["ts-name"]}`}>Isaac</h4>
                  <p className={`${styles["ts-position"]}`}>Student | KNUST</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`center ${styles["testimonial"]}`}>
              <div>
                <svg
                  className={`${styles["quote-icon"]}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className={`${styles["testimonial-text"]}`}>
                Absolutely the best bill tracking.
              </div>
              <div className={`${styles["ts-data"]}`}>
                <div className={`${styles["ts-image"]}`}>
                  <Image
                    className={`${styles["ts-image-inner"]}`}
                    src="/dp2.jpg"
                    width={70}
                    height={70}
                    alt="students icon"
                    layout="intrinsic"
                  />
                </div>
                <div className={`${styles["ts-info"]}`}>
                  <h4 className={`${styles["ts-name"]}`}>Desmond</h4>
                  <p className={`${styles["ts-position"]}`}>Manager | MTN</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`center ${styles["testimonial"]}`}>
              <div>
                <svg
                  className={`${styles["quote-icon"]}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className={`${styles["testimonial-text"]}`}>
                Helped me get my spending on track. I’ve been able to pay down a
                significant amount of debt and stay focused on my spending.
              </div>
              <div className={`${styles["ts-data"]}`}>
                <div className={`${styles["ts-image"]}`}>
                  <Image
                    className={`${styles["ts-image-inner"]}`}
                    src="/dp3.jpg"
                    width={70}
                    height={70}
                    alt="students icon"
                    layout="intrinsic"
                  />
                </div>
                <div className={`${styles["ts-info"]}`}>
                  <h4 className={`${styles["ts-name"]}`}>Jeff</h4>
                  <p className={`${styles["ts-position"]}`}>
                    PRO | Lead for Ghana
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
