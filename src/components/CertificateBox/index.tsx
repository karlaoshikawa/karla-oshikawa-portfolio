import { Certificate } from "@/data/certificatesList";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { SlGlobe } from "react-icons/sl";
import style from "./certificateBox.module.scss";

interface CertificatesBoxProps {
  certificates: Certificate[];
}

const CertificateBox: React.FC<CertificatesBoxProps> = ({ certificates }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={style.certificateBox_container}>
      <h3>{certificates[currentIndex].school}</h3>
      <div className={style.certificateBox_item_box}>
        <div className={style.certificateBox_image_box}>
          {certificates.length > 1 && (
            <IoIosArrowBack
              onClick={prevSlide}
              className={style.certificateBox_icon}
            />
          )}
          <Image
            src={certificates[currentIndex].image}
            alt={certificates[currentIndex].name}
          />
          {certificates.length > 1 && (
            <IoIosArrowForward
              onClick={nextSlide}
              className={style.certificateBox_icon}
            />
          )}
        </div>
        <div className={style.certificateBox_title_box}>
          <h2>{certificates[currentIndex].name}</h2>
        </div>
        <h4>{certificates[currentIndex].stacks.replace(/,/g, " |")}</h4>
        {certificates[currentIndex].url !== "" && (
          <div className={style.certificateBox_button}>
            <a
              href={certificates[currentIndex].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SlGlobe className={style.certificateBox_icon_globe} />
              certificate
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateBox;
