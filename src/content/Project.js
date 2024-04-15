//Image
import Alcorn from "../assets/img/alcorn.png";
import Out from "../assets/img/out.png";
import Dragon from "../assets/img/dragonio.png";
import Portfolio from "../assets/img/portfolio.png";
import Sera from "../assets/img/sera.png";
import PortfolioV2 from "../assets/img/portfoliov2.png";
import Pizzaland from "../assets/img/pizzaland.png"
import Hunter from "../assets/img/hunter.png";
import Jspace from "../assets/img/jspace.png";

export const ProjectName = {
  name: "Mes Projets",
};

const Project = [
  {
    name: "Sera",
    description: {
      fr:
          "Une API de manga qui donne accès à une vaste sélection de titres populaires. Que vous soyez un amateur de manga ou un développeur d'applications, SERA est facile à utiliser et vous permettra d'intégrer aisément des informations sur les mangas dans vos projets.",
      en:
          "A manga API that provides access to a vast selection of popular titles. Whether " +
          "you are a manga enthusiast or an application developer, SERA is easy to use and " +
          "will allow you to seamlessly integrate manga information into your projects.",
    },
    date: 2023,
    image: Sera,
    techno: ["Node", "Express", "JavaScript", "Psql"],
    values: ["Créativité", "Résolution de problèmes"],
    git: "https://github.com/Sail-Cpu/manga.git",
    link: "http://seramanga.sofianelasoa.fr/"
  },
  {
    name: "Alcorn'List",
    description: {
      fr:
        "Un catalogue de jeux vidéo présentant plus de 500 000 jeux, triés dans différentes catégories.",
      en: "A video game catalog featuring over 500,000 games, sorted into different categories.",
    },
    date: 2022,
    image: Alcorn,
    techno: ["React", "JavaScript", "Html", "Scss", "Figma"],
    values: ["Créativité", "Résolution de problèmes"],
    git: "https://github.com/Sail-Cpu/alcorn-s_list",
    link: "http://alcorn.sofianelasoa.fr/"
  },
  {
    name: "OUT.",
    description: {
      fr:
        "Une application qui vous donne des conseils sur les vêtements à porter en fonction de la météo. Vous sélectionnez votre emplacement, et elle vous propose une liste de pantalons, de vestes, etc., que vous pouvez porter.",
      en:
        "An application that gives you advice on what clothes to wear based on the weather. " +
        "You choose the location and it provides you with a list of pants, jackets, etc. that you can wear.",
    },
    date: 2022,
    image: Out,
    techno: ["React", "JavaScript", "Html", "Scss", "Figma"],
    values: ["Créativité", "Résolution de problèmes"],
    git: "https://github.com/Sail-Cpu/out",
  },
  {
    name: "Dragon.io",
    description: {
      fr:
        "Une adaptation d'Agar.io basée sur l'univers de Dragon Ball Z. Le jeu met en scène les personnages emblématiques de la série, comme Goku, Vegeta, ou Freezer, vous permettant d'absorber des boules de ki pour devenir plus fort et affronter d'autres joueurs en ligne.",
      en:
        "An adaptation of Agar.io based on the Dragon Ball Z universe. The game features " +
        "iconic characters from the series such as Goku, Vegeta, or Frieza, and allows " +
        "you to absorb ki balls to become stronger and battle other players online.",
    },
    date: 2023,
    image: Dragon,
    techno: ["TypeScript", "Html", "Css", "Babel"],
    values: ["Créativité", "Communication", "Résolution de problèmes"],
    git: "https://gitlab.univ-lille.fr/sofiane.lasoa.etu/sae-2023-groupei-lasoa-gomis",
  },
  {
    name: "PortfolioV1",
    description: {
      fr:
        "La première version de mon CV numérique qui vous présente ma personne, mes compétences, mes projets, et qui, je l'espère, suscitera votre intérêt pour une collaboration.",
      en:
        "The first version of my digital resume that tells you about myself, my skills, my " +
        "projects, and hopefully, it will give you the desire to work with me.",
    },
    date: 2023,
    image: Portfolio,
    techno: ["JavaScript", "Html", "Css"],
    values: ["Créativité", "Communication"],
    git: "https://github.com/Sail-Cpu/portfolio",
    link: "http://portfoliov1.sofianelasoa.fr/",
  },
  {
    name: "PortfolioV2",
    description: {
      fr:
        "La dernière version de mon CV numérique qui vous présente ma personne, mes compétences, mes projets, et qui, je l'espère, suscitera votre désir de collaborer avec moi.",
      en: "The latest version of my digital resume that tells you about myself, my skills, " +
          "my projects, and hopefully, it will give you the desire to work with me.",
    },
    date: 2023,
    image: PortfolioV2,
    techno: ["ReactJs", "Html", "Css", "Javascript", "Styled-component", "Figma"],
    values: ["Créativité", "Communication"],
    git: "https://github.com/Sail-Cpu/portfolio-v2",
  },
  {
    name: "Pizzaland",
    description: {
      fr:
          "Pour mon B.U.T informatique, j'ai contribué en binôme au développement d'une API REST dédiée aux pizzas, offrant aux utilisateurs la possibilité de consulter le menu, de personnaliser des commandes et des pizzas, etc. Nous avons également implémenté des formulaires de connexion et d'inscription, permettant aux utilisateurs d'accéder de manière sécurisée à la plateforme et de générer des tokens pour une utilisation ultérieure. Notre objectif était de créer une solution complète et conviviale pour répondre aux besoins des amateurs de pizzas tout en garantissant la sécurité et l'authentification des utilisateurs.",
      en: "For my IT B.U.T, I contributed in pairs to the development of a REST API dedicated to pizzas, offering users the possibility of consulting the menu, personalizing orders and pizzas, etc. with connection and registration forms to generate tokens that can then be used",
    },
    date: 2024,
    image: Pizzaland,
    techno: ["Java", "Apache-tomcat", "html", "css", "Psql"],
    values: ["Collaboration", "Résolution de problèmes", "Communication"],
    git: "https://gitlab.univ-lille.fr/aymeri.tourneur.etu/s4.a02.1",
  },
  {
    name: "Hunter / Monster",
    description: {
      fr:
          "Avec trois camarades de classe, nous avons réalisé un jeu de chasse au monstre. Dans ce jeu, l'utilisateur a le choix d'incarner le monstre ou le chasseur et de jouer contre un autre joueur ou contre une intelligence artificielle. L'objectif est simple : le monstre doit atteindre la sortie tandis que le chasseur doit le tuer avant qu'il n'y parvienne. Notre collaboration nous a permis de créer une expérience de jeu immersive et compétitive, offrant aux joueurs des heures de divertissement.",
      en: "With three classmates, we developed a monster hunting game. In this game, the user can choose to play as either the monster or the hunter and can play against another player or against artificial intelligence. The goal is simple: the monster must reach the exit while the hunter must kill it before it gets there.",
    },
    date: 2023,
    image: Hunter,
    techno: ["Java", "JavaFx", "Figma"],
    values: ["Collaboration", "Créativité", "Résolution de problèmes", "Adaptabilité"],
    git: "https://gitlab.univ-lille.fr/sae302/2023/H3_SAE3A",
  },
  {
    name: "JSPACE",
    description: {
      fr:
          "Avec l'ingéniosité de trois camarades de classe, nous avons créé un jeu de tir spatial qui transporte les joueurs vers des batailles intergalactiques palpitantes, que ce soit en solo ou en multijoueur. Explorez des univers visuellement époustouflants, affrontez des ennemis redoutables et vivez une expérience immersive qui promet des heures d'excitation et d'aventure. Notre collaboration a donné naissance à un jeu captivant et novateur, offrant une expérience de jeu inoubliable aux passionnés d'aventure spatiale.",
      en: "With three classmates, we developed a monster hunting game. In this game, the user can choose to play as either the monster or the hunter and can play against another player or against artificial intelligence. The goal is simple: the monster must reach the exit while the hunter must kill it before it gets there.",
    },
    date: 2024,
    image: Jspace,
    techno: ["Javascript", "HTML / CSS", "Socket.io", "Figma"],
    values: ["Collaboration", "Créativité", "Organisation", "Gestion du temps"],
    git: "https://gitlab.univ-lille.fr/aymeri.tourneur.etu/sae-2024-groupei-tourneur-duplouy-lasoa",
  },
];

export default Project;
