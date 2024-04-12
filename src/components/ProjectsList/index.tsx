import projectsList from "@/data/projectsList";
import Image from "next/image";

interface ProjectListProps {
  lang: string;
  type: string;
}

const ProjectList: React.FC<ProjectListProps> = ({ lang, type }) => {
  const filteredProjects = projectsList.filter(
    (project) => project.type === type
  );

console.log(filteredProjects);

  return (
    <div>
      <h2>Project List</h2>
      {filteredProjects.map((project) => (
        <div key={project.id}>
          <Image src={project.image} alt={project.name} />
          <h2>{project.name}</h2>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {project.url}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
