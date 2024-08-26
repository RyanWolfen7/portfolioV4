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
  const selected = sections.find(x => x.selected == true) || { target: 'about' }
  console.log('selected: ', selected)
  return (
    <div>
      {sections.map(section => <CardSection {...section} />)}
      {/* <AboutMe selected={selected} />
      <Experience selected={selected} /> */}
    </div>
  )
}

export default Content