import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";
import Home from "./views/home/Home";
import AboutMe from "./views/home/content/AboutMe";
import NavSelect from "./views/home/nav/NavSelect";
import Content from "./views/home/Content";

const app = new Elysia()
  .use(html())
  .get("/", Home)
  .post("/nav/:selected", NavSelect)
  .post("content/:selected", Content)
  .get("/styles.css", () => Bun.file("./tailwind-gen/styles.css"))
  .listen(3000);

console.log(
  `Your application is running at http://${app.server?.hostname}:${app.server?.port}`
);
