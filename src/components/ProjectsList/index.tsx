import projectsList from "@/data/projectsList";
import Image from "next/image";
import style from "./projectList.module.scss";
import { SlGlobe } from "react-icons/sl";
import { VscGithub } from "react-icons/vsc";

interface ProjectListProps {
  lang: string;
  type: string;
}

const ProjectList: React.FC<ProjectListProps> = ({ lang, type }) => {
  const filteredProjects = projectsList
    .filter((project) => project.type === type)
    .reverse();

  return (
    <div className={style.projectList_container}>
      {filteredProjects.map((project) => (
        <div key={project.id} className={style.projectList_projectBox}>
          <Image src={project.image} alt={project.name} />
          <h2>{project.name}</h2>
          <h4>Project Type:</h4>
          <p>{project.dev}</p>
          <h4>Stacks:</h4>
          <p>{project.stacks}</p>
          <div>
            <SlGlobe />
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Deploy
            </a>
          </div>
          <div>
            <VscGithub />
            <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
