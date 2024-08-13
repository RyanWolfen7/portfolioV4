import * as elements from "typed-html";

interface HomeNav {
    items: String[]
}

const HomeNav = ({ items }: HomeNav) => {
    return (
        <nav class="nav hidden lg:block" aria-label="In-page jump links">
            <ul class="mt-16 w-max">
                {items.map(item => <ListItem target={item} />)}
            </ul>
        </nav>
    )
}

interface ListItem {
    target: String,
}

const ListItem = ({ target }: ListItem) => {
    const text: String = target.toUpperCase()

    return (
        <li>
            <a class="group flex items-center py-3" href={`${target}`}>
                <span class="nav-indicator mr-4 h-px w-8 bg-secondary-600 transition-all group-hover:w-16 group-hover:bg-secondary-200 group-focus-visible:w-16 group-focus-visible:bg-secondary-200 motion-reduce:transition-none"></span>
                <span class="nav-text text-xs font-bold uppercase tracking-widest text-secondary-500 group-hover:text-secondary-200 group-focus-visible:text-secondary-200">
                    {text}
                </span>
            </a>
        </li>
    )
}

export default HomeNav