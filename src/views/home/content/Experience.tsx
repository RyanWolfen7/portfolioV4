import * as elements from "typed-html";
import CardSection from "../../components/CardSection";
import jobsJSON from '../../../libs/Experience.json'
import { ExperienceType } from "../../../types/Content";
import ExperienceCard from "../../components/ExperienceCard";

interface Experience {
    jobs: ExperienceType[]
}

const Experience = ({ jobs }: Experience) => {
    return (
        <div>
            <ol class="group/list">
                { jobs.map(job => <ExperienceCard {...job}/>) }
            </ol>
            <div class="mt-12">
                <a
                    class="inline-flex items-baseline leading-tight hover:text-accent-300 focus-visible:text-accent-300 font-semibold text-secondary-200 text-base"
                    target="_blank"
                    rel="noreferrer noopener"
                    href="/resume"
                    aria-label="View Full Resume (opens in a new tab)"
                >
                    <span>
                        "View Full"
                        <span class="inline-block">
                            "Resume ^"
                        </span>
                    </span>
                </a>
            </div>
        </div>
    )
}
// ${selected ? 'text-secondary-200 opacity-100' : 'text-accent-100 opacity-10'}
export default Experience