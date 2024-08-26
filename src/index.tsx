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
import ExperienceCard from "./views/components/ExperienceCard";
import CardSection from "./views/components/CardSection";

const app = new Elysia()
  .use(html())
  .get("/", Home)
  .state('navTabs', navTabs)
  .post("/nav/:selected", NavSelect)
  .get("/content", Content)
  .get("/content/:name", ({ params, store }) => {
    const tabs = store.navTabs
    const updatedTabs = tabs.map(x => { 
      x.selected = x.target == params.name 
      return x
    })
    store = { ...store, navTabs: updatedTabs }
    const { selected } = updatedTabs.find(x => x.target == params.name) || { selected: false }
    console.log("Selected: ", selected, "\nSection: ", params.name, '\nStore: ', store)
    // console.log(params.name)
    switch(params.name) {
      case "about": 
        return <AboutMe selected={selected}/>
      case "experience":
        return <Experience selected={selected}/>
      default:
        return "" 
    }
  })
  .get('/content/experience/jobs', () => {
    const jobs = jobsJSON
    return (
      <ol class="group/list">
        { jobs.map(job => <ExperienceCard {...job}/> ) }
      </ol>
    )
  })
  .get("/styles.css", () => Bun.file("./tailwind-gen/styles.css"))
  .listen(3000);

console.log(
  `Your application is running at http://${app.server?.hostname}:${app.server?.port}`
);
