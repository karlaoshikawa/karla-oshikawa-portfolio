import style from "./sectionBar.module.scss";

interface SectionBarProps {
  section: string;
}

const SectionBar: React.FC<SectionBarProps> = ({ section }) => {
  return (
    <div className={style.sectionBar_container}>
      <div className={style.sectionBar_box}>
        <h2>{section}</h2>
      </div>
    </div>
  );
};

export default SectionBar;
