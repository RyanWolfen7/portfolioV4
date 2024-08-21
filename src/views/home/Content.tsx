import * as elements from "typed-html";
import AboutMe from "./content/AboutMe"

interface Content {
    params: {
        selected: string
    }
}
const Content = async({ params }: Content )=> {
    return (
      <AboutMe selected={params.selected} />
    )
  }

export default Content