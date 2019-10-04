import ListProjects from "./components/projects/ListProjects.vue";

// Codding Splitting the build (Lazy load)
const RandomDeck = () => System.import("./components/clash-royale/RandomDeck");
const Arenas = () => System.import("./components/clash-royale/Arenas");
const Form = () => System.import("./components/projects/Form");

export const routes = [
    { path: "", component: ListProjects, name: "home" },
    { path: "/project/form/:id", component: Form, name: "updateProject" },
    { path: "/project/form", component: Form, name: "newProject" },
    { path: "/shuffledeck", component: RandomDeck, name: "randomDeck" },
    { path: "/arenas", component: Arenas, name: "arenas" },
    { path: "*", component: ListProjects },
];
