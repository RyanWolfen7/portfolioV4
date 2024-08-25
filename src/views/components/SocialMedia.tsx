import * as elements from "typed-html";

const SocialMedia = ({ list = [{}] }) => {
    return (
        <ul class="ml-1 mt-8 flex items-center">
            {list.map(sm => <SMBadge />)}
        </ul>
    )
}

const SMBadge = () => {

    return (
        <li class="mr-5 text-xs shrink-0">
            <a class="block hover:text-secondary-200" href="">
                One
            </a>
        </li>
    )
}

export default SocialMedia
