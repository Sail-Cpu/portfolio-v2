//Image
import Alcorn from "../assets/img/alcorn.png";
import Out from "../assets/img/out.png";
import Dragon from "../assets/img/dragonio.png";
import Portfolio from "../assets/img/portfolio.png";
import Sera from "../assets/img/sera.png";

export const ProjectName = {
  name: "Mes Projets",
};

const Project = [
  {
    name: "Alcorn'List",
    description: {
      fr: "Un catalogue de jeux vidéo présentant \n" +
        "plus de 500 000 jeux, triés dans différentes \n" +
        "catégories.",
      en: "A video game catalog featuring over 500,000 games, sorted into different categories.",
    },
    date: 2022,
    image: Alcorn,
    techno: ["React", "JavaScript", "Html", "Scss"],
    git: "https://github.com/Sail-Cpu/alcorn-s_list",
  },
  {
    name: "OUT.",
    description: {
      fr: "Une application qui te donne des conseils sur les vêtements " +
        "à porter en fonction de la météo, tu choisis la localisation et " +
        "elle te donne une liste de pantalons, de vestes, etc. que tu peux porter.",
      en: "An application that gives you advice on what clothes to wear based on the weather. " +
          "You choose the location and it provides you with a list of pants, jackets, etc. that you can wear.",
    },
    date: 2022,
    image: Out,
    techno: ["React", "JavaScript", "Html", "Scss"],
    git: "https://github.com/Sail-Cpu/out",
  },
  {
    name: "Dragon.io",
    description: {
      fr: "Une adaptation d'Agar.io basée sur l'univers de Dragon Ball Z. Le jeu " +
          "met en scène les personnages emblématiques de la série, tels que Goku, Vegeta " +
          "ou Freezer, et vous permet d'absorber des boules de ki pour devenir plus fort et " +
          "combattre d'autres joueurs en ligne.",
      en: "An adaptation of Agar.io based on the Dragon Ball Z universe. The game features " +
          "iconic characters from the series such as Goku, Vegeta, or Frieza, and allows " +
          "you to absorb ki balls to become stronger and battle other players online.",
    },
    date: 2023,
    image: Dragon,
    techno: ["TypeScript", "Html", "Css", "Babel"],
    git: "https://gitlab.univ-lille.fr/sofiane.lasoa.etu/sae-2023-groupei-lasoa-gomis",
  },
  {
    name: "Sera",
    description: {
      fr: "Une API de manga qui permet d'accéder à une vaste sélection de titres populaires. " +
          "Que vous soyez amateur de manga ou développeur d'application, SERA est facile à " +
          "utiliser et vous permettra d'intégrer facilement des informations sur les mangas " +
          "dans vos projets.",
      en: "A manga API that provides access to a vast selection of popular titles. Whether " +
          "you are a manga enthusiast or an application developer, SERA is easy to use and " +
          "will allow you to seamlessly integrate manga information into your projects.",
    },
    date: 2023,
    image: Sera,
    techno: ["Node", "Express", "JavaScript"],
    git: "https://github.com/Sail-Cpu/Sera",
  },
  {
    name: "PortfolioV1",
    description: {
      fr: "Mon Cv numérique qui vous parle de moi, de mes compétences, " +
          "de mes projets et qui vous donnera je l'espère l'envie de travailler avec moi.",
      en: "My digital resume that tells you about me, my skills, my projects, and hopefully " +
          "will inspire you to work with me.",
    },
    date: 2023,
    image: Portfolio,
    techno: ["JavaScript", "Html", "Css"],
    git: "https://github.com/Sail-Cpu/portfolio",
  },
];

export default Project;
