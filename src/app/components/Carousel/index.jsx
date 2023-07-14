import React from "react";
import Image from "next/image";
import styles from "./Carousel.module.css";
import Slide1 from "../public/images/Slide/CARRUSEL 1.png";
import Slide2 from "../public/images/Slide/CARRUSEL 2.jpg";
import Slide3 from "../public/images/Slide/CARRUSEL 3.jpg";
import Slide4 from "../public/images/imagepack.jpeg";

function Carousel() {
  return (
    <div className={styles.container}>
      <ul className={styles.slider}>
        <li id="slide1">
          <Image src={Slide1} width={200} height={200} alt="Slide 1" />
        </li>
        <li id="slide2">
          <Image src={Slide2} width={200} height={200} alt="Slide 2" />
        </li>
        <li id="slide3">
          <Image src={Slide3} width={200} height={200} alt="Slide 3" />
        </li>
        <li id="slide4">
          <Image src={Slide4} width={200} height={200} alt="Slide 4" />
        </li>
      </ul>

      <ul className={styles.menu}>
        <li>
          <a href="#slide1"></a>
        </li>
        <li>
          <a href="#slide2"></a>
        </li>
        <li>
          <a href="#slide3"></a>
        </li>
        <li>
          <a href="#slide4"></a>
        </li>
      </ul>
    </div>
  );
}

export default Carousel;
