import * as elements from "typed-html";

const defaultText = "Passionate web developer with a focus on creating seamless user experiences and functional designs. I enjoy solving problems and bringing ideas to life in the browser."

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
