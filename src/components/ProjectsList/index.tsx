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
      <h2>{type}</h2>
      <div className={style.projectList_projects_container}>
        {filteredProjects.map((project) => (
          <div key={project.id} className={style.projectList_projectBox}>
            <Image src={project.image} alt={project.name} />
            <div className={style.projectList_textBox}>
              <h3>{project.name}</h3>
              <div className={style.projectList_project_type}>
                <p>Project Type:</p>
                <h4>{project.dev}</h4>
              </div>

              <p>Stacks:</p>
              <h4>{project.stacks.replace(/,/g, " |")}</h4>
              <div>
                <SlGlobe />
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  Deploy
                </a>
              </div>
              <div>
                <VscGithub />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
