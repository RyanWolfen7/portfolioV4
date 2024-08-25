import * as elements from "typed-html";
import AboutMe from "./content/AboutMe"
import Experience from "./content/Experience";

interface Content {
    params: {
        selected: string
    }
}
const Content = async({ params }: Content )=> {
  const { selected = "about" } = params
    return (
      <div>
        <AboutMe selected={selected} />
        <Experience selected={selected} />
      </div>
    )
  }

export default Content