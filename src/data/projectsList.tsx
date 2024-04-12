import type { StaticImageData } from "next/image";

import jlpt from "@/images/projects/jlptDescomplicado.webp";
import cssFactor from "@/images/projects/css-factor.webp";

interface Project {
  id: string;
  name: string;
  image: StaticImageData;
  type: "study" | "job" | "course";
  stacks: string;
  url: string;
  github: string;
}

const projectsList: Project[] = [
  {
    id: "p001",
    name: "JLPT Descomplicado",
    image: jlpt,
    type: "job",
    stacks: "sass, react, redux, cra",
    url: "https://www.jlptdescomplicado.com",
    github: "https://github.com/karlaoshikawa/JLPT-Descomplicado",
  },
  {
    id: "p002",
    name: "CSS Factor",
    image: cssFactor,
    type: "job",
    stacks: "sass, react, redux, vite",
    url: "https://css-factor.com/",
    github: "private",
  },
  {
    id: "p003",
    name: "CSS Factor",
    image: cssFactor,
    type: "job",
    stacks: "sass, react, redux, vite",
    url: "https://css-factor.com/",
    github: "private",
  },
];

export default projectsList;
