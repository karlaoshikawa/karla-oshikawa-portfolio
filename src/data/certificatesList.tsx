import trybeFullstack from "@/images/certificates/trybe-fullstack.png"
import dioParalax from "@/images/certificates/dio-paralax.png";
import dioTailwind from "@/images/certificates/dio-tailwind.png";
import dioMern from "@/images/certificates/dio-mern.png";
import dioFirebase from "@/images/certificates/dio-firebase.png";
import nlwUnite from "@/images/certificates/rocketseat-nlwUnite.png";
import nlwExpert from "@/images/certificates/rocketseat-nlwExpert.png";
import awsNuvem from "@/images/certificates/aws-nuvem.png";
import { StaticImageData } from "next/image";

export interface Certificate {
  id: string;
  school: string;
  name: string;
  url: string;
  image: StaticImageData;
  stacks: string;
}

const certificatesList: Certificate[] = [
  {
    id: "001",
    school: "trybe",
    name: "Full-Stack Web Development Course with specialization in C#",
    url: "https://www.credential.net/0ea49ec6-d1a6-40fa-81d8-2b7b515c365c#gs.7esus0",
    image: trybeFullstack,
    stacks:
      "frontend, backend, computer science, soft skills, agile methodology",
  },
  {
    id: "002",
    school: "Dio.me",
    name: "Creating a Parallax Spider-Verse Carousel",
    url: "https://www.dio.me/certificate/208DD90B/",
    image: dioParalax,
    stacks: "React, Next.js, Framer Motion",
  },
  {
    id: "003",
    school: "Dio.me",
    name: "Introduction to Tailwind CSS",
    url: "https://www.dio.me/certificate/D096DB74/",
    image: dioTailwind,
    stacks: "Tailwind",
  },
  {
    id: "004",
    school: "Dio.me",
    name: "MERN: Building the Foundations of a Digital Wallet",
    url: "https://www.dio.me/certificate/7048B0CF/",
    image: dioMern,
    stacks: "Node.js, Express, MongoDB",
  },
  {
    id: "005",
    school: "Dio.me",
    name: "Getting to Know Firebase",
    url: "https://www.dio.me/certificate/79010C36",
    image: dioFirebase,
    stacks: "firebase",
  },
  {
    id: "006",
    school: "Rocketseat",
    name: "NLW Unite - DevOps",
    url: "https://app.rocketseat.com.br/certificates/0ccb5b98-14b0-47a7-bd2c-4e0a17543ae8",
    image: nlwUnite,
    stacks: "docker, terraform, kubernets, CI/CD",
  },
  {
    id: "007",
    school: "Rocketseat",
    name: "NLW Expert trilha de React Native",
    url: "https://app.rocketseat.com.br/certificates/4ba48f0a-5303-49a7-a3fd-b723bf97831c",
    image: nlwExpert,
    stacks: "react native",
  },
  {
    id: "008",
    school: "escola da nuvem",
    name: "AWS re/Start II",
    url: "https://www.linkedin.com/in/karlaoshikawa/details/certifications/#:~:text=practitioner%20(1).png-,AWS%20re/Start,-AWS%20re/Start",
    image: awsNuvem,
    stacks: "aws",
  },
];

export default certificatesList;