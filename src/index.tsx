import { html } from "@elysiajs/html";
import Home from "./views/home/Home";
import NavSelect from "./views/home/nav/NavSelect";
import Content from "./views/home/Content";
import navTabs from "./libs/navTabs";
import ContentSectionSelector from "./views/home/content/_ContentSectionSelector";
import { createElysia } from "./util/elystia";

export const app = createElysia()
  .use(html())
  .state('navTabs', [...navTabs])
  .state('navTabLoadCounter', 0)
  .state('initialLoad', false)
  .get('/', Home)
  .post("/nav/:target", NavSelect)
  .get("/content", Content)
  .post("/content/:target", ContentSectionSelector)
  .get("/resume", () => Bun.file("./public/ShortRyanClark.FullStack.2024.pdf"))
  .get("/styles.css", () => Bun.file("./tailwind-gen/styles.css"))
  .get('/health', (ctx) => 'ok');

export type App = typeof app;
export type AppContext = Parameters<App['listen']>[0];
export type AppServer = ReturnType<App['listen']>;      
export default app;