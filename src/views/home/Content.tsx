import * as elements from "typed-html";
import AboutMe from "./content/AboutMe"
import Experience from "./content/Experience";
import { NavTabTypes } from "../../models/navTabs";
import CardSection from "../components/CardSection";

interface Content {
  store: {
    navTabs: NavTabTypes[]
  }
}
const Content = async ({ store }: Content) => {
  const sections = store.navTabs
  console.log(sections)
  return (
    <div>
      { sections.map(section => <CardSection {...section} />)}
      {/* <AboutMe selected={selected} />
      <Experience selected={selected} /> */}
    </div>
  )
}

export default Content