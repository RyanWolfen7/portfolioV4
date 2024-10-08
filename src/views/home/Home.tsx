import BaseHtml from "../BaseHtml"
import * as elements from "typed-html";
import ProfileCard from "../components/ProfileCard";
import SocialMedia from "../components/SocialMedia";
import { NavStoreType } from "../../types/Content";
import navTabs from "../../models/navTabs";

interface Home {
    html: Function,
    query?: any,
    store: NavStoreType
}

const Home = ({ html, query, store }: Home) => {
    store.initialLoad = false
    store.navTabLoadCounter = 0
    store.navTabs = [
        { target: 'about', selected: true },
        { target: 'experience', selected: false }
    ]
    const { selected = 'about' } = query
    console.log("\n======= NEW FIRE =======\n\n\n", store)

    return html(
        <BaseHtml>
            <body class="bg-main-900 leading-relaxed text-secondary-400 antialiased selection:bg-accent-300 selection:text-accent-900">
                <div class="relative">
                    <div class="pointer-events-none fixed inset-0 z-20 transition duration-300 lg:absolute" style="background: radial-gradient(600px at 1291px 64px, rgba(29, 78, 216, 0.15), transparent 80%);">  </div>
                    <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                        <a href="#content" class="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-accent-400 via-accent-500 to-accent-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">
                            Skip to Content
                        </a>
                        <div class="lg:flex lg:justify-between lg:gap-4 lg:min-h-screen">
                            <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                                <ProfileCard>
                                    <nav
                                        id='nav'
                                        class="nav hidden lg:block"
                                        aria-label="In-page jump links"
                                        hx-post={`/nav/${selected}`}
                                        hx-swap="innerHTML"
                                        hx-trigger="load once"
                                        
                                    />
                                </ProfileCard>
                                <SocialMedia list={[{}, {}, {}]} />
                            </header>
                            <main
                                id="content"
                                class="pt-24 lg:w-1/2 lg:py-24"
                                hx-get={`/content`}
                                hx-swap={`innerHTML scroll:#${selected}:top`}
                                hx-trigger="load once"
                            />
                        </div>
                    </div>
                </div>
            </body>
        </BaseHtml>
    )
}

export default Home