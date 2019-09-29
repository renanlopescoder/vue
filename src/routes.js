import ListProjects from "./components/projects/ListProjects.vue";

//import RandomDeck from "./components/clash-royale/RandomDeck";
//import Arenas from "./components/clash-royale/Arenas";
//import NewProject from "./components/projects/NewProject";

// Codding Splitting the build (Lazy load)
const RandomDeck = () => System.import("./components/clash-royale/RandomDeck");
const Arenas = () => System.import("./components/clash-royale/Arenas");
const NewProject = () => System.import("./components/projects/NewProject");

export const routes = [
  { path: "", component: ListProjects, name: "home" },
  { path: "/new", component: NewProject, name: "newProject" },
  { path: "/shuffledeck", component: RandomDeck, name: "randomDeck" },
  { path: "/arenas", component: Arenas, name: "arenas" },
  { path: "*", component: ListProjects }
];
