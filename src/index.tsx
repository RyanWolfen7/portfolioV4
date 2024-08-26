import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";
import Home from "./views/home/Home";
import AboutMe from "./views/home/content/AboutMe";
import NavSelect from "./views/home/nav/NavSelect";
import Content from "./views/home/Content";
import navTabs from "./models/navTabs";
import Experience from "./views/home/content/Experience";
import jobsJSON from './libs/Experience.json'
import { ExperienceType } from "./types/Content";

const app = new Elysia()
  .use(html())
  .get("/", Home)
  .state('navTabs', navTabs)
  .state('navTabLoadCounter', 0)
  .state('initialLoad', false)
  .post("/nav/:selected", NavSelect)
  .get("/content", Content)
  .get("/content/:name", ({ params, store }) => {
    const defaultSelected = { target: params.name , selected: false }
    const tabs = store.navTabs
    let currentSelected = tabs.find(x => x.target == params.name) || defaultSelected
    if(store.initialLoad) {
      const updatedTabs = tabs.map(tab => { 
        tab.selected = tab.target == params.name 
        return tab
      })
      store = { ...store, navTabs: updatedTabs }
      currentSelected = updatedTabs.find(x => x.target == params.name) || defaultSelected
    }
    if(store.navTabLoadCounter == tabs.length - 1) store.initialLoad = true
    if(!store.initialLoad) store.navTabLoadCounter++
    console.log("\n===== Content: ", params.name)

    switch(params.name) {
      case "about": 
        return <AboutMe />
      case "experience":
        const jobs: ExperienceType[] = jobsJSON
        return <Experience jobs={jobs}/>
      default:
        return "" 
    }
  })
  .get("/styles.css", () => Bun.file("./tailwind-gen/styles.css"))
  .listen(3000);

console.log(
  `Your application is running at http://${app.server?.hostname}:${app.server?.port}`
);
