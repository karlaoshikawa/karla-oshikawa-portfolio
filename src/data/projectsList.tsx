import type { StaticImageData } from "next/image";

import jlpt from "@/images/projects/jlptDescomplicado.webp";
import cssFactor from "@/images/projects/css-factor.webp";
import solarSistem from "@/images/projects/solar-sistem.webp";
import tfc from "@/images/projects/tfc.webp";
import ongaku from "@/images/projects/ongaku-tunes.webp";
import delivery from "@/images/projects/app-delivery.webp";
import onePiece from "@/images/projects/onePiece-next.webp";
import mern from "@/images/projects/mern.webp";
import nlwHabits from "@/images/projects/NLW-habits.webp";
import nlwOrders from "@/images/projects/NLW-orders.webp";
import oneDecodificador from "@/images/projects/one-descriptador-text.webp";

interface Project {
  id: string;
  name: string;
  image: StaticImageData;
  type: "study" | "job" | "course";
  stacks: string;
  institution?: string;
  dev: "frontend" | "backend" | "fullstack";
  url: string;
  github: string;
}

const projectsList: Project[] = [
  {
    id: "p001",
    name: "JLPT Descomplicado",
    image: jlpt,
    type: "job",
    stacks: "sass, react, redux, cra, jest",
    dev: "fullstack",
    url: "https://www.jlptdescomplicado.com",
    github: "https://github.com/karlaoshikawa/JLPT-Descomplicado",
  },
  {
    id: "p002",
    name: "CSS Factor",
    image: cssFactor,
    type: "job",
    stacks: "sass, react, redux, vite, firebase, jest",
    dev: "fullstack",
    url: "https://css-factor.com/",
    github: "private",
  },
  {
    id: "p003",
    name: "Solar Sistem",
    image: solarSistem,
    type: "study",
    stacks: "css, react, javascript",
    dev: "frontend",
    url: "https://solar-sistem.vercel.app/",
    github: "https://github.com/karlaoshikawa/Solar-Sistem",
  },
  {
    id: "p004",
    name: "TFC-Trybe Futebol Clube",
    image: tfc,
    type: "course",
    stacks:
      "NodeJs, Express, Docker, Sequelize, Typescript, JWT, bcrypt, mocha",
    dev: "backend",
    url: "",
    github: "https://github.com/karlaoshikawa/TFC",
  },
  {
    id: "p005",
    name: "Ongaku Tunes",
    image: ongaku,
    type: "study",
    stacks: "css, react, jest",
    dev: "frontend",
    url: "https://ongaku-tunes.vercel.app/",
    github: "https://github.com/karlaoshikawa/ONGAKU-TUNES",
  },
  {
    id: "p006",
    name: "App Delivery (Team Project)",
    image: delivery,
    type: "course",
    stacks:
      "CSS, react, redux, jest, nodejs, sequelize, express, jwt, mocha, chai",
    dev: "backend",
    url: "",
    github: "https://github.com/karlaoshikawa/app-delivery",
  },
  {
    id: "p007",
    name: "One Piece Paralax Carossel",
    image: onePiece,
    type: "study",
    stacks: "sass, next, framer motion, typescript, javascript",
    dev: "frontend",
    url: "https://one-piece-next-carossel.vercel.app/",
    github: "https://github.com/karlaoshikawa/One-Piece-next",
  },
  {
    id: "p008",
    name: "Mern",
    image: mern,
    type: "course",
    stacks: "mongoDb, express, react, node",
    dev: "fullstack",
    url: "",
    github: "https://github.com/karlaoshikawa/Mern-wallet-Frontend",
  },
  {
    id: "p009",
    name: "NLW-Setup Habits",
    image: nlwHabits,
    type: "course",
    stacks: "nodejs, prisma, vite, react, react native, typescript",
    dev: "fullstack",
    url: "",
    github: "https://github.com/karlaoshikawa/NLW-setup",
  },
  {
    id: "p010",
    name: "NLW-Expert Orders",
    image: nlwOrders,
    type: "course",
    stacks: "react native, expo go, tailwind",
    dev: "frontend",
    url: "",
    github: "https://github.com/karlaoshikawa/NLW-expert-reactNative",
  },
  {
    id: "p011",
    name: "Oracle One - Text decoder",
    image: oneDecodificador,
    type: "course",
    stacks: "css, html, javascript",
    dev: "frontend",
    url: "https://karlaoshikawa.github.io/alura-one-encriptador/",
    github: "https://github.com/karlaoshikawa/alura-one-encriptador",
  },
];

export default projectsList;
