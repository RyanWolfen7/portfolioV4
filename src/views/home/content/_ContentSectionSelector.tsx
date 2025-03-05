import * as elements from "typed-html";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import { ExperienceType, NavStoreType } from "../../../types/Content";
import Certifications from "./Certifications";

interface ContentSectionSelector {
   params: {
     target: string,
   },
   store: NavStoreType
}

const ContentSectionSelector = ({ params }: ContentSectionSelector) => {
    switch(params.target) {
      case "about": 
        return <AboutMe />
      case "experience":
        return <Experience />
      case "certifications":
        return <Certifications />
      default:
        return "" 
    }
}

export default ContentSectionSelector