import * as elements from "typed-html";

interface TechBadge {
    name: string
}
const TechBadge = ({ name }: TechBadge) => {

    return (
        <li class="mr-1.5 mt-2">
            <div class="flex items-center rounded-full bg-accent-400/10 px-3 py-1 text-xs font-medium leading-5 text-accent-300 ">
                {name}
            </div>
        </li>
    )
}

export default TechBadge