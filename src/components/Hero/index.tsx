import style from "./hero.module.scss"

const Hero: React.FC = () => {
  return (
    <div className={style.hero_container}>
      <iframe
        src="/Hero/index.html"
        title="Karla Portifolio Hero"
      ></iframe>
    </div>
  );
};

export default Hero;
