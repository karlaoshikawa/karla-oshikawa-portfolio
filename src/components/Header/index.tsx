import Link from "next/link";
import Image from "next/image";
import english from "@/images/flags/eua-flag.webp";
import portuguese from "@/images/flags/brazil-flag.webp";
import japanese from "@/images/flags/japan-flag.webp";
import style from "./header.module.scss";
import { TbHexagonLetterK } from "react-icons/tb";

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
      <div className={style.header_flags_box}>
        {lang === "" || (
          <Link href="/">
            <Image src={english} alt="en" className={style.header_flag} />
          </Link>
        )}
        {lang === "pt" || (
          <Link href="/pt">
            <Image src={portuguese} alt="pt" className={style.header_flag} />
          </Link>
        )}
        {lang === "jp" || (
          <Link href="/jp">
            <Image src={japanese} alt="jp" className={style.header_flag} />
          </Link>
        )}
      </div>
    </header>
  );
};
export default Header;
