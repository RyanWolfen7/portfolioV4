import * as elements from "typed-html";

interface CardSection {
    section: string,
    selected: boolean,
    children?: elements.Children
}

const CardSection = ({ 
    section,
    selected,
    children
}: CardSection ) => {
    const text: string = section.toUpperCase()
    console.log(selected)
    return (
        <section id={section} class={`mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 ${selected ? 'text-secondary-200 opacity-100' : 'text-accent-100 opacity-10'}`} aria-label={text}>
            <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-main-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 class={`text-sm font-bold uppercase tracking-widest  lg:sr-only`}>
                    {text}
                </h2>
            </div>
            { children }
        </section>
    )
}

export default CardSection