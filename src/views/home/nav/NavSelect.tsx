import * as elements from "typed-html";
import HomeNav from "./HomeNav";
import { NavStoreType } from "../../../types/Content";

interface NavSelect {
   params: {
      target: string,
   },
   store: NavStoreType
}

const NavSelect = async ({ store , params }: NavSelect) => {
  console.log('NAV HIT', params.target, store.initialLoad)
    const tabs = store.navTabs
    if(store.initialLoad) {
      const updatedTabs = tabs.map(tab => { 
        tab.selected = tab.target == params.target 
        return tab
      })
      store = { ...store, navTabs: updatedTabs }
    }
    
    store.navTabLoadCounter == store.navTabs.length - 1  ? store.initialLoad = true : store.navTabLoadCounter++
   
    // const currentSelected = tabs.find(x => x.target == params.target)
    // console.log("current Selected", currentSelected, '\n', currentSelected.selected)
    return <HomeNav items={tabs}/>
  }

export default NavSelect