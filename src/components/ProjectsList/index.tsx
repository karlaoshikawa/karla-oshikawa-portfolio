import projectsList from "@/data/projectsList";
import Image from "next/image";
import style from "./projectList.module.scss";
import { SlGlobe } from "react-icons/sl";
import { VscGithub } from "react-icons/vsc";
import { useState } from "react";

interface ProjectListProps {
  type: string;
}

const ProjectList: React.FC<ProjectListProps> = ({ type }) => {
  const [showIframeMap, setShowIframeMap] = useState<{ [id: string]: boolean }>(
    {}
  );

  const filteredProjects = projectsList
    .filter((project) => project.type === type)
    .reverse();
  
 const handleImageClick = (id: string) => {
   setShowIframeMap((prevState) => ({
     ...prevState,
     [id]: !prevState[id], // Alterna o estado para o projeto com o id correspondente
   }));
 };

  return (
    <div className={style.projectList_container}>
      <h2>{type}</h2>
      <div className={style.projectList_projects_container}>
        {filteredProjects.map((project) => (
          <div key={project.id} className={style.projectList_projectBox}>
            <Image
              src={project.image}
              alt={project.name}
              onClick={() => handleImageClick(project.id)}
            />
            {/* {showIframeMap[project.id] && (
              <iframe
                src={project.url}
                title={project.name}
                className={style.projectList_project_iframe}
              ></iframe>
            )} */}
            <div className={style.projectList_textBox}>
              <h3>{project.name}</h3>
              <div className={style.projectList_project_type}>
                <p>Project Type:</p>
                <h4>{project.dev}</h4>
              </div>

              <p>Stacks:</p>
              <h5>{project.stacks.replace(/,/g, " |")}</h5>
              <div className={style.projectList_button_box}>
                <div className={style.projectList_button}>
                  <SlGlobe />
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Deploy
                  </a>
                </div>
                <div className={style.projectList_button}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
