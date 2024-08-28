import * as elements from "typed-html";
import { ExperienceType } from "../../../types/Content";
import ExperienceCard from "../../components/ExperienceCard";

interface Experience {
    jobs: ExperienceType[]
}

const Experience = ({ jobs }: Experience) => {
    return (
        <div>
            <ol class="group/list">
                {jobs.map(job => <ExperienceCard {...job} />)}
            </ol>
            <div class="mt-12">
                <a
                    class="group/link inline-flex items-baseline leading-tight hover:text-accent-300 focus-visible:text-accent-300 font-semibold text-secondary-200 text-base"
                    target="_blank"
                    rel="noreferrer noopener"
                    href="/resume"
                    aria-label="View Full Resume (opens in a new tab)"
                >
                    <span>
                        View Full
                        <span class="inline-block">
                            Resume
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline-block align-top shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 h-4 motion-reduce:transition-none ml-1 translate-y-px">
                                <path fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </span>
                    </span>
                </a>
            </div>
        </div>
    )
}
// ${selected ? 'text-secondary-200 opacity-100' : 'text-accent-100 opacity-10'}
export default Experience