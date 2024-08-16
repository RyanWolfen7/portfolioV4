import * as elements from "typed-html";
import CardSection from "../components/CardSection";

interface AboutMe {
    selected: string
}

const AboutMe = ({ selected }: AboutMe) => {
    const isSelected: boolean = selected == 'about'
    return (
        <CardSection section="about" selected={isSelected}>
            <div>
                <p class="mb-4">
                    I’m a US Army veteran with 8 years of experience as a full-stack developer specializing in cloud technologies, video-on-demand (VOD) systems, and payment processing.
                    As a
                    <a class={`z-40 font-bold hover:text-accent-200 focus-visible:text-accent-200`}>
                        US citizen
                    </a>
                    currently based in
                    <a class={`font-bold hover:text-accent-200 focus-visible:text-accent-200`}>
                        Florida
                    </a>
                    While I may not be the person who can write a fast inverse square root, I am a versatile team member who thrives in any situation, a 
                    <a class="z-40 font-bold hover:text-accent-200 focus-visible:text-accent-200">

                        “Swiss Army knife”
                    </a> 
                    for diverse challenges.
                </p>
                <p class="mb-4">
                    Throughout my career, I’ve wored fullstack in
                    <a class="font-bold hover:text-accent-200 focus-visible:text-accent-200" href="https://healthera.co.uk/" target="_blank" rel="noreferrer noopener">
                        startups
                    </a>
                    ,
                    <a class="font-bold hover:text-accent-200 focus-visible:text-accent-200" href="https://www.simplertrading.com/" target="_blank" rel="noreferrer noopener">
                        small buisnesses
                    </a>
                    ,
                    <a class="font-bold hover:text-accent-200 focus-visible:text-accent-200" href="https://www.americanexpress.com" target="_blank" rel="noreferrer noopener">
                        global enterprizes
                    </a>
                    , and 
                    <a class="font-bold hover:text-accent-200 focus-visible:text-accent-200" href="https://www.tbnplus.com/home" target="_blank" rel="noreferrer noopener">
                        global multi-media corperations
                    </a>. 
                    I carry a wealth of experience with me into every project. Currently I'm exploring new technologies (
                        <a class="font-bold hover:text-accent-200 focus-visible:text-accent-200" href="https://github.com/RyanWolfen7/portfolioV4" target="_blank" rel="noreferrer noopener">
                            such as this site
                        </a>
                    ) and trying to refine my core fundamentals. I also mentor new developers and have a private discord codecamp for people I meet that are interested in becoming a developer.
                    
                </p>
                <p class="mb-4">
                    When I'm not banging my head against the wall coding, I like to spend time with the family. I'm a father of two little boys and a proud husband of my Peruvian Princess.
                    When I do have time to myself I could be up to anything from bush craft, writing music, learning a new skill, art, poetry, gaming, ect ect. 
                    I have so many interests and hobbies, but so little time. Chances are I am familiar with whatever your slice of life is and if not I'd like to be.
                </p>
            </div>
        </CardSection>
    )
}

export default AboutMe