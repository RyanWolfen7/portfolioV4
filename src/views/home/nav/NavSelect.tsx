import * as elements from "typed-html";
import HomeNav from "./HomeNav";
import { NavTabTypes } from "../../../models/navTabs";

interface NavSelect {
   params: {
        selected: string
   },
   store: {
      navTabs: NavTabTypes[],
      initialLoad: boolean
   }
}

const NavSelect = async ({ store , params }: NavSelect) => {
    const defaultSelected = { target: params.selected , selected: false }
    const tabs = store.navTabs
    // let currentSelected = tabs.find(x => x.target == params.selected) || defaultSelected
    console.log("NAV HIT", params)

    const items = tabs.map(item => {
      item.selected = item.target == params.selected
      return item
    })
  //   store = {...store, navTabs: items}
  // const defaultSelected = { target: params.selected , selected: false }
  //   const tabs = store.navTabs
  //   console.log(tabs)
  //   let currentSelected = tabs.find(x => x.target == params.selected) || defaultSelected
  //   if(store.initialLoad) {
  //     const updatedTabs = tabs.map(tab => { 
  //       tab.selected = tab.target == params.selected 
  //       return tab
  //     })
  //     store = { ...store, navTabs: updatedTabs }
  //     currentSelected = updatedTabs.find(x => x.target == params.selected) || defaultSelected
  //   }
    return <HomeNav items={tabs}/>
  }

export default NavSelect