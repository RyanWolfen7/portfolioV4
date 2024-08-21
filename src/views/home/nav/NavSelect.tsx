import * as elements from "typed-html";
import HomeNav from "./HomeNav";

interface NavSelect {
   params: {
        selected: string
   }
}

const NavSelect = async ({ params }: NavSelect) => {
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
  }

export default NavSelect