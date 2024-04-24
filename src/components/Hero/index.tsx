import { MutableRefObject, useEffect, useRef } from "react";
import style from "./hero.module.scss";

const Hero: React.FC = () => {
  const iframeRef: MutableRefObject<HTMLIFrameElement | null> = useRef(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        iframeRef.current &&
        event.source === iframeRef.current.contentWindow
      ) {
        if (event.data.type === "navigateToSection") {
          const sectionId = event.data.sectionId;
          
          const sectionElement = document.getElementById(sectionId);
          if (sectionElement) {
            sectionElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  return (
    <div className={style.hero_container}>
      <iframe
        src="/Hero/index.html"
        title="Karla Portifolio Hero"
        ref={iframeRef}
      ></iframe>
    </div>
  );
};

export default Hero;
