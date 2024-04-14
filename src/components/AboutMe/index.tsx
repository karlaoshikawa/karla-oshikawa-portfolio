import Image from "next/image";
import karlaAvatar from "@/images/avatar/karla-manga.webp";
import style from "./aboutMe.module.scss";

interface AboutMeProps {
  lang: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ lang }) => {
  const description = {
    en: (
      <p>
        I&apos;m a fullstack web developer born in Brazil and living in Japan
        for over two decades now. My journey mixes Brazilian and Japanese
        influences, showing up in my work and how I tackle tech.
        <br />
        <br />
        With over a decade of graphic design experience, my love for coding
        stemmed from the desire to craft innovative, practical solutions.
        I&apos;m constantly on the lookout for experiences that enrich both my
        personal and professional life.
      </p>
    ),
    jp: (
      <p>
        フルスタックウェブ開発者で、ブラジル生まれで、日本に20年以上住んでいます。私の経歴はブラジルと日本の影響が混じり合い、その影響が私の仕事や技術へのアプローチに現れています。
        <br />
        <br />
        10年以上のグラフィックデザインの経験を持ち、コーディングへの情熱は革新的で実用的な解決策を作り出したいという欲求から生まれました。私は常に私の個人的な生活と職業生活の両方を豊かにする経験を求めています。
      </p>
    ),
    pt: (
      <p>
        Sou desenvolvedora web fullstack, nascida no Brasil e vivendo há mais de
        duas décadas no Japão. Minha jornada combina influências brasileiras e
        japonesas, refletindo no meu trabalho e na abordagem à tecnologia.
        <br />
        <br />
        Com mais de 10 anos de experiência como designer gráfico, minha paixão
        pela programação nasceu do desejo de criar soluções inovadoras e
        funcionais. Estou sempre em busca de experiências que enriqueçam tanto
        minha vida pessoal quanto profissional.
      </p>
    ),
  };

  const myName = {
    en: "Hello! I'm Karla Oshikawa",
    pt: "Olá! Eu sou a Karla Oshikawa",
    jp: "こんにちは！私は押川カルラです。",
  };

  let text = description.en;
  let name = myName.en;

  switch (lang) {
    case "pt":
      text = description.pt;
      name = myName.pt;
      break;
    case "jp":
      text = description.jp;
      name = myName.jp;
      break;
    default:
      break;
  }

  return (
    <div className={style.aboutMe_container}>
      <Image src={karlaAvatar} alt="karla avatar manga style" />
      <div className={style.aboutMe_information_box}>
        <h3>{name}</h3>
        {text}
      </div>
    </div>
  );
};

export default AboutMe;
