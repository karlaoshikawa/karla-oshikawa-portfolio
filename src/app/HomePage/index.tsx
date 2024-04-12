"use client";

import { usePathname } from "next/navigation";
import style from "@/style/general.module.scss"
import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectsList";

const HomePage: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const locale = pathSegments[1];

  return (
    <div className={style.general}>
      <Header lang={locale} />
      <Hero />
      <AboutMe lang={locale} />
      <ProjectList lang={locale} type="job"/>
    </div>
  );
};

export default HomePage;
