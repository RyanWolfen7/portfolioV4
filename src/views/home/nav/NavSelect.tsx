import * as elements from "typed-html";
import HomeNav from "./HomeNav";
import { NavTabTypes } from "../../../models/navTabs";

interface NavSelect {
   params: {
        selected: string
   },
   store: {
      navTabs: NavTabTypes[]
   }
}

const NavSelect = async ({ store , params }: NavSelect) => {
    const tabs = store.navTabs
    const items = tabs.map(item => {
      item.selected = item.target == params.selected
      return item
    })
    store = {...store, navTabs: items}
    return <HomeNav items={items}/>
  }

export default NavSelect