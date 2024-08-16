import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";
import Home from "./views/home/Home";
import HomeNav from "./views/home/HomeNav";
import AboutMe from "./views/home/AboutMe";

const app = new Elysia()
  .use(html())
  .get("/", Home)
  .post("/nav/:selected", async ({ params }) => {
    console.log('Nav: ', params.selected)
    const tabs = [
      { target: 'about', selected: false },
      { target: 'experience', selected: false },
      { target: 'skills', selected: false },
      { target: 'certifications', selected: false },
      { target: 'education', selected: false }
    ]
    const items = tabs.map(item => {
      if (item.target == params.selected) item.selected = true
      return item
    })
    return <HomeNav items={items}/>
  })
  .post("content/:selected", async({ params } )=> {
    return (
      <AboutMe selected={params.selected} />
    )
  })
  .get("/styles.css", () => Bun.file("./tailwind-gen/styles.css"))
  .listen(3000);

console.log(
  `Your application is running at http://${app.server?.hostname}:${app.server?.port}`
);
