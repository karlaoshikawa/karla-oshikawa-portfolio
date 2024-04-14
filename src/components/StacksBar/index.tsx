import stacksList from "@/data/stacksList";
import style from "./stackBar.module.scss"

const StackBar: React.FC = () => { 
  return (
    <div className={style.container}>
      <div className={style.slider}>
        <div className={style.slide_track}>
          {stacksList.map((stack, i) => (
            <p key={i} className={style.slide}>
              {stack.toUpperCase()}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StackBar;