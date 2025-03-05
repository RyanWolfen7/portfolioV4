import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";
import Home from "./views/home/Home";
import NavSelect from "./views/home/nav/NavSelect";
import Content from "./views/home/Content";
import navTabs from "./models/navTabs";

import ContentSectionSelector from "./views/home/content/_ContentSectionSelector";

const host = process.env.HOST || '0.0.0.0'; // Default to '0.0.0.0' for Vercel
const port = parseInt(process.env.PORT || '3000', 10); // Use PORT environment variable or default to 3000

const app = new Elysia()
  .use(html())
  .state('navTabs', [...navTabs])
  .state('navTabLoadCounter', 0)
  .state('initialLoad', false)
  .get("/", Home)
  .post("/nav/:target", NavSelect)
  .get("/content", Content)
  .post("/content/:target", ContentSectionSelector)
  .get("/resume", () => Bun.file("./public/ShortRyanClark.FullStack.2024.pdf"))
  .get("/styles.css", () => Bun.file("./tailwind-gen/styles.css"))
  .listen({ port, hostname: host });

console.log(
  `Your application is running at http://${app.server?.hostname}:${app.server?.port}`
);

export default app;