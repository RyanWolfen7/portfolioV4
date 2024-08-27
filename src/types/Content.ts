export interface ExperienceType {
    company: string,
    title: string,
    start: string,
    end: string,
    url?: string | undefined,
    description?: string | undefined,
    tech?: string[] | undefined,
}

export interface NavTabTypes {
    target: string,
    selected: boolean
}

export interface NavStoreType {
    navTabs: NavTabTypes[],
    initialLoad: boolean,
    navTabLoadCounter: number
}