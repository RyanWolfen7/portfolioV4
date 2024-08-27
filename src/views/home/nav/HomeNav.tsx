import * as elements from "typed-html";

interface HomeNav {
    items: {
        target: string,
        selected?: boolean
    }[]
}

const HomeNav = ({ items }: HomeNav) => {
    return (
        <ul class="mt-16 w-max">
            {items.map(item => <ListItem target={item.target} selected={item.selected} />)}
        </ul>
    )
}

interface ListItem {
    target: String,
    selected?: Boolean
}

const ListItem = ({ target, selected }: ListItem) => {
    const text: String = target.toUpperCase()
    return (
        <li>
            <a 
                id={`nav-${target}`}
                class="group flex items-center py-3"
                hx-post={`/nav/${target}`}
                hx-trigger="click"
                hx-target="#nav"
                hx-swap={`innerHTML show:#${target}:top`}
            >
                <span class={`mr-4 h-px ${selected ? 'w-16  bg-secondary-200' : 'w-8  bg-secondary-900'} transition-all group-hover:w-16 group-hover:bg-secondary-200 group-focus-visible:w-16 group-focus-visible:bg-secondary-200 motion-reduce:transition-none`}></span>
                <span class={`nav-text text-xs font-bold uppercase tracking-widest ${selected ? ' text-secondary-200' : ' text-secondary-800'} group-hover:text-secondary-200 group-focus-visible:text-secondary-200`}>
                    {text}
                </span>
            </a>
        </li>
    )
}
// href={`?selected=${target}`}

export default HomeNav