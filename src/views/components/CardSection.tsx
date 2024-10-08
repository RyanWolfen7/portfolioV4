import * as elements from "typed-html";

interface CardSection {
    target: string,
    selected: boolean
}

const CardSection = ({
    target,
    selected,
}: CardSection) => {
    const text: string = target.toUpperCase()
    return (
        <section 
            id={target} 
            class="trigger mb-16 scroll-mt-16 md:mb-24 lg:mb-60 lg:scroll-mt-24"
            aria-label={text}
        >
            {/* <div class="static bg-accent-100 h-100  min-w-full" hx-get={`/content/${target}`} hx-trigger={`intersect threshold:0.3`}> "" </div> */}
            <div id={'#' + target + '-header'} class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-main-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 class={`text-sm font-bold uppercase tracking-widest  lg:sr-only`}>
                    {text}
                </h2>
            </div>
            <div
                id={`${target}-pointer`}
                class="sticky top-96 min-w-full bg-accent-100 opacity-50"
                hx-post={`/nav/${target}`}
                hx-target="#nav"
                hx-trigger={`intersect threshold:.9`}
                hx-swap={`merge:innerHTML`}
                hx-sync={"#nav:abort"}
            />
                {/* <div
                id={`${target}-wrapper`}
                class="sticky top-96 min-w-full bg-accent-100 opacity-50"
                hx-post={`/content/${target}`}
                hx-target={`#${target}-body`}
                hx-trigger={`intersect threshold:.9`}
                hx-swap={`merge:innerHTML`}
                hx-sync={`#${target}-body:abort`}
            /> */}
            <div
                id={`${target}-body`}
                hx-post={`/content/${target}`}
                hx-trigger={`load once`}
                hx-swap="innerHTML"
            />
        </section>
    )
}

export default CardSection