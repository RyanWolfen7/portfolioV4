import * as elements from "typed-html";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import jobsJSON from '../../../libs/Experience.json'
import { ExperienceType, NavStoreType } from "../../../types/Content";

interface ContentSectionSelector {
   params: {
     target: string,
   },
   store: NavStoreType
}

const ContentSectionSelector = ({ params, store }: ContentSectionSelector) => {
    console.log("Content Hit", params.target)
    // const currentSelected = store.navTabs.find(x => x.target == params.target)
    // console.log("current Selected", currentSelected)
    switch(params.target) {
      case "about": 
        return <AboutMe />
      case "experience":
        const jobs: ExperienceType[] = jobsJSON
        return <Experience jobs={jobs} />
      default:
        return "" 
    }
}

export default ContentSectionSelector