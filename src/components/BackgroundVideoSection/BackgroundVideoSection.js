// import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import styles from "./BackgroundVideoSection.module.css";
import heroImage from "../../utils/nx_wave_hero.png";
import star from "../../../src/utils/star.svg";
import Input from "../Input/Input";
import Concent from "../Concent/Concent";
import React from 'react';

const BackgroundVideoSection = () => {
  return (
    <section className={`${styles.backgroundVideoSection}`}>
      <video className={styles.video} autoPlay muted loop>
        <source
          src="https://www.uni.cards/videos/nxt_wave_bg.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className={`${styles.overlay}`}>
        <Navbar />
        <div
          className={`${
            styles.heroSection
          } ${"flex flex__justifyContentCenter"}`}
        >
          <div
            className={`${
              styles.heroSection__wrapper
            } ${"flex flex__justifyContentSpaceBetween"}`}
          >
            <div className={`${styles.heroSection__content}`}>
              <h1>
                <strong>NX Wave.</strong> The next-gen credit card for those who
                love rewards.
              </h1>
              <div className={`${styles.heroSection__content__para}`}>
              <p>
                1% Cashback <img src={star} alt="Star" /> 5x Rewards Zero <img src={star} alt="Star" /> Forex Markup
              </p>
                <div className={`${styles.form}`}>
                  <Input />
                  <Concent />
                </div>
              </div>
            </div>
            <div className={`${styles.heroSection__image}`}>
              <img src={heroImage} alt="NX Wave" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundVideoSection;
