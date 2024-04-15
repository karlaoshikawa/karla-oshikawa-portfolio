import Image from "next/image";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import carouselList from "@/data/digitalPaintingList";
import style from "./carousel.module.scss";
import { useState } from "react";

const Carousel: React.FC = () => {
 const [currentIndex, setCurrentIndex] = useState(0);

 const nextSlide = () => {
   setCurrentIndex((prevIndex) =>
     prevIndex === carouselList.length - 1 ? 0 : prevIndex + 1
   );
 };

 const prevSlide = () => {
   setCurrentIndex((prevIndex) =>
     prevIndex === 0 ? carouselList.length - 1 : prevIndex - 1
   );
 };

  return (
    <div className={style.carousel_container}>
      <FaArrowCircleLeft onClick={prevSlide} className={style.carousel_arrow} />
      <div className={style.carousel_image_box}>
        <Image
          src={carouselList[currentIndex]}
          alt="Carousel Image"
          className={style.carousel_image}
        />
      </div>
      <FaArrowCircleRight
        onClick={nextSlide}
        className={style.carousel_arrow}
      />
    </div>
  );
};

export default Carousel;
