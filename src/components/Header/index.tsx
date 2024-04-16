import Link from "next/link";
import Image from "next/image";
import english from "@/images/flags/eua-flag.webp";
import portuguese from "@/images/flags/brazil-flag.webp";
import japanese from "@/images/flags/japan-flag.webp";
import style from "./header.module.scss";
import { TbHexagonLetterK } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

interface HeaderProps {
  lang: string;
}

const Header: React.FC<HeaderProps> = ({ lang }) => {
  return (
    <header className={style.header_container}>
      <div className={style.header_logo_box}>
        <TbHexagonLetterK className={style.header_logo_icon} />
        <h1 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Karla Oshikawa
        </h1>
      </div>
      <div className={style.header_rightItems_box}>
        <div className={style.header_icons_box}>
          <a
            href="https://www.linkedin.com/in/karlaoshikawa/?locale=en_US"
            target="_blank"
            rel="noopener noreferrer"
            className={style.header_contact_icon}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/karlaoshikawa"
            target="_blank"
            rel="noopener noreferrer"
            className={style.header_contact_icon}
          >
            <FaSquareGithub />
          </a>
          <a
            href="mailto:karla_hara@hotmail.com"
            className={style.header_contact_icon}
          >
            <MdOutlineMailOutline />
          </a>
        </div>
        <div className={style.header_flags_box}>
          {lang === "" || (
            <Link href="/" className={style.header_flag}>
              <Image src={english} alt="en" />
            </Link>
          )}
          {lang === "pt" || (
            <Link href="/pt" >
              <Image src={portuguese} alt="pt" className={style.header_flag} />
            </Link>
          )}
          {lang === "jp" || (
            <Link href="/jp">
              <Image src={japanese} alt="jp" className={style.header_flag} />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
