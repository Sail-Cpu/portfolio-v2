//Image
import Alcorn from "../assets/img/alcorn.png";
import Out from "../assets/img/out.png";
import Dragon from "../assets/img/dragonio.png";
import Portfolio from "../assets/img/portfolio.png";
import Sera from "../assets/img/sera.png";
import PortfolioV2 from "../assets/img/portfoliov2.png";

export const ProjectName = {
  name: "Mes Projets",
};

const Project = [
  {
    name: "Alcorn'List",
    description: {
      fr:
        "Un catalogue de jeux vidéo presentant \n" +
        "plus de 500 000 jeux, tries dans differentes \n" +
        "categories.",
      en: "A video game catalog featuring over 500,000 games, sorted into different categories.",
    },
    date: 2022,
    image: Alcorn,
    techno: ["React", "JavaScript", "Html", "Scss"],
    git: "https://github.com/Sail-Cpu/alcorn-s_list",
    link: "http://alcorn.sofianelasoa.fr/"
  },
  {
    name: "OUT.",
    description: {
      fr:
        "Une application qui te donne des conseils sur les vetements " +
        "a porter en fonction de la meteo, tu choisis la localisation et " +
        "elle te donne une liste de pantalons, de vestes, etc. que tu peux porter.",
      en:
        "An application that gives you advice on what clothes to wear based on the weather. " +
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
      fr:
        "Une adaptation d'Agar.io basee sur l'univers de Dragon Ball Z. Le jeu " +
        "met en scène les personnages emblematiques de la serie, tels que Goku, Vegeta " +
        "ou Freezer, et vous permet d'absorber des boules de ki pour devenir plus fort et " +
        "combattre d'autres joueurs en ligne.",
      en:
        "An adaptation of Agar.io based on the Dragon Ball Z universe. The game features " +
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
      fr:
        "Une API de manga qui permet d'acceder a une vaste selection de titres populaires. " +
        "Que vous soyez amateur de manga ou developpeur d'application, SERA est facile à " +
        "utiliser et vous permettra d'integrer facilement des informations sur les mangas " +
        "dans vos projets.",
      en:
        "A manga API that provides access to a vast selection of popular titles. Whether " +
        "you are a manga enthusiast or an application developer, SERA is easy to use and " +
        "will allow you to seamlessly integrate manga information into your projects.",
    },
    date: 2023,
    image: Sera,
    techno: ["Node", "Express", "JavaScript"],
    git: "https://github.com/Sail-Cpu/Sera",
    link: "http://seramanga.sofianelasoa.fr/"
  },
  {
    name: "PortfolioV1",
    description: {
      fr:
        "La premiere version de mon Cv numerique qui vous parle de moi, de mes competences, " +
        "de mes projets et qui vous donnera je l'espere l'envie de travailler avec moi.",
      en:
        "The first version of my digital resume that tells you about myself, my skills, my " +
        "projects, and hopefully, it will give you the desire to work with me.",
    },
    date: 2023,
    image: Portfolio,
    techno: ["JavaScript", "Html", "Css"],
    git: "https://github.com/Sail-Cpu/portfolio",
  },
  {
    name: "PortfolioV2",
    description: {
      fr:
        "La derniere version de mon Cv numerique qui vous parle de moi, de mes competences, " +
        "de mes projets et qui vous donnera je l'espere l'envie de travailler avec moi.",
      en: "The latest version of my digital resume that tells you about myself, my skills, " +
          "my projects, and hopefully, it will give you the desire to work with me.",
    },
    date: 2023,
    image: PortfolioV2,
    techno: ["ReactJs", "Html", "Css", "Javascript", "Styled-component"],
    git: "https://github.com/Sail-Cpu/portfolio-v2",
  },
];

export default Project;
