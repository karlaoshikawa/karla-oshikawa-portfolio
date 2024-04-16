"use client";

import { usePathname } from "next/navigation";
import style from "@/style/general.module.scss";
import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectsList";
import StackBar from "@/components/StacksBar";
import SectionBar from "@/components/SectionBar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Certificates from "@/components/Certificates";

const HomePage: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const locale = pathSegments[1];

  return (
    <div className={style.general}>
      <Header lang={locale} />
      <Hero />
      <SectionBar section="about me" sectionId="about-me" />
      <AboutMe lang={locale} />
      <StackBar />
      <SectionBar section="projects" sectionId="projects" />
      <div className={style.general_projects_box}>
        <ProjectList type="job" />
        <ProjectList type="study" />
        <ProjectList type="course" />
      </div>
      <SectionBar section="Certificates" sectionId="certificates" />
      <Certificates lang={locale} />
      <SectionBar section="Hobby" sectionId="hobby" />
      <Carousel />
      <Footer />
    </div>
  );
};

export default HomePage;
