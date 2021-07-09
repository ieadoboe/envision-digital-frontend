import React, { useRef, useState } from "react";
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
  Parallax,
  Pagination,
  Navigation,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Parallax, Pagination, Navigation]);

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

      <Swiper
        style={{
          "--swiper-navigation-color": "#292d33",
        }}
        speed={600}
        // slidesPerView={1}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        className="mySwiper container-3"
      >
        <div
          slot="container-start"
          // className="parallax-bg"
          // style={{
          //   "background-image": "url(./car.jpg);",
          // }}
          style={{"background-image": "url(https://source.unsplash.com/random?sig=53);"}}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className={`center ${styles["testimonial"]}`}>
            <p className={`${styles["testimonial-text"]}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            </p>
            <div className="">Slide 1</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`center ${styles["testimonial"]}`}>
            <p className={`${styles["testimonial-text"]}`}>
              Absolutely the best bill tracking
            </p>
            <div className="">Slide 2</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`center ${styles["testimonial"]}`}>
            <p className={`${styles["testimonial-text"]}`}>
              Helped me get my spending on track. I’ve been able to pay down a
              significant amount of debt and stay focused on my spending.
            </p>
            <div className="">Slide 3</div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            style={{
            "background-image": "/sus-image.png",
          }}
            style={{"background-image": "url(./car.jpg);"}}
          >
            <h2>SIMPLE SWIPER</h2>
          </div>

          <div
            class="swiper-slide"
            style={{"background-image": "url(https://source.unsplash.com/random?sig=53);"}}
          >
            <h2>HELLO WORLD</h2>
          </div>

          <div
            class="swiper-slide"
            style={{"background-image": "url(https://source.unsplash.com/random?sig=52);"}}
          >
            <h2>Random Text 1</h2>
          </div>

          <div
            class="swiper-slide"
            style={{"background-image": "url(https://source.unsplash.com/random?sig=21);"}}
          ></div>

          <div
            class="swiper-slide"
            style={{"background-image": "url();"}}
          ></div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div> */}
    </>
  );
}
