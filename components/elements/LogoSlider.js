import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./../../styles/BrandSection.module.scss";

export default class BrandSection extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      easing: "ease-out",
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            // rows: 2,
            // slidesPerRow: 1,
          },
        },
        {
            breakpoint: 400,
            settings: {
              slidesToShow: 3,
              rows: 2,
              slidesPerRow: 1,
            },
          },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div className={`${styles["slide"]}`}>
            <Image
              src="/logo_lead_for_ghana.png"
              alt="logo_lead_for_ghana"
              width={250}
              height={120}
              layout="intrinsic"
              quality={100}
            />
          </div>
          <div className={`${styles["slide"]}`}>
            <Image
              src="/logo_samsung.png"
              alt="logo_samsung"
              width={250}
              height={120}
              layout="intrinsic"
              quality={100}
            />
          </div>
          <div className={`${styles["slide"]}`}>
            <Image
              src="/logo_virgin_nigeria.png"
              alt="logo_virgin_nigeria"
              width={250}
              height={120}
              layout="intrinsic"
              quality={100}
            />
          </div>
          <div className={`${styles["slide"]}`}>
            <Image
              src="/logo_vodafone.png"
              alt="logo_vodafone"
              width={250}
              height={120}
              layout="intrinsic"
              quality={100}
            />
          </div>
          <div className={`${styles["slide"]}`}>
            <Image
              src="/logo_fiesta.png"
              alt="logo_fiesta"
              width={250}
              height={120}
              layout="intrinsic"
              quality={100}
            />
          </div>
          <div className={`${styles["slide"]}`}>
            <Image
              src="/logo_icgc.png"
              alt="logo_icgc"
              width={250}
              height={120}
              layout="intrinsic"
              quality={100}
            />
          </div>
          <div className={`${styles["slide"]}`}>
            <Image
              src="/logo_lydia.png"
              alt="logo_lydia"
              width={250}
              height={120}
              layout="intrinsic"
              quality={100}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
