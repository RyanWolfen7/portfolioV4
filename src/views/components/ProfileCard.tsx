import * as elements from "typed-html";

interface ProfileCard {
    name?: String,
    title?: String,
    description?: String,
    children?: elements.Children
}

const defaultText = "Passionate web developer with a focus on creating seamless user experiences and functional designs. I enjoy solving problems and bringing ideas to life in the browser."

const ProfileCard = ({ 
    name = "Ryan Clark", 
    title = "Fullstack Web Developer",
    description = defaultText,
    children
}: ProfileCard) => {
    return (
    <div id="Header">
        <h1 class="text-4xl font-bold tracking-tight text-secondary-200 sm:text-5xl">
            <a href="/"> {name} </a>
        </h1>
        <h2 class="mt-3 text-lg font-medium tracking-tight text-secondary-200 sm:text-xl"> 
            {title} 
        </h2>
        <p class="mt-4 max-w-xs leading-normal text-secondary-200">
            {description}
        </p>
        {children}
    </div>

    )
}

export default ProfileCard
