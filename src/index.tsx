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

const app = new Elysia()
  .use(html())
  .get("/", Home)
  .state('navTabs', navTabs)
  .post("/nav/:selected", NavSelect)
  .get("/content", Content)
  .get("/content/:name", ({ params }) => {
    switch(params.name) {
      case "about": 
        return <AboutMe />
      case "experience":
        return <Experience />
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
